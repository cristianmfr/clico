import { Field, InputType } from '@nestjs/graphql'

import { Role } from '@clico/database/src/types'

@InputType()
export class CreateUserDTO {
	@Field(() => String)
	name: string

	@Field(() => String)
	email: string

	@Field(() => String)
	password: string

	@Field(() => Role)
	role: Role

	@Field(() => String)
	companyName: string

	@Field(() => String, { nullable: true })
	companyDescription?: string
}
