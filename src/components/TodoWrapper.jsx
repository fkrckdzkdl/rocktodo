import { createContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


export const TodoContext = createContext();

function TodoWrapper() {
  
  const [todos,setTodos] = useState([]);
  // localStorage는 String으로만 저장이 되기 때문에 객체를 저장할 떄는 json을 사용한다
  // ex) localStorage.setItem('todos', JSON.stringify([{active:'ACTIVE' , title :"발치우기"},{active:'COMPLETED' , title :"샤샤"},{active:'ACTIVE' , title :"이로이"}]))
  useEffect(()=>{setTodos(JSON.parse(localStorage.getItem("todos")))},[]);


  const [viewState,setViewState] = useState('ALL');
  const [balckMode,setBlackMode] = useState(false);
  const addTodo =(something)=>{
    if(todos.length>=10){
      alert("리스트가 가득 찼습니다 !")
      return;
    }

    // 배열에 값 추가 할때는 []를 써야한다
    setTodos([...todos,{active:'ACTIVE' ,title:something}])
  }
  const deleteTodo = (todolist,index)=>{
    const updatedTodo = todos.filter((item)=>item.title!==todolist[index].title);
    setTodos(updatedTodo);
  }
  // map의 결과는 배열이기 때문에 [] 안쓴다
  const completeTodo = (todolist,index)=>{
    todolist[index].active='COMPLETED'
    setTodos((prev)=>prev.map((item)=>{if(item.title===todolist[index].title){
      return{active:todolist[index].active,title:todolist[index].title};
    }
    return item;
  }));
  console.log(todos)
  }
  const onclickSaveBtn = ()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }

    return (
      <div className="Wrapper">
        <TodoContext.Provider value={{todos,viewState,balckMode,setViewState,addTodo,deleteTodo,completeTodo,setBlackMode}}>
          <Header />
          <Main onclickSaveBtn={onclickSaveBtn}/>
          <Footer />
        </TodoContext.Provider>
      </div>
    );
  }
  
  export default TodoWrapper;
  