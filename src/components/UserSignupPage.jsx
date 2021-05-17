import React from 'react'
import Divtext from './Divtext'
import Ilove1 from '../Ilove1.svg'
import Ilove2 from '../Ilove2.svg'
import Input from './Input';
import Select from './Select';
import UploadBox from './UploadBox';
import Send from '../button.svg'
import { Modal } from './Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Form from 'react-bootstrap/Form'

class UserSignupPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newPlayer: {
                name: '',
                surname: '',
                address: '',
                houseNumber: '',
                town: '',
                postalCode: '',
                country: 'HR',
                phone: '',
                eMail: '',
                account: '',
                photo: ''
            },
            mainTitle: "Prijava na Enterwell nagradnu igru!",
            subtitle: `U ovoj igri svi dobivamo! Ti ćeš izraditi ovu cool formu, a mi \n ćemo imati priliku vidjeti tvoje zlatne linije koda`,
            opacity: 0.26,
            show: false,
            success: false,
            empty: true,
            uploadSucces: false,
            submit: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.requiredFiled = this.requiredFiled.bind(this);
        this.onClick = this.onClick.bind(this);
        this.entryGame = this.entryGame.bind(this);
        this.setDocumentName = this.setDocumentName.bind(this);

    }

    entryGame = () => {
        console.log("entry")
        fetch('http://localhost/enterwell/create-account.php', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                account: this.state.newPlayer,
                name: this.state.newPlayer,
                surname: this.state.newPlayer,
                address: this.state.newPlayer.address,
                houseNumber: this.state.newPlayer.houseNumber,
                town: this.state.newPlayer.town,
                postalCode: this.state.newPlayer.postalCode,
                country: this.state.newPlayer.country,
                phone: this.state.newPlayer.phone,
                eMail: this.state.newPlayer.eMail,
                photo: this.state.newPlayer.photo
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("resoi", responseJson);
            }).catch((error) => {
                console.error(error);
            });

    }

    handleChange = (event, fieldName) => {
        const value = fieldName !== "country" ? event.target.value : event;
        this.setState(
            prevState => ({
                newPlayer: {
                    ...prevState.newPlayer,
                    [fieldName]: value
                }

            })
        )
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    checkSumbitInfo = () => {
        return this.state.newPlayer.account ? true : false;
    }

    requiredFiled = () => {

        return this.state.newPlayer.name &&
            this.state.newPlayer.surname &&
            this.state.newPlayer.address &&
            this.state.newPlayer.houseNumber &&
            this.state.newPlayer.town &&
            this.state.newPlayer.postalCode &&
            this.state.newPlayer.country &&
            this.state.newPlayer.phone &&
            this.state.newPlayer.eMail &&
            this.state.newPlayer.account &&
            this.state.newPlayer.photo ? false : true
    }

    onClick = () => {
        this.showModal();
        this.entryGame();
    }


    handleSubmit = (event) => {

        event.preventDefault();
    }

    setDocumentName = (name, success) => {
        this.setState(prevState => ({
            newPlayer: {
                ...prevState.newPlayer,
                photo: name
            },
            uploadSucces: success

        }))
    }


    render() {
        const data = this.state;
        return (
            <div className="mainContainer" >
                <Divtext className="bigTitle" text={data.mainTitle} />
                <Divtext className="mediumTitle" text={data.subtitle} />
                <img src={Ilove1} className="IWE2" alt="" />
                <div className="inner-shadow-rectangle">
                    <div className="leftbox" >
                        <UploadBox documentName={this.setDocumentName} />
                        {this.state.newPlayer.photo == "Prijenos nije uspio" ? <Form.Label className="labelDrop">{"*Format nije podržan"}</Form.Label> : null}
                        <Input
                            name="account"
                            labelUp={false}
                            placeholder="Broj računa*"
                            value={this.state.newPlayer.account}
                            onChange={event => this.handleChange(event, "account")}
                            empty={this.state.empty}
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="rigthbox">
                        <Input
                            name="name"
                            labelUp={true}
                            labelName="Ime*"
                            value={this.state.newPlayer.name}
                            onChange={event => this.handleChange(event, "name")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="surname"
                            labelUp={true}
                            labelName="Prezime*"
                            labelDown={true}
                            labelDownText="*Obavezno"
                            value={this.state.newPlayer.surname}
                            onChange={event => this.handleChange(event, "surname")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="address"
                            labelUp={false}
                            placeholder="Adresa*"
                            value={this.state.newPlayer.address}
                            onChange={event => this.handleChange(event, "address")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="houseNumber"
                            labelUp={false}
                            placeholder="Kućni broj*"
                            value={this.state.newPlayer.houseNumber}
                            onChange={event => this.handleChange(event, "houseNumber")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="town"
                            labelUp={true}
                            labelName="Mjesto*"
                            labelDown
                            labelDownText="*Obavezna ispuna polja"
                            value={this.state.newPlayer.town}
                            onChange={event => this.handleChange(event, "town")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="postalCode"
                            labelUp={false}
                            placeholder="Poštanski broj*"
                            value={this.state.newPlayer.postalCode}
                            onChange={event => this.handleChange(event, "postalCode")}
                            empty={this.state.empty}
                        />
                        <Select
                            name="country"
                            labelUp={true}
                            labelName="Država*"
                            handleChange={this.handleInput}
                            onSelect={event => this.handleChange(event, "country")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="phone"
                            labelUp={false}
                            placeholder="Kontakt telefon*"
                            value={this.state.newPlayer.phone}
                            onChange={event => this.handleChange(event, "phone")}
                            empty={this.state.empty}
                        />
                        <Input
                            name="eMail"
                            labelUp={false}
                            placeholder="E-mail*"
                            value={this.state.newPlayer.eMail}
                            onChange={event => this.handleChange(event, "eMail")}
                            empty={this.state.empty}
                        />
                    </div>
                    <form ref="form" onSubmit={this.handleSubmit}>
                        <Button type="submit" className="send" disabled={this.requiredFiled()} onClick={this.onClick}>
                            <img src={Send} />
                        </Button>
                    </form>
                </div>
                {this.state.show ?
                    <Modal show={this.state.show} handleClose={this.hideModal} success={this.state.uploadSucces}>
                    </Modal> : null
                }

            </div>

        )
    }

} export default UserSignupPage;