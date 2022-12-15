import { useState } from 'react'
import Button from './components/Button'
import HightestVote from './components/HighestVote'
import NumOfVotes from './components/NumOfVotes'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   

  const [selected, setSelected] = useState(0)
  console.log(selected)

  const [ vote, setVote ] = useState(new Array(anecdotes.length).fill(0))
  console.log(vote)

  const clickHandle = () => {
    let random = Math.floor(Math.random() * Math.floor(anecdotes.length))
    setSelected(random);
  }

  const handleVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  

  return (
    <div>
      {anecdotes[selected]}
      <NumOfVotes numOfVotes={vote[selected]}/>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={clickHandle} text="next anecdote" />
      <HightestVote votes={vote} anecdotes={anecdotes}/>
    </div>
  )
}

export default App