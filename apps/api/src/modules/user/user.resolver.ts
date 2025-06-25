import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { Member } from 'common/entities/member.entity'
import { CreateUserDTO } from './models/create-user.dto'

@Resolver()
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => String, { name: 'listUsers' })
	async listUsers() {
		return 'users'
	}

	@Mutation(() => Member, { name: 'createUser' })
	async createOne(@Args('data') data: CreateUserDTO) {
		return this.userService.createUser(data)
	}
}
