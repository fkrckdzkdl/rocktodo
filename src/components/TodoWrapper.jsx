import { createContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


export const TodoContext = createContext();

function TodoWrapper() {
  
  const [todos,setTodos] = useState(["발치우기","리리리"]);
  
  const addTodo =(something)=>{
    setTodos((prev)=>prev.push(something))
  }
    return (
      <div className="Wrapper">
        <TodoContext.Provider value={{todos,addTodo}}>

        <Header />
        <Main />
        <Footer />
        </TodoContext.Provider>
      </div>
    );
  }
  
  export default TodoWrapper;
  