import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'

import { SignInDTO } from './models/sign-in.dto'
import { PrismaService } from 'shared/prisma/prisma.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prisma: PrismaService,
	) {}

	private async comparePassword(password: string, hashPassword: string) {
		const compare = await bcrypt.compare(password, hashPassword)

		return compare
	}

	async generateToken(user: any) {
		const emailNormalized = user.email.toLowerCase().trim()

		const payload = { email: emailNormalized, userId: user.id }

		return {
			accessToken: this.jwtService.sign(payload, { expiresIn: '1d' }),
		}
	}

	async signIn(input: SignInDTO) {
		const { email, password } = input

		const emailNormalized = email.toLowerCase().trim()

		const user = await this.prisma.user.findUnique({
			where: { email: emailNormalized },
		})

		if (!user) {
			throw new Error('User not exists!')
		}

		const { password: hashedPassword } = user

		const validatePassword = await this.comparePassword(
			password,
			hashedPassword,
		)

		if (!validatePassword) {
			throw new Error('Password incorrect!')
		}

		const { accessToken } = await this.generateToken(user)

		return { accessToken, user }
	}
}
