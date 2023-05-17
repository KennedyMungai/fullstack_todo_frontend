'use client'

import { Provider } from 'react-redux'
import store from './store/store'

type Props = {}

const ReduxProvider = (props: Props) => {
	return <Provider store={store}>ReduxProvider</Provider>
}

export default ReduxProvider
