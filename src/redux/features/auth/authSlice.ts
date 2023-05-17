import { createSlice } from '@reduxjs/toolkit'

interface AuthTemplate {
	isAuthenticated: boolean
	isInitialized: boolean
	user: any
}

const initialState: AuthTemplate = {
	isAuthenticated: false,
	isInitialized: false,
	user: null
}

const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		login: () => {},
		logout: () => {}
	}
})


export default authSlice.reducer