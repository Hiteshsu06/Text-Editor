import React, { useState, useRef} from 'react';
import JoditEditor from 'jodit-react';
import './texteditor.css';


const Texteditor = () => {
    const editor=useRef(null)
    const [content,setContent]=useState("");
    const [array,setArray]=useState([]);
    const parse = require('html-react-parser');
    const btnHandler=(e)=>{
     e.preventDefault();
     setArray([...array,content]);
     setContent("")
    }
  return (
    <div>
    <div className="editorclass">
        <form>
        <label className='label'><h2>__Write here__</h2></label>
        <JoditEditor
			ref={editor}
			value={content}
			onChange={newContent => setContent(newContent)}
		/>
        <button onClick={btnHandler}>SAVE</button>
        </form>
    </div>
    <div>
        {array.map((curElem,index)=>{
          return(  
          <div key={index} className="mapbox">
            {parse(curElem)}
           </div>)
        })}
    </div>
    </div>
  )
}

export default Texteditor