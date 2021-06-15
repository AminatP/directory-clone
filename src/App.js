import React, { useState } from 'react'

function App() {
  return (
    <div>
      <Folder name="Documents">
        <File name="resume.pdf"/>
        <File name="coverLetter.pdf"/>
      </Folder>
      <Folder name="Music">
        <File name="aria.mp3"/>
        <File name="ListenToYourHeart.mp3"/>
      </Folder>
      <Folder name="Downloads">
        <File name="Book.epub"/>
        <File name="Book3.epub"/>
      </Folder>
    </div>
  );
}



const Folder = (props) => {
  const [ value, setValue ] = useState(false)

  const clickHandler = () => {
    setValue(!value)
  }

  return(
    <div>
      <h3 onClick={clickHandler}>{props.name}</h3>
      <p>{value ? props.children : null}</p>
    </div>
  )
}

const File = (props) => {
  return(
    <div>{props.name}</div>
  )
}



export default App;
