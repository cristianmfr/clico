import { LoginForm } from '@/src/components/forms/login-form'

export default function LoginPage() {
	return (
		<div className='w-[19rem] space-y-6'>
			<div className='grid gap-2'>
				<h2 className='text-center font-semibold text-xl'>
					Login to your account
				</h2>
				<p className='text-sm text-center text-muted-foreground'>
					Enter your email below to login to your account
				</p>
			</div>
			<LoginForm />
		</div>
	)
}
