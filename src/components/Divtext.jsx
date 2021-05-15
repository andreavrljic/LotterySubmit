import React from 'react'

class Divtext extends React.Component {

    render(){
        return (
            <p className={`${this.props.className} textCenter`}>
                 {this.props.text}
            </p>
        )
    }

}export default Divtext