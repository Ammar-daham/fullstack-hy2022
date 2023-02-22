import { createSlice } from "@reduxjs/toolkit"
import { act } from "@testing-library/react"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

export const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
      console.log(JSON.parse(JSON.stringify(state)))
    },
    voteForAnecdote(state, action) {
      const id = action.payload
      const voteForAnecdote = state.find(a => a.id === id)
      const votedItem = {
        ...voteForAnecdote,
        votes: voteForAnecdote.votes + 1,
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedItem,
      )
    }
  }
})

// const anecdoteReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch (action.type) {
//     case 'VOTE':
//       const id = action.payload.id
//       const voteForAnecdote = state.find(a => a.id === id)
//       const votedItem = {
//         ...voteForAnecdote,
//         votes: voteForAnecdote.votes + 1,
//       }
//       return state.map(anecdote =>
//         anecdote.id !== id ? anecdote : votedItem,
//       )
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload]
//     default:
//       return state
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       votes: 0,
//       id: getId()
//     }
//   }
// }

// export const voteForAnecdote = (id) => {
//   return {
//     type: 'VOTE',
//     payload: { id }
//   }
// }


export const  { createAnecdote, voteForAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer