import { color } from '@mui/system';
import React, { useContext } from 'react';
import styles from './Header.module.css'
import {TodoContext} from './TodoWrapper'

function Header() {
  const {viewState,setViewState,balckMode,setBlackMode} = useContext(TodoContext);

  const onclickAllBtn =()=>{
    console.log(viewState)

    setViewState('ALL')
  }
  const onclickActiveBtn =()=>{
    console.log(viewState)
    setViewState('ACTIVE')
  }
  const onclickCompletedBtn =()=>{
    console.log(viewState)
    setViewState('COMPLETED')
  }
    return (
      <div className={styles.Header}>
        <span>
            <button className={styles.Mode} onClick={()=>setBlackMode((prev)=>!prev)} style={balckMode?{backgroundColor:'white', color:'black'}:undefined}>{balckMode? 'white':'dark'}</button>
        </span>
        <span className={styles.Filters}>
            <button className={styles.Filter} onClick={onclickAllBtn}>All</button>
            <span>|</span>
            <button className={styles.Filter} onClick={onclickActiveBtn}>Active</button>
            <span >|</span>
            <button className={styles.Filter} onClick={onclickCompletedBtn}>Completed</button>
        </span>
      </div>
    );
  }
  
  export default Header;
  