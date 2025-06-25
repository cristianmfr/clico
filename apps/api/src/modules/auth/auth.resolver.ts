import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { Auth } from 'common/entities/auth.entity'
import { AuthService } from './auth.service'
import { SignInDTO } from './models/sign-in.dto'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => Auth)
	async signIn(@Args('input') input: SignInDTO) {
		return await this.authService.signIn(input)
	}
}
