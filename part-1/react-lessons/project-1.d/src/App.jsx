import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  const [value, setValue] = useState(0)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}></Display>
      <Button text={'Thousand'} handleClick={() => setToValue(1000)}></Button>
      <Button handleClick={() => setToValue(0)} text={'Zero'}></Button>
      <Button handleClick={() => setToValue(value + 1)} text={'+1'}></Button>
    </div>
  )
}

export default App