import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  let todoList = [
    {
      sno:1,
      title: "React",
      desc: "Learning React"
    },
    {
      sno:2,
      title: "JavaScript",
      desc: "Learning JavaScript"
    },
    {
      sno:3,
      title: "CSS",
      desc: "Learning CSS"
    },
    {
      sno:4,
      title: "HTML",
      desc: "Learning HTML"
    },
    {
      sno:5,
      title: "JAVA",
      desc: "Learning JAVA"
    },
  ];

  const onDelete = ()=>{
    console.log(`You Deleted`);
  }
  return (
    <div className="App">
    <Navbar title="Amit Todos"/>
    <Todos todolist={todoList} onDelete={onDelete}/>
    <Footer/>
    </div>
  );
}

export default App;
