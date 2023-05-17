import { createSlice } from '@reduxjs/toolkit'

interface AuthTemplate {
	isAuthenticated: boolean
	isInitialized: boolean
}

const initialState: AuthTemplate = {
	isAuthenticated: false,
	isInitialized: false
}

const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {}
})
