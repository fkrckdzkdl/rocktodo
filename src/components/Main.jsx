import { useContext, useEffect, useState } from 'react';
import styles from './Main.module.css'
import {TodoContext} from './TodoWrapper'

// prop 받을떄는 {} 써서
function Main({onclickSaveBtn}) {
  // context로 가져올 때는 {}를 써줘야 한다
    const {todos,viewState,balckMode,deleteTodo,completeTodo} = useContext(TodoContext);

    const [todoList,setTodoList] =useState();
    
    // 인라인 스타일에 js의 객체를 전달할 수 있다
    let blckMode =balckMode? {backgroundColor:'black',color:'white'} : undefined

    // 버튼에 따라 필터링하여 출력
    useEffect(()=>{
      switch(viewState){
        case 'ACTIVE' : 
        const activeTodo = todos.filter((item)=>item.active==='ACTIVE')
        console.log(activeTodo)
        setTodoList(activeTodo.map((todo,index)=>
        (
        <div className={styles.Dolist} key={index}><input type='checkbox' className='check' checked={false} />
         <span>{todo.title}</span>
         <button className={styles.conpletedBtn} onClick={()=>completeTodo(activeTodo,index)}>완료</button>
         <button className={styles.DeleteBtn} onClick={()=>deleteTodo(activeTodo,index)}>삭제</button>
         </div>
        )
        ))
          break;
        case 'COMPLETED' : 
        const completedTodo = todos.filter((item)=>item.active==='COMPLETED')
        setTodoList(completedTodo.map((todo,index)=>
        (
        <div className={styles.Dolist} key={index}><input type='checkbox' className='check' value={index} checked='true' />
         <span style={{textDecoration:'line-through'}}>{todo.title}</span>
         <button className={styles.DeleteBtn} onClick={()=>deleteTodo(completedTodo,index)}>삭제</button>
         </div>
        )
        ))
          break;
        default : 
        setTodoList(todos.map((todo,index)=>
        (
        <div className={styles.Dolist} key={index}><input type='checkbox' className='check' value={index} checked={todo.active==='COMPLETED'&&true} />
         {todo.active==='COMPLETED'?<span style={{textDecoration:'line-through'}}>{todo.title}</span>:<span>{todo.title}</span>}
         {todo.active!=='COMPLETED'&&<button className={styles.conpletedBtn} onClick={()=>completeTodo(todos,index)}>완료</button>}
         <button className={styles.DeleteBtn} onClick={()=>deleteTodo(todos,index)}>삭제</button>
         </div>
        )
        ))
      }
    }, [viewState, todos]);
    
    // todos.map((todo,index)=>
    //   (
    //   <div className={styles.Dolist} key={index}><input type='checkbox' value={index} />
    //    <span>{todo.title}</span>
    //    <button className={styles.DeleteBtn}>삭제</button>
    //    </div>
    //   )
    //   )
    
    return (
      <div className={styles.Main} style={blckMode}>
        {todoList}
        <button className={styles.saveBtn} onClick={()=>onclickSaveBtn()}>저장하기</button>
      </div>
    );
  }
  
  export default Main;
  