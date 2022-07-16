import { useNavigate } from 'react-router-dom'
import { useLoginhook } from './loginHook'

//================================================================================
// login component

export function Login() {
  const navigate = useNavigate()
  const gotoback = () => {
    navigate(-1)
  }

  const {values, handleChange, handleSubmit, data} = useLoginhook()

  // const[values, setValues] = useState({})

  // const handleChange = (event) => {
  //   setValues((values)=>({...values, [event.target.name]:event.target.value}))
  // }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(values)
  // }


  return (
    <>
      <div id="react-login-div">
        <div id="login-main-div">
          <div id="login-form-div">
            <form id="login-form" onSubmit={handleSubmit}>
              <h1 className="login-form-field">Login🔒</h1>
              <label><b>Email</b></label>
              <input type='email' placeholder='enter email' name='email' value={values.email} onChange={handleChange} required></input>
              <label><b>Password</b></label>
              <input type='password' placeholder='enter password' name='password' value={values.password} onChange={handleChange} required></input>
              <button id="login-button-form" className="login-form-field" type="submit"><span>Login </span></button>
            </form>
          </div>
          <div id="login-button1-div">
            <p>{ !data? '': data }</p>

            <button onClick={gotoback}>⬅ Back</button>
          </div>
        </div>
      </div>
    </>
  )
}

//=================================================================================

