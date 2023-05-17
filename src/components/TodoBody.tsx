'use client'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const TodoBody = (props: Props) => {
	return (
		<Flex direction='column' gap={4} p={4} width={'100vw'} height={'100vh'}>
			<Text>ChickenWings Are the Bomb</Text>
		</Flex>
	)
}

export default TodoBody
