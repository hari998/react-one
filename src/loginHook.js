import { useState } from "react";

export function useLoginhook() {

    // const[email, setEmail] = useState('')
    // const[password, setPassword] = useState('')

    const[values, setValues] = useState({})
    const[data, setData] = useState(null)

    const handleChange = (event) => {
        event.preventDefault()
        setValues((values)=>({...values, [event.target.name]:event.target.value}))
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setData('Logging-in...')
        const response = await fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...values })
        })
        const dat = await response.json()
        console.log(dat)
        if(dat) {
            setData(dat.msg)
        }
    }
    return {
        values, handleChange, handleSubmit, data
    }
}

