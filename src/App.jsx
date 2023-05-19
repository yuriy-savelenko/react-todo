import './index.scss';
import Form from './components/Form';
import { useState } from 'react';
// import Case from './components/Case';

function App() {

  const [submittedValues, setSubmittedValues] = useState([]);
  const [selectValue, setSelectValue] = useState('');


  function handleDelete(index) {
    setSubmittedValues(submittedValues.filter((_, i) => i !== index));
  }

  function changeSelect(event) {
    setSelectValue(event.target.value);
    // submittedValues.filter((e) => {
    //   if (event.target.value === 'all' && e.flag)
    // })

  }

  return (
    <div className="container">
      <Form setSubmittedValues={setSubmittedValues} />
      <select value={selectValue} onChange={changeSelect}>
        <option>all</option>
        <option>completed</option>
        <option>uncompleted</option>
      </select>
      {submittedValues.map((element, index) => (
        <div className='case' key={crypto.randomUUID()}>{element}
          <button onClick={() => handleDelete(index)}>Delete</button>
          <label className='label'>
            <input onChange={() => {
            }} className='check' type="checkbox" />
            <span className='span'></span>
          </label>
        </div>

      ))}

    </div>
  );
}

export default App;
