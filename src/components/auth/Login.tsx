'use client'
import { Flex, useColorModeValue } from '@chakra-ui/react'

type Props = {}

const Login = (props: Props) => {
	return (
		<Flex height={'100vh'} align={'center'} justify={'center'}>
			<Flex
				direction={'column'}
				align={'center'}
				background={useColorModeValue('gray.100', 'gray.800')}
				p={'2rem'}
				rounded={'0.5rem'}
			>
				Main Box
			</Flex>
		</Flex>
	)
}

export default Login
