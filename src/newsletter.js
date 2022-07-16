import { useState } from "react"
import { useNavigate } from "react-router-dom"

//===============================================================================
// Newsletter component

export function Newsletter() {
    const navigate = useNavigate()
    const goback = () => {
        navigate(-1)
    }

    //post form------------------------------------
    const[emailvalue, setEmailvalue] = useState("")
    const handleemailChange = (event) => { setEmailvalue(event.target.value) }

    //----------------------------------------------
    // const showAlert = () => {
    //     alert(`subscribed !!
    //     email: ${emailvalue}`)
    // }
    // const handleSubmit = event => {
    //     console.log('handleSubmit ran');
    //     if (event) {
    //         event.preventDefault();
    //         setEmailvalue('')
    //     }
    //     showAlert()
    // }
    //---------------------------------------------------------
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
            
    //         const res_data = await fetch('http://localhost:5000/subscribe', {
    //             method: 'POST',
    //             body: JSON.stringify(emailvalue)
    //         })
    //         const res_data_next = await res_data.json();
    //         console.log(res_data_next)
    //         // return alert(response.json)
    //     } catch(error){
    //         console.log(error)
    //     }
    // }
    //----------------------------------------------------------
    const[data, setData] = useState(null)
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        setData('subscribing...')
        const response = await fetch(`http://localhost:5000/subscribe`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailvalue })
          })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dat = await response.json()
        setData(dat.msg);
    }
    
    return <>
    <div id='react-newsletter-div'>
        <div id="newsletter-main-div">
            <div id="newsletter-form-div">
                <form id='newsletter-form' onSubmit={handleSubmit}>
            <h1 className="newsletter-form-field">Subscribe 👇</h1>
            <label className="newsletter-form-field"><b>Email </b></label>
            <input className="newsletter-form-field" type='text' placeholder='enter email' name='email' value={emailvalue} onChange={handleemailChange} required></input>
            <button id="newsletter-button-form" type='submit' className='newsletter-form-field'><span>Subscribe </span></button>
        </form>
        </div>
        <div id='newsletter-button1-div'>
            <p>{ !data? '': data }</p>
        <button onClick={goback}>⬅ Back</button>
        </div>
        </div>
    </div>
    </>
}