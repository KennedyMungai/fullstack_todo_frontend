import ChakraProviderComponent from '@/Chakra/ChakraProviderComponent'

export const metadata = {
	title: 'Todo App',
	description: 'A simple todo app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<ChakraProviderComponent>{children}</ChakraProviderComponent>
			</body>
		</html>
	)
}
