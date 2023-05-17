'use client'
import { Flex, FormControl, Heading, useColorModeValue } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

type Props = {}

const Login = (props: Props) => {
    const { handleSubmit register, formState: {errors, isSubmitting}} = useForm()

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
				<form>
					<FormControl></FormControl>
				</form>
			</Flex>
		</Flex>
	)
}

export default Login
