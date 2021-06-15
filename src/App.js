import React, { useState } from 'react'

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Documents">
          <File name="resume.pdf"/>
          <File name="coverLetter.pdf"/>
        </Folder>
        <Folder name="Music">
          <File name="aria.mp4"/>
          <File name="ListenToYourHeart.mp4"/>
        </Folder>
        <Folder name="Downloads">
          <File name="Book.epub"/>
          <File name="Book3.epub"/>
        </Folder>
      </Folder>
      <Folder name="Applications"></Folder>
    </div>
  );
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { name, children } = props
  const direction = isOpen ? 'down' : 'right'

  const handleClick = () => setIsOpen(!isOpen)

  return(
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: '17px' }}>
        {isOpen ? children : null}
      </div>
    </div>
  )
}

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    pdf: 'file image',
    epub: 'file image outline',
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
};
export default App;
