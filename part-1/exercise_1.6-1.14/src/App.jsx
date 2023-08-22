import React, {useState} from 'react'

const Display = ({feedback, text}) => <div>{text}: {feedback}</div>
const Statistics = ({divisor, numerator, text}) => <div>{text}: {numerator/divisor}</div>
const Name = ({text}) => <h1>{text}</h1>
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)

  const updateStatistics = (newValue, setFeedback) => {
    setFeedback(newValue)
    setAll(all + 1)
    if (setFeedback == setBad){
      setTotal(total - 1)
    }else if(setFeedback == setGood){
      setTotal(total + 1)
    }
  }

  if (all === 0) {
    return (
      <div>
        <div>
          <Name text={'Feedback Buttons'}></Name>
          <Button text={'good'} handleClick={() => updateStatistics(good + 1, setGood)}></Button>
          <Button text={'neutral'} handleClick={() => updateStatistics(neutral + 1, setNeutral)}></Button>
          <Button text={'bad'} handleClick={() => updateStatistics(bad + 1, setBad)}></Button>
        </div>
        <div>
          No feedback has been given
        </div>
      </div>
    )
  }
  return (
    <div>
      <div>
        <Name text={'Feedback Buttons'}></Name>
        <Button text={'good'} handleClick={() => updateStatistics(good + 1, setGood)}></Button>
        <Button text={'neutral'} handleClick={() => updateStatistics(neutral + 1, setNeutral)}></Button>
        <Button text={'bad'} handleClick={() => updateStatistics(bad + 1, setBad)}></Button>
      </div>
        <div>
        <Name text={'Statistics'}></Name>
        <Display text={'good'} feedback={good}></Display>
        <Display text={'neutral'} feedback={neutral}></Display>
        <Display text={'bad'} feedback={bad}></Display>
        <Display text={'all'} feedback={all}></Display>
        <Statistics text={'average'} numerator={total} divisor={all}></Statistics>
        <Statistics text={'positive'} numerator={good} divisor={all}></Statistics>
      </div>
    </div>
  )

  
}

export default App