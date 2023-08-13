/* eslint-disable react/prop-types */
const Hello = ( props ) => {
  console.log( props )
  return (
    <div>
      <p>
        Hello { props.name }, you are { props.age } years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'logan'
  const age = 20
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Peter' age='20'/>
      <Hello name='Danny' age='100'/>
      <Hello name='steve' age={ age + 12 }/>
      <Hello name={ name } age={ age }/>
    </div>
  )
}

export default App