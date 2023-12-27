/*import React from 'react'*/
import {useState} from 'react';

const Form = () => {
    const [mainTopic, setMainTopic] =useState("");
    const [subTopic, setSubTopic] = useState("");

    Const submitHandler =(ev) =>{
        ev.preventionDefault();
        const note ={
            mainTopic
            subtopic
            content

        }
    }
     return (
   <main>
   <form className="note-form" onSubmit={submitHandler}>
   <h1>Taking Notes<h1/>
   <div>
    <input
   type="text"
  placeholders="Main topic" 
  className ="Main-topic" 
  value={mainTopic}
   onChange={setMainTopic}/>
   
   <input 
   type="text"
   placeholders="Sub Topic" 
   className ="sub-topic" 
   value={subTopic}
    onChange= {setSubTopic}/> 
    </div> 
    <textarea name=""
id="" cols="38" rows="10"></textarea> 
<button > save</button>
{console.log(mainTopic)}
</form>
</main>
 )
}


export default Form;
