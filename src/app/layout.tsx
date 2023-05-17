import ChakraProviderComponent from '@/Chakra/ChakraProviderComponent'
import ReduxProvider from '@/redux/ReduxProvider'

export const metadata = {
	title: 'Todo App',
	description: 'A simple todo app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<ReduxProvider>
					<ChakraProviderComponent>
						{children}
					</ChakraProviderComponent>
				</ReduxProvider>
			</body>
		</html>
	)
}
