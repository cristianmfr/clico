import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { Member } from 'common/entities/member.entity'
import { CreateUserDTO } from './models/create-user.dto'

@Resolver()
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => [Member], { name: 'listUsers' })
	async listUsers() {
		return this.userService.listUsers()
	}

	@Mutation(() => Member, { name: 'createUser' })
	async createOne(@Args('data') data: CreateUserDTO) {
		return this.userService.createUser(data)
	}

	@Mutation(() => String, { name: 'deleteUser' })
	async deleteOne(@Args('id') id: string) {
		return this.userService.deleteUser(id)
	}
}
