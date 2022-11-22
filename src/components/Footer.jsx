import { useContext } from 'react';
import {TodoContext} from './TodoWrapper'

function Footer() {
    const {addTodo} = useContext(TodoContext);
    return (
      <div>
        <input type='text'></input>
        <button onClick={addTodo}>add</button>
      </div>
    );
  }
  
  export default Footer;
  