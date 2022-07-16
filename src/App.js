import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { Newsletter } from './newsletter'
import { Signup } from './mysignup'
import { Error } from './error'
import './App.css'
import { Mainheader } from './mainheader'
import { Login } from './login'
import { Sample } from './sample';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainheader />} >
          <Route index element={<Home />} />
          <Route path='newsletter' element={<Newsletter />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='sample' element={<Sample />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

//=============================================================

/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sample } from './sample'
import { Newsletter } from './newsletter'
import { Login } from './login'
import { Signup } from './signup'
import './index.css'

//==================================================================================
// // sample component - IMPORTED
// function Sample(props) {
//   return <div id = 'divsample'>
//     <p>sample component, its a functional with props- {props.name} !!</p>
//   </div>
// }

//==================================================================================
// login component OLD WAY - IMPORTED
// function Login(props) {
//   return(
//     <form className='classlogin'>
//       <h1>Login</h1>
//       <label><b>Email</b></label>
//       <input type='text' placeholder='enter email' name='email' required></input>
//       <label><b>Password</b></label>
//       <input type='password' placeholder='enter password' name='password' required></input>
//       <button type='submit' className='btn'>Login</button>
//     </form>
//   )
// }

//==================================================================================
// a functional component
function Welcome(props) {
  return <h1>Hello fxn component !! {props.name}</h1>
}
// const root = ReactDOM.createRoot(document.getElementById('root'))
// const ele = <Welcome name='Sara' />
// root.render(ele)

//====================================================================================
//MAIN COMPONENT
// a class component
class Welcom extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello class component !! {this.props.name}</h1>
        <Welcome name='Sara'/>
        <Sample name='Sara' />
        <Newsletter />
        <Login />
        <Signup />
      </div>
    )
  }
}

//=====================================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcom name={'Sara'} />
root.render(element)

//========================================================================================

/* how it works-

// to render react element , first pass DOM element to ReactDOM.createRoot(), then pass the react element to root.render() 
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ele)
function tick() {
  const ele = (<h1>Hello, world! it is {new Date().toLocaleTimeString()}</h1>)
  root.render(ele) }
setInterval(tick, 1000);

*/
