import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const App = () => {
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  const [ counter, setCounter ] = useState(0)

  const buttons = [
    {
      text: 'Add',
      handleClick: increaseByOne
    },
    {
      text: 'Decrease',
      handleClick: decreaseByOne
    },
    {
      text: 'Reset',
      handleClick: reset
    }
  ]

  return (
    <>
      <Display counter={counter}></Display>
      <Button text={buttons[0].text} handleClick={buttons[0].handleClick}></Button>
      <Button text={buttons[1].text} handleClick={buttons[1].handleClick}></Button>
      <Button text={buttons[2].text} handleClick={buttons[2].handleClick}></Button>
    </>
  )
}

export default App