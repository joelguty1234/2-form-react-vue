import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Todo from "./components/allTodo"
const initialStateTodo = JSON.parse(localStorage.getItem('allTodo')) || []

const App = () => {

  const [allTodo, setAllTodo] = useState(initialStateTodo)

  useEffect(() => {
    localStorage.setItem('allTodo', JSON.stringify(allTodo))
  }, [allTodo])

  const addTodo = (allTodo2) => {
    setAllTodo([...allTodo, allTodo2])
  }

  const deleteTodo = id => {
    const newArray = allTodo.filter(allTodo2 => allTodo2.id !== id)
    setAllTodo(newArray)
  }

  const updateTodo = id => {
    const newArray = allTodo.map(allTodo2 => {
      if (allTodo2.id === id) { allTodo2.state1 = !allTodo2.state1 }
      return allTodo2
    })
    setAllTodo(newArray)
  }

  const orderTodo = arrayAllTodo => {
    return arrayAllTodo.sort((a, b) => {
      if (a.priority === b.priority) return 0
      if (a.priority === true) return -1
      if (a.priority === false) return 1
    })
  }

  return (
    <div className="container mb-2 position-absolute top-50 start-50 translate-middle w-400 h-100 ">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todo allTodo={orderTodo(allTodo)} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}
export default App