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
import axios from 'axios'

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
                country: '',
                phone: '',
                eMail: '',
                account: '',
            },
            mainTitle: "Prijava na Enterwell nagradnu igru!",
            subtitle: `U ovoj igri svi dobivamo! Ti ćeš izraditi ovu cool formu, a mi \n ćemo imati priliku vidjeti tvoje zlatne linije koda`,
            opacity: 0.26,
            show: false,
            success: false,
            validate:false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
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

    }
    onClick = () =>{
        this.requiredFiled(); 
        this.showModal();

    }
    /* handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      this.setState({
          validate:true
      })
    }; */

    getWPnonce =() =>{

        

        axios.get('http://localhost:3000/')
        .then(res => {
            console.log(res)
        }).catch(error =>{
            console.log(error.response)
        })

        axios.put('http://localhost:3000/',{
              firstName: 'Finn',
              lastName: 'Williams'
            }).then((response) => {console.log(response)
            }).catch(error =>{
                console.log(error.response)
            });
    }


    handleSubmit = (event) => {
        console.log("dd",event)
        this.getWPnonce();
        event.preventDefault();
        
    }

    /* handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
    
        fetch('https://your-node-server-here.com/api/endpoint', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log("rrr", response)
            return response.json();
          });
    
        event.preventDefault();
    } */


    render() {
        console.log(this.state.newPlayer)
        const data = this.state;
        return (
            <div className="mainContainer" >
                <Divtext className="bigTitle" text={data.mainTitle} />
                <Divtext className="mediumTitle" text={data.subtitle} />
                <img src={Ilove1} className="IWE2" alt="" />
                <div className="inner-shadow-rectangle">
                    <div className="leftbox">
                        <UploadBox />
                        <Input
                            name="account"
                            labelUp={false}
                            placeholder="Broj računa*"
                            value={this.state.newPlayer.account}
                            onChange={event => this.handleChange(event, "account")}
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
                        />
                        <Input
                            name="surname"
                            labelUp={true}
                            labelName="Prezime*"
                            labelDown={true}
                            labelDownText="*Obavezno"
                            value={this.state.newPlayer.surname}
                            onChange={event => this.handleChange(event, "surname")}
                        />
                        <Input
                            name="address"
                            labelUp={false}
                            placeholder="Adresa*"
                            value={this.state.newPlayer.address}
                            onChange={event => this.handleChange(event, "address")}
                        />
                        <Input
                            name="houseNumber"
                            labelUp={false}
                            placeholder="Kućni broj*"
                            value={this.state.newPlayer.houseNumber}
                            onChange={event => this.handleChange(event, "houseNumber")}
                        />
                        <Input
                            name="town"
                            labelUp={true}
                            labelName="Mjesto*"
                            labelDown
                            labelDownText="*Obavezna ispuna polja"
                            value={this.state.newPlayer.town}
                            onChange={event => this.handleChange(event, "town")}
                        />
                        <Input
                            name="postalCode"
                            labelUp={false}
                            placeholder="Poštanski broj*"
                            value={this.state.newPlayer.postalCode}
                            onChange={event => this.handleChange(event, "postalCode")}
                        />
                        <Select
                            name="country"
                            labelUp={true}
                            labelName="Država*"
                            handleChange={this.handleInput}
                            onSelect={event => this.handleChange(event, "country")}
                        />
                        <Input
                            name="phone"
                            labelUp={false}
                            placeholder="Kontakt telefon*"
                            value={this.state.newPlayer.phone}
                            onChange={event => this.handleChange(event, "phone")}
                        />
                        <Input
                            name="eMail"
                            labelUp={false}
                            placeholder="E-mail*"
                            value={this.state.newPlayer.eMail}
                            onChange={event => this.handleChange(event, "eMail")}
                        />
                    </div>
                    <form ref="form" onSubmit={this.handleSubmit}>
                    <Button type="submit" className="send" onClick = { this.onClick }>
                         <img src={Send}/>
                    </Button>
                    </form> 
                </div>
                {this.state.show ?
                    <Modal show={this.state.show} handleClose={this.hideModal} success = {this.checkSumbitInfo()}>
                    </Modal> : null
                }
                
            </div>

        )
    }

} export default UserSignupPage;