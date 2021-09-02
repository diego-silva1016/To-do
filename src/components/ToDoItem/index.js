import './style.css';

const ToDoItem = ({item, handleCheck, handleRemove}) => {

  return(
    <li className="itemContainer">
      <input type="checkbox" onClick={handleCheck} checked={item.checked}/>
      {item.dateChecked ? (
        `${item.toDo} - ${item.dateChecked.toLocaleDateString()}`
      ) : item.toDo}
      <span className="removeItem" onClick={handleRemove}>Remover</span>
    </li>
  )
}

export default ToDoItem;