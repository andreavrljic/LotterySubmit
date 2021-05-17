import React from 'react'
import Upload from '../Upload_icon.svg'
import DocumentOk from '../uploadeddocument.svg'
import DocumentError from '../errordocument.svg'

const AddFileOptions = props => {

    const switchMethod = (props) => {

        switch (props.case) {
            case 'start':
                return (<div className={props.case}>
                    <img src={Upload} className={"upload"} alt="" />
                    <p style={{ fontSize: "15px", lineHeight: "20px", margin: " 30px 52px 0px 52px" }}>Povuci i ispusti datoteku kako bi započeo prijenos <br /> <br />ili <b>pretraži računalo</b></p>
                    <hr className="hr" />
                    <p style={{ fontSize: "12px", lineHeight: "16px", marginTop: "115px" }}>
                        PODRŽANI FORMATI <br />pdf, png, jpg</p>
                </div>)
            case 'draganddrop':
                return (
                    <div className={props.case}>
                        <img src={Upload} className={"uploadDrop"} alt="" />
                        <p className="dropText">Ispusti datoteku</p>
                        <p style={{ fontSize: "12px", lineHeight: "16px", marginTop: "158px", color: "var(--whiteOpacity)" }}>
                            PODRŽANI FORMATI <br />pdf, png, jpg</p>
                    </div>
                )
            case 'uploading':
                return (
                    <div className={props.case}>
                        <img src={props.success ? DocumentOk : DocumentError} className={"documentPhoto"} alt="" />
                        <p className="fileTitle">{props.fileName}</p>

                        <p className="uploadTextDown">Povuci i ispusti datoteku kako bi započeo prijenos <br /> <br />ili <b>pretraži računalo</b></p>
                        <hr className="hr" />
                    </div>
                )
            default:
                return null
        }

    }

    return (
        <div className={switchMethod(props)}>
            {switchMethod(props)}
        </div>
    );

};
export default AddFileOptions;