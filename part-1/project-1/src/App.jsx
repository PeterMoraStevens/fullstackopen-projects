import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  
  const course = {
    name : 'Half Stack application development',

    parts : [
      {
        exercises: 10,
        name : 'Fundamentals of React'
      },
      {
        exercises : 7,
        name : 'Using props to pass data'
      },
      {
        name : 'State of a component',
        exercises : 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App;
