import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from './base.entity'

@ObjectType()
export class User extends BaseEntity {
	@Field(() => String)
	name: string

	@Field(() => String)
	email: string

	@Field(() => String, { nullable: true })
	resetToken?: string

	@Field(() => Boolean)
	isActive: boolean
}
