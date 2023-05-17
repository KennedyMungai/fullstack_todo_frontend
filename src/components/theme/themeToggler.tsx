import { Flex, FormLabel, Switch, useColorMode } from '@chakra-ui/react'

type Props = {
	showLabel: boolean
}

const ThemeToggler = ({ showLabel = false }: Props) => {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<Flex
			align={'center'}
			justify={'center'}
			my={'1rem'}
			direction={'column'}
		>
			{showLabel && (
				<FormLabel htmlFor='theme-toggler'>Enable Dark Theme</FormLabel>
			)}
			<Switch
				id='theme-toggler'
				size={'sm'}
				isChecked={colorMode === 'dark' ? true : false}
				onChange={toggleColorMode}
				colorScheme='green'
			/>
		</Flex>
	)
}

export default ThemeToggler
