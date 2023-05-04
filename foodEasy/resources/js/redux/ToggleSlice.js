import { createSlice } from "@reduxjs/toolkit";


const ToggleSlice = createSlice({
    name : 'toggle',
    initialState : {modalOpen:false, page:'', item:''},
    reducers : {
        ModalOpen : (state,action)=>{
            state.modalOpen = action.payload
        },
        DefPage : (state, action)=>{
            state.page = action.payload
        },
        DefItem : (state, action)=>{
            state.item = action.payload
        }
    }
})
export const {ModalOpen, DefPage, DefItem} = ToggleSlice.actions
export default ToggleSlice.reducer