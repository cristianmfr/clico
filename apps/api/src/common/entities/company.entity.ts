import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from './base.entity'

@ObjectType()
export class Company extends BaseEntity {
	@Field(() => String)
	name: string

	@Field(() => String, { nullable: true })
	description?: string
}
