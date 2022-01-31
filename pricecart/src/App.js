
import './App.css';

function App() {
  let info = [{
    category :"Basic",
    price : "$1/mo",
    users : "10 users",
    gb : "10 gb included",
    email : "Email supported",
    help :"Help supported"
  },{
    category :"Pro",
    price : "$15/mo",
    users : "20 users",
    gb : "100 gb included",
    email : "Email supported",
    help :"Help supported"
  },{
    category :"Enterprise",
    price : "$30/mo",
    users : "200 users",
    gb : "200 gb included",
    email : "Email supported",
    help :"Help supported"
  }
]
  return (
    <div  className="App">
      {info.map(info=> <Welcome 
     category =  {info.category}
     price = { info.price}
     users = { info.users}
     gb ={ info.gb}
     email = { info.email}
     help = { info.help}/>
      )}
    </div>
  );
}

function Welcome({category,price,users,gb,email,help}) {
  return (
    
      <div class="card ">
        <div class="card-header">
          <h4>{category}</h4>
        </div>
        <div class="card-body">
          <h1>{price}</h1>
          <ul >
            <li><i class="fa fa-check"></i>{users}</li>
            <li><i class="fa fa-check"></i>{gb}</li>
            <li><i class="fa fa-check"></i>{email}</li>
            <li><i class="fa fa-times"></i>{help}</li>
          </ul>
        </div>
        <button class="button bg-primary">Buy now</button>
      </div>
      
  )
}
export default App;
