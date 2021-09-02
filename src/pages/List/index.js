import { useState } from 'react';
import ToDoItem from '../../components/ToDoItem';

import './style.css';

const initialState = [
  { toDo: "Teste", checked: true, dateChecked: new Date(2020, 5, 3) },
  { toDo: "Teste sem checked", checked: false, dateChecked: undefined }
]

const List = () => {
  const [toDoList, setToDoList] = useState(initialState);
  const [toDo, setToDo] = useState('');

  const handleSubmit = () => {
    setToDoList(prevState =>
      [...prevState, { toDo, checked: false, dateChecked: undefined }]);
    setToDo('');
  };

  const handleCheck = (index) => {
    setToDoList(prevState => prevState.map((item, idx) => idx === index ? ({
      ...item,
      checked: !item.checked,
      dateChecked: !item.checked ? new Date() : undefined
    })
      : item)
    )
  }

  const handleRemove = (index) => {
    setToDoList(prevState => prevState.filter((item, idx) => idx !== index));
  }

  return (
    <div className="listContainer">
      <h1>Lista de tarefas</h1>

      <form onSubmit={e => {
        handleSubmit();
        e.preventDefault();
      }}
        
      >
        <input
          placeholder="Digite o nome da tarefa"
          className="addToDo"
          value={toDo}
          onChange={e => setToDo(e.target.value)}
        />
        <button className="addToDoButton" type='submit' disabled={!toDo}>Adicionar tarefa</button>
      </form>

      <ul>
        {toDoList?.length ?
          toDoList.map((item, index) =>
            <ToDoItem
              key={index}
              item={item}
              handleCheck={() => handleCheck(index)}
              handleRemove={() => handleRemove(index)}
            />
          )
          : <span>Adicione uma tarefa a lista</span>}
      </ul>
    </div>
  )

}

export default List;