import { useState } from "react";
//===============================================================================
// SignUp Hook my

export function useMysignup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[data, setData] = useState(null)


    const handlenameChange = (event) => {
        setName(event.target.value)
    }

    const handleemailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlepasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const showAlert = () => {
        alert(`details-
        Name: ${name}
        Email: ${email}`)
    }

    // const handleSubmit = event => {
    //     if (event) {
    //         event.preventDefault();
    //         setName('')
    //         setEmail('')
    //         setPassword('')
    //     }
    //     showAlert()
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setData('Signing up...')
        const response = await fetch(`http://localhost:5000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dat = await response.json()
        if(dat){
        setData(dat.msg)
        console.log(dat)
        }
    }

    return {
        name, email, password, handlenameChange, handleemailChange, handlepasswordChange, handleSubmit, showAlert, data
    }
}
