import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import './FileUploader.css';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [dropzoneActive, setDropzoneActive] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setDropzoneActive(false);
  };

  const handleSubmit = () => {
    console.log(file);
  };

  return (
    <div className={`dropzone ${dropzoneActive ? 'active' : ''}`}>
      <Dropzone
        onDrop={handleDrop}
        onDragEnter={() => setDropzoneActive(true)}
        onDragLeave={() => setDropzoneActive(false)}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive && !isDragReject && <p>Drop it like it's hot!</p>}
            {!isDragActive && <p>Drag and drop a file here, or click to select a file</p>}
            {isDragReject && <p>File type not supported</p>}
          </div>
        )}
      </Dropzone>
      {file && <p>Selected file: {file.name}</p>}
      <button className='fbutton' onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUploader;
