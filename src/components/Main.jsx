import { useContext, useState } from 'react';
import styles from './Main.module.css'
import {TodoContext} from './TodoWrapper'

function Main() {
  // context로 가져올 때는 {}를 써줘야 한다
    const {todos} = useContext(TodoContext);

    return (
      <div className={styles.Main}>
        {todos.map((todo,index)=>{
          return (
          <div className={styles.Dolist}><input type='checkbox' value={index} />
           <span>{todo}</span>
           <button className={styles.DeleteBtn}>삭제</button>
           </div>
          )})}
      </div>
    );
  }
  
  export default Main;
  