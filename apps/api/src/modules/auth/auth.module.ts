import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { jwtSchema } from 'config/jwt.config'
import { PrismaModule } from 'shared/prisma/prisma.module'

import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
	imports: [
		PrismaModule,
		JwtModule.register({ global: true, secret: jwtSchema.secret }),
	],
	providers: [AuthResolver, AuthService],
	exports: [AuthService],
})
export class AuthModule {}
