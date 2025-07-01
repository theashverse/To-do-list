// import "./App.css";
// import TodoList from "./TodoList";
// function App(){
//   return (
//     <>
//     <TodoList/>
//     </>

//   );
//   }
// export default App;

import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <div className="background-blur"></div>
      <div className="todo-wrapper">
        <TodoList />
      </div>
    </>
  );
}

export default App;
