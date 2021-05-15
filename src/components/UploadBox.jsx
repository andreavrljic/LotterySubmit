import React, { useState } from 'react';
/* import AddFileOptions from './addFileOptions' */
import Upload from '../Upload_icon.svg'
import Dropzone from "react-dropzone";
import AddFileOptions from './AddFileOptions';

export const UploadBox = (props) => {

    const [uploadedFile, setUploadedFile] = useState()
    const [dragOver, setDragOver] = useState("start")
    const [accepted , setAccepted] = useState()

    return (
        <Dropzone 
        accept="image/*" 
        onDrop={acceptedFiles => {setUploadedFile(acceptedFiles)/* ; setDragOver("uploading") */ }}
        onDragOver={() => setDragOver("draganddrop")}
        onDragLeave ={ () => setDragOver("start")} 
        onDropAccepted = { () => {setAccepted(true);  setDragOver("uploading") }}
        onDropRejected ={ () => {setAccepted(false); setDragOver("uploading")}}
        maxSize={5000000}
        >
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className ="dragdrop-rectangle">
                            <AddFileOptions case={ dragOver } success = { accepted } fileName={ accepted===true ? uploadedFile[0].name : "Prijenos nije uspio"}/>
                        </div>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}
export default UploadBox