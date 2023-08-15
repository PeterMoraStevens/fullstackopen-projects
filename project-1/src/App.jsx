import Course from './Course'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const exercise = [10, 7, 14]

  return (
    <>
      <Course name={course}/>
      <Content name1={part1} exercise1={exercises1} name2={part2} exercise2={exercises2} name3={part3} exercise3={exercises3}/>
      <Total exercises={exercise}/>
    </>
  )
}

export default App;
