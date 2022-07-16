import React, { useEffect, useState } from 'react'

//===============================================================================
// sample component

export function Sample() {

  const[count, setCount] = useState(0)
  
  
  useEffect(()=>{
    if(count>=1){
    document.title = `c- ${count} `
    console.log('hello useeffect inside')}
    else{
  console.log('hello useeffect outside') 
    }
  }, [count])


    return <>
    <div id = 'divsample'>
      <h1>hello {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
      <p>sample component, its a functional with props- props.name !!</p>
    </div>
    </>
  }
