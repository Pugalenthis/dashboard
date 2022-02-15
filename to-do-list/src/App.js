import { useState } from 'react';
import './App.css';


function App() {
  const tasks = ["Have meeting at feb 12", "Have class at morning 10am"]


  const [copytask, settask] = useState(tasks)
  const [usertask, setusertask] = useState("")
 const buttonstyle ={
    color :!usertask ? "black" : "white"
 }
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <div className="heading">
              <h1 >TO DO LIST</h1>
            </div>
            <div className="input-group mb-3">
              <input placeholder='Enter your new task......' type="text"  value={usertask} onChange={(event) => {
                setusertask(event.target.value)
                console.log(usertask)
              }}  className="form-control"></input>
              <button style={buttonstyle} disabled={!usertask} onClick={() => {
                   settask([...copytask,usertask])
                   console.log(copytask)
                   console.log(usertask)
                   setusertask("")  
              }} className="btn bg-success btn-outline-secondary" type="button" id="button-addon2">Add new task</button>
            </div>
          </div>
        </div>
      </div>
      {copytask.map((event)=><Tdlist task= {event}/>)}x
    </div>
  );
}

function Tdlist({ task }) {
  const[currentdisplay,setdisplay] = useState(true);
  // const styles = {
    //    display : currentdisplay ? "block" : "none",
    // }
    return (
      <div className='container'>
        <table class="table table-dark">
          <tbody>
            <tr>
              {currentdisplay ?<td ><bold>{task}</bold><button onClick={()=>setdisplay(false)} className='btn bg-danger' >Remove task</button></td> : ""}
            </tr>
          </tbody>
        </table>
      </div>
    ) 
  } 


export default App;


