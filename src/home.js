import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()
    const goback = () => {
        navigate(-1)        
    }
    return <>
    <div id="react-home-div">
    <div id="home-div">
        <h1>Hi<span className="waving-hand">👋</span></h1>
    </div>
    <div id="home-button-back">
        <button onClick={goback}>⬅ Back</button>
    </div>
    </div>
    </>
}