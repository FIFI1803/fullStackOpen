const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>{props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Filip'
  const age = 30 + 2
  return (
    <div>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App