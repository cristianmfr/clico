import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { BaseEntity } from './base.entity'

import { User } from './user.entity'
import { Company } from './company.entity'
import { Role } from '@clico/database/src/types'

registerEnumType(Role, { name: 'roles' })

@ObjectType()
export class Member extends BaseEntity {
	@Field(() => Role)
	role: Role

	@Field(() => User)
	user: User

	@Field(() => Company)
	company: Company
}
