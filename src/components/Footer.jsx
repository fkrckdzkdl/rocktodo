import { useContext, useState } from 'react';
import {TodoContext} from './TodoWrapper'
import styles from './Footer.module.css'

function Footer() {
    const {addTodo} = useContext(TodoContext);
    const [plusTodo,setPlusTodo] = useState();

    // (공백 제거 처리)
    const HandleChange = (val)=>{
      console.log(val); 
      setPlusTodo(val.trim());
      
    }

    // 리스트추가 버튼 
    const handleAdd = ()=>{
      if(plusTodo.length===0){
        alert('올바른 값을 입력하세요 !');
        document.querySelector("#TB").value='';
        setPlusTodo('');
        return;
      }
      addTodo(plusTodo);
      document.querySelector("#TB").value='';
      setPlusTodo('');
    }
  

    return (
      <div className={styles.Footer}>
        <input id='TB'
         className={styles.TextBox}
         type='textfeild'
         onChange={(event)=>{HandleChange(event.target.value)}}
         onKeyUp={(event)=>{if(event.key==="Enter") handleAdd()}}/>
        <button className={styles.AddBtn} onClick={()=>handleAdd()}>추가</button>
      </div>
    );
  }
  
  export default Footer;
  