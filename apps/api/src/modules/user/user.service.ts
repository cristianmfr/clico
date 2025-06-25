import { Injectable } from '@nestjs/common'
import { PrismaService } from 'shared/prisma/prisma.service'
import { CreateUserDTO } from './models/create-user.dto'
import { hash } from 'bcryptjs'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async listUsers() {
		return this.prisma.member.findMany({
			include: { user: true, company: true },
		})
	}

	async findUserById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
		})
	}

	async createUser(data: CreateUserDTO) {
		const { name, email, password, role, companyName, companyDescription } =
			data

		const newUser = await this.prisma.$transaction(async (tx) => {
			const company = await tx.company.create({
				data: {
					name: companyName,
					description: companyDescription,
				},
			})

			const hashPassword = await hash(password, 12)

			const user = await tx.user.create({
				data: {
					name,
					email,
					password: hashPassword,
				},
			})

			const member = await tx.member.create({
				data: {
					role,
					company: {
						connect: {
							id: company.id,
						},
					},
					user: {
						connect: {
							id: user.id,
						},
					},
				},
				include: {
					user: true,
					company: true,
				},
			})

			return member
		})

		return newUser
	}

	async deleteUser(id: string) {
		await this.prisma.user.delete({
			where: { id },
			include: { member_on: true },
		})

		return 'USER DELETED SUCCESSFULLY'
	}
}
