import { createSlice } from "@reduxjs/toolkit"

const initialState = 'All'

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter(state, action) {
            console.log('oldState', JSON.parse(JSON.stringify(state)))
            state = action.payload 
            console.log('newState', JSON.parse(JSON.stringify(state)))
            return state
        } 
    }

})

// const filterReducer = (state = 'ALL', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//             return action.payload
//         default:
//             return state
//     }

// }



// export const filter = (filteredAnecdote) => {
//     return {
//       type: 'SET_FILTER',
//       payload: filteredAnecdote
//     }
//   }


//   export default filterReducer

export const { filter } = filterSlice.actions
export default filterSlice.reducer