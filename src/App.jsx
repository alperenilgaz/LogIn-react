import './App.css';
import { useState } from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';
function App() {
 const [user, setUser] = useState({name:"",password:""})
 const handleChange=(e)=>{
  if(e.target.type==="text")
  {
      setUser({...user,name:e.target.value})
  console.log(user);
  
  }else{
    setUser({...user,password:e.target.value})
  console.log(user);
  }

 }
 const handleClick = () =>
 {
  if(user.name==='')
  {
    alert("kullanıcı adı boş geçilemez ")
  }else if(user.password==='')
  {
    alert("şifre boş geçilemez")
  }else
  {
    alert(`Hoşgeldin ${user.name.charAt(0).toLocaleUpperCase()+user.name.slice(1)} güncel şifren ${user.password} iyi eğlenceler`)
  }
 }
  return (
    <div className="App">
      <h2>LogIn</h2>
        <Form>
      <Input value={user.name} type={"text"} placeholder={"username"} onChange={handleChange}/>
      <Input value={user.password} type={"password"} placeholder={"password"} onChange={handleChange}/>
      <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}

export default App;
