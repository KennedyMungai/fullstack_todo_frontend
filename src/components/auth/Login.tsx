'use client'
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Heading,
	Input,
	useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface Credentials {
	email: string
	password: string
}

const Login = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting }
	} = useForm()

	const onSubmit = (values: Credentials) => {
		console.log(values)
	}

	return (
		<Flex height={'100vh'} align={'center'} justify={'center'}>
			<Flex
				direction={'column'}
				align={'center'}
				background={useColorModeValue('gray.100', 'gray.800')}
				p={'2rem'}
				rounded={'0.5rem'}
			>
				<Heading>Login</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={errors.email}>
						<Input
							placeholder='Email'
							background={useColorModeValue(
								'gray.300',
								'gray.600'
							)}
							type='email'
							size={'lg'}
							mt={6}
							{...register('email', {
								required: 'Email is a required field'
							})}
						/>
						<FormErrorMessage>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.email}>
						<Input
							placeholder='Password'
							background={useColorModeValue(
								'gray.300',
								'gray.600'
							)}
							type='password'
							size={'lg'}
							mt={6}
							{...register('password', {
								required: 'Password is a required field'
							})}
						/>
						<FormErrorMessage>
							{errors.password && errors.password.message}
						</FormErrorMessage>
					</FormControl>
					<Button
						w={'100%'}
						mt={6}
						type='submit'
						variant={'outline'}
						colorScheme='green'
						isLoading={isSubmitting}
						loadingText='Submitting...'
					>
						<Link href='/auth/login'>Login</Link>
					</Button>
					<Button
						w={'100%'}
						mt={6}
						type='submit'
						variant={'outline'}
						colorScheme='gray'
					>
						<Link href='/auth/register'>Register Instead</Link>
					</Button>
				</form>
			</Flex>
		</Flex>
	)
}

export default Login
