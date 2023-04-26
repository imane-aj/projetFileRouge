import { createSlice } from "@reduxjs/toolkit";


const ToggleSlice = createSlice({
    name : 'toggle',
    initialState : {modalOpen:false},
    reducers : {
        ModalOpen : (state,action)=>{
            state.modalOpen = action.payload
        }
    }
})
export const {ModalOpen} = ToggleSlice.actions
export default ToggleSlice.reducer