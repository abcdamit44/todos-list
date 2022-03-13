import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  let initTodos;
  if (localStorage.getItem("todoList") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todoList"))
  }

  const onDelete = (todo) => {
    setTodoList(todoList.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
  const addTodo = (title, desc) => {
    let sno = 0;
    if (todoList.length == 0) {
      sno = 0;
    } else {
      sno = todoList[todoList.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodoList([...todoList, myTodo])
    console.log(myTodo);
  }


  let [todoList, setTodoList] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));

  }, [todoList])


  return (
    <Router>
      <div className="App">
        <Navbar title="Amit Todos" />

        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todolist={todoList} onDelete={onDelete} />
            </>
          } />


          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
