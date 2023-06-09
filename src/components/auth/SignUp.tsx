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
import ThemeToggler from '../theme/themeToggler'

interface Credentials {
	email: string
	username: string
	password: string
}

const SignUp = () => {
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
				<Heading>Sign Up</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={errors.username}>
						<Input
							placeholder='Username'
							background={useColorModeValue(
								'gray.300',
								'gray.600'
							)}
							type='text'
							size={'lg'}
							mt={6}
							{...register('username', {
								required: 'Username is a required field',
								minLength: {
									value: 5,
									message:
										'The username must be at least 5 characters'
								},
								maxLength: {
									value: 24,
									message:
										'The username cannot be longer than 24 characters'
								}
							})}
						/>
						<FormErrorMessage>
							{errors.username && errors.username.message}
						</FormErrorMessage>
					</FormControl>
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
					<FormControl isInvalid={errors.password}>
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
								required: 'Password is a required field',
								minLength: {
									value: 5,
									message:
										'The password cannot be shorter than 5 characters'
								},
								maxLength: {
									value: 24,
									message:
										'The password cannot be longer than 24 characters'
								}
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
						Register
					</Button>
					<ThemeToggler showLabel={true} />
					<Button
						w={'100%'}
						mt={6}
						type='submit'
						variant={'outline'}
						colorScheme='gray'
					>
						<Link href='/auth/login'>Login Instead</Link>
					</Button>
				</form>
			</Flex>
		</Flex>
	)
}

export default SignUp
