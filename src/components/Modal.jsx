import React from 'react'
import Succes from '../success_icon.svg'
import Error from '../alert_icon.svg'
import Ok from '../ok.svg'
import TryAgain from '../tryAgain.svg'

export const Modal = (props) => {
    const success = props.success;
    const successinfo = {
        boldText: "Uspješna prijava",
        info: "Dok čekaš rezultate ovog zadatka opusti se uz neko dobro pivo! Kod nas u Enterwellu nema razloga za brigu.",
        buttonText: "Ok"
    }
    const errorInfo = {
        boldText: "Neuspješna prijava",
        info: "Tko radi taj i griješi.",
        buttonText: "Pokušajte ponovno"
    }
    return (
        <div className="modal">
            <img src={success ? Succes : Error} className={"success-icon"} alt="" />
            <p className="successApply">{success ? successinfo.boldText : errorInfo.boldText}</p>
            <p className="modalSmallText">{success ? successinfo.info : errorInfo.info}</p>
            <img src={success ? Ok : TryAgain} className={"modalButton"} alt="" onClick={props.handleClose.bind()} />
        </div>
    );
};