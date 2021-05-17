import React, { useState } from 'react';
import Dropzone from "react-dropzone";
import AddFileOptions from './AddFileOptions';

export const UploadBox = (props) => {

    const [uploadedFile, setUploadedFile] = useState()
    const [dragOver, setDragOver] = useState("start")
    const [accepted, setAccepted] = useState()

    function setName(file, success) {
        props.documentName(file, success)
    }

    return (
        <Dropzone
            accept="image/*"
            onDragOver={() => setDragOver("draganddrop")}
            onDragLeave={() => setDragOver("start")}
            onDropAccepted={(file) => { setAccepted(true); setDragOver("uploading"); setName(file[0].name, true); setUploadedFile(file[0].name) }}
            onDropRejected={() => { setAccepted(false); setDragOver("uploading"); setName("Prijenos nije uspio", false); setUploadedFile("Prijenos nije uspio") }}
            maxSize={5000000}
        >
            {({ getRootProps, getInputProps }) => (

                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className="dragdrop-rectangle" style={{ borderColor: accepted == false ? "var(--red)" : "", opacity: accepted == undefined ? "0.26" : "1" }}>
                            <AddFileOptions case={dragOver} success={accepted} fileName={uploadedFile} />
                        </div>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}
export default UploadBox