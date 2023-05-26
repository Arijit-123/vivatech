import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Excelexport from './Excelexport';

function App() {
  const[array,setArray]=useState([]);
  const [detail,setDetail]=useState({
   
   name:" ",
   type:" ",
   listname:""


  });
  function addtask(){
    setArray([...array, detail])
  }

  function deleteitems(id){
    const arr=array.filter((elem,ind)=>{
       return  id!=ind
    })
    setArray(arr);
  }
 console.log('array', array);
 console.log('details',detail);
  return (
    <>
    <div>
    <div className='task-detail'>
    Task detail
    <div className='input'>
      <input type="text" value={detail.name} placeholder='Task' onChange={(e)=>setDetail({...detail,name:e.target.value})}></input>
      <input type="text" value={detail.type} onChange={(e)=>setDetail({...detail,type:e.target.value})} ></input>
      <select onChange={(e)=>setDetail({...detail,listname:e.target.value})}>
        <option>1st List</option>
        <option>2nd list</option>
        <option>3nd list</option>
      </select>
     
      <button onClick={addtask}>add</button>
      </div>
    
      </div>
      
   <div>
      {
        array.map((item,id)=>(
      <>
      <div className='details'>
      <table>
        <td> Name: {item.name}</td>
        <td> Type: {item.type}</td>
         <td>List: {item.listname}</td>
      </table>
     
      <button onClick={()=>deleteitems(id)}>delete</button>
      <button>edit</button>
        </div>
</>
        ))
      }

      </div>
    </div>
    <Excelexport exceldata={array} fileName={"Excel Export"}/>
    </>
  );
}

export default App;