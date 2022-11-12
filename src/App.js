import logo from './logo.svg';
import './App.css';
import ravi from './images/ravi.JPG'
import chinni from './images/chinni.JPG'
import appu from './images/appu.JPG'

function App() {
  function CARD(props){
    return(
    <div id='cards'>
      <img src= {props.img} alt="image"/>
      <h1>{props.name}</h1>
      <h2>ID={props.ID}</h2>
      <h3>stream = {props.stream}</h3>
      <h3>contactno. = {props.contactno}</h3>
      <h3>Email = {props.email}</h3>
    </div>
    )
  }

  return (
    <div>
    <CARD 
    name="VENKATA RAVI TEJA MYLARU" 
    ID= "9948"
    email="9948512818royal@gmail.com"
    stream="Mechnaical engineering"
    contactno = "9948512818"
    img = {ravi}
    />


<CARD 
    name="P APARNA" 
    ID= "6303"
    email="aparnap.jntu@gmail.com"
    stream="Electrical and Electronics engineering"
    contactno = "6303688948"
    img = {appu}
    />
<CARD 
    name="Mylaru lakshmi devi" 
    ID= "9381"
    email="lucky2642002@gmail.com"
    stream="Electrical and Electronics engineering"
    contactno = "9381722754"
    img = {chinni}
    />
    
</div>
  );
}

export default App;
