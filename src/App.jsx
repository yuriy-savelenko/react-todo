import './index.scss';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {

  const [submittedValues, setSubmittedValues] = useState(JSON.parse(localStorage.getItem('todos') || []));
  const [selectValue, setSelectValue] = useState('all');


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(submittedValues))
  }, [submittedValues])


  function handleDelete(id) {
    setSubmittedValues(submittedValues.filter((element) => element.id !== id));
  }

  const changeCheckboxValue = (id) => {
    setSubmittedValues(submittedValues.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          done: !e.done,
        }
      } return e;
    }))
  }

  function changeSelect(event) {
    setSelectValue(event.target.value);
  }

  return (
    <div className="container">
      <div className="form__container">
        <Form setSubmittedValues={setSubmittedValues} />
        <select className='select' value={selectValue} onChange={changeSelect}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>

        </select>
      </div>
      {submittedValues.filter((e) => {
        if (selectValue === 'all') {
          return true;
        } else if (selectValue === 'completed') {
          return e.done;
        } else if (selectValue === 'uncompleted') {
          return !e.done;
        }
      }).map((element) => (
        <div className='case' key={element.id}>{element.value}
          <button className='btn' onClick={() => handleDelete(element.id)}>Delete</button>
          <label className='label'>
            <input onChange={() => changeCheckboxValue(element.id)} className='check' type="checkbox" checked={element.done} />
            <span className='span'></span>
          </label>
        </div>
      ))}

    </div>
  );
}

export default App;
