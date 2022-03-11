import './App.css';
import {useState} from "react";

function App() {
  const [todo, settodo] = useState('')
  const [allThingstodo, setallThingstodo] = useState([])
  const addThings =(e) =>{
    e.preventDefault()
    let newThing = {todo};
    setallThingstodo([...allThingstodo, newThing]);
  }
  const editFunc = () =>{
    return 0;
  }

  const deleteFunc = (index) =>{
    setallThingstodo(allThingstodo.filter((val, i) => (i != index)))
  }
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-6">
          <h1 className='text-center'>Add What To DO</h1>
          <form action="">
            <input type="text" className='form-control my-2' placeholder='what to do' onChange={(e)=>settodo(e.target.value)} />
            <button className='form-control bg-success text-light' onClick={(e)=>addThings(e)}>Submit</button>
            </form>
          </div>
        <div className="col-6">
          <h1 className='center'>Things to do</h1>
          <div>{allThingstodo.map((value,index)=>(
            <p className='mx-5'>{value.todo} <button className='mx-5 btn btn-success text-light'onClick={editFunc} >Edit</button><button className='mx-3 btn btn-success text-light' onClick={ () => deleteFunc(index)}>Delete</button></p>
          ))}
             </div>
          </div>
        </div>
      </div>
  );
}

export default App;
