import { useNavigate } from "react-router-dom";
import { useMysignup } from "./mysignuphook";

export function Signup() {

    const{name, email, password, handlenameChange, handleemailChange, handlepasswordChange, handleSubmit, showAlert, data} = useMysignup()

    const navigate = useNavigate()

    const goback = () => {
        navigate(-1) 
    }
    // const showAlert = () => {
    //     alert(`state-
    //     Name: ${name}
    //     Email: ${email}`)}

  return (
    <>
    <div id="react-signup-div">
    <div id="signup-main-div">
    <div id="signup-form-div">
      <form id="signup-form" onSubmit={handleSubmit}>
      <h1 className="signup-form-field">SignUp📝</h1>
        <input
          id="name"
          className="signup-form-field"
          type="text"
          placeholder="Name"
          name="name"
          required
          value={name}
          onChange={handlenameChange}
        />
        <input
          id="email"
          className="signup-form-field"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={handleemailChange}
        />
        <input
          id="password"
          className="signup-form-field"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={handlepasswordChange}
        />
        <button id="signup-button-form" className="signup-form-field" type="submit"><span>Register </span></button>
      </form>
      <p>{ !data? '': data }</p>
      </div>
      <div id="signup-button1-div">
      <button type='submit' onClick={showAlert}> See State  </button>
      </div>
      <div id="signup-button2-div">
      <button onClick={goback}>⬅ Back</button>
      </div>
    </div>
    </div>
    </>
  );
}