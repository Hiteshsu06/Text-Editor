import React,{useState} from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { font,align, fontSize, formatBlock, image ,video} from 'suneditor/src/plugins'

const UpdatedEditor=()=>{
const [input,setInput]=useState("");
const [updatedinput,setUpdatedinput]=useState([]);
const [src,selectFile]=useState(null);
const parse = require('html-react-parser');

const saveHandler=(e)=>{
    e.preventDefault();
    setUpdatedinput([...updatedinput,input]);
    console.log("input here :",input)
    setInput("");
    console.log("input value clear here",input)
}
const handleOnchange=(e)=>{
  selectFile(URL.createObjectURL(e.target.files[0]));
  setInput(src)
}

// const handleVideoUpload=(targetElement, index, state, info, remainingFilesCount)=>{
// 	console.log(targetElement, index, state, info, remainingFilesCount,"data here")
// }

  return (
    <div> <input type="file" accepts='video/*' onChange={handleOnchange}/> 
    <form>
          <div>
            {src ? <video src={src} controls muted style={{width:"450px",height:"200px"}}></video> : console.log("nohting")} 
          </div>
      <p> My Other Contents </p>
      <SunEditor
      //  onVideoUpload={handleVideoUpload}
       setContents={input}
       defaultValue={input}
       width='100%' 
       height='200px'
       onChange={(e)=>setInput(e)}
       placeholder="Please type here..."  
       setOptions={{
        videoFileInput:true,
        videoMultipleFile:true,
        plugins:[align,
                 font,
                 fontSize,
                 formatBlock,
                 image,
                 video,
                ]
              ,
        buttonList: [
          ["bold","underline","italic" ],
          ["strike"],
          ["list","align"],
          ["font","fontSize", "formatBlock"],
          ["image","video"]
          ]
        }}
       />
      <button onClick={saveHandler}>SAVE</button>
    </form>
    <div>
        {updatedinput.map((cur,index)=>{
            return(
            <div key={index}>
                  {parse(cur)}
            </div>
            )
        })}
    </div>
    </div>
  );
};
export default UpdatedEditor;