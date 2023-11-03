import { useState } from 'react'

const Button = ({eventHandler,text}) =>
  <button onClick={eventHandler}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGoodFeedback = () => setGood(good+1)
  const giveNeutralFeedback = () => setNeutral(neutral+1)
  const giveBadFeedback = () => setBad(bad+1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button eventHandler={giveGoodFeedback} text={'good'} />
      <Button eventHandler={giveNeutralFeedback} text={'neutral'} />
      <Button eventHandler={giveBadFeedback} text={'bad'} />
      <h1>Statistics</h1>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  )
}

export default App