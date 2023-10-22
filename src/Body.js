import React from 'react'
import { useState } from 'react'


function Body(props) {
  const color =()=>{
    if(props.mode === "light"){
        return "dark"
    }else{
        return "light"
    }
  }
  
  const [text, settext] = useState("");
  const handleUpperClick = () => {
    settext(text.toUpperCase())
  }

  const HandelOnChange =(event)=>{
    settext(event.target.value)
  }
  
  const handleLowerClick =()=>{
    settext(text.toLowerCase())
  }

  const handleclearClick=()=>{
    settext("")
  }

  const handlespaceClick=()=>{
    settext(text.replace(/  +/g, ' '))
  }

  return (
    <div class={`mb-3  text-${color()}`} >
      <h1>Textform</h1>
        <div>
          <label for="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
           <textarea class="form-control" style={{background : props.mode==="light"?"white":"#484848", color : props.mode==="light"?"black":"white" }} id="exampleFormControlTextarea1" value = {text} onChange={HandelOnChange} rows="8"></textarea>
        </div>
        <div>
            <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleUpperClick}>Upper Case</button>
            <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>Lower Case</button>
            <button type="button" class="btn btn-primary my-3 mx-2" onClick={handlespaceClick}>Single space</button>
            <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleclearClick}>Clear</button>
            
        </div>
        <section>
            <h2>Your text summary</h2>
            <p>{text.length} character and {text===""?0:text.trimEnd().split(" ").length} words.</p>
            <p>Estimated time for reading: {text===""?0:text.trimEnd().split(" ").length/250} minutes</p>
            <h3>Preview text</h3>
            <p>{text}</p>
        </section>
    </div>
  )
}

export default Body