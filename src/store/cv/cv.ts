import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit'
import type { ICV } from '../../Types/Api.type'

interface IState {
    allCv: ICV[]
    cv: ICV[]
}

const initialState: IState = {
    allCv: [],
	cv: []
}



export const cvSlice = createSlice({
	name: 'cv',
	initialState,
	reducers: {
		add(state, action: PayloadAction<ICV[]>) {
            state.allCv = action.payload
            state.cv = action.payload
		},
        filtered(state, action: PayloadAction<string>) {
            state.cv = current(state).allCv.filter(el => el.experience === action.payload)
        }
	}
})

export const { add, filtered } = cvSlice.actions
export default cvSlice.reducer