import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialize = createAsyncThunk('Auth/initialize', async () => {})

interface AuthTemplate {
	isAuthenticated: boolean
	isInitialized: boolean
	user: any
	isLoading: boolean
}

const initialState: AuthTemplate = {
	isAuthenticated: false,
	isInitialized: false,
	user: null,
	isLoading: false
}

const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		login: ({ isInitialized, isAuthenticated, user }) => {
			if (isInitialized && isAuthenticated) {
				return user
			}
		},
		logout: ({ isAuthenticated }) => {
			isAuthenticated = false
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(initialize.pending, (state) => {
				state.isLoading = true
				state.isAuthenticated = false
				state.isInitialized = false
				state.user = null
			})
			.addCase(
				initialize.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.isLoading = false
					state.isAuthenticated = true
					state.isInitialized = true
					state.user = action.payload.user
				}
			)
			.addCase(initialize.rejected, (state) => {
				state.isLoading = false
				state.isAuthenticated = false
				state.isInitialized = true
				state.user = null
			})
	}
})

export default authSlice.reducer
