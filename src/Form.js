import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullname: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: [evt.target.value]
        })
    }

    handleClick(evt){
        evt.preventDefault()
        alert(this.state.fullname)
    }

    render(){
        return(
            <div>
                <h1>First React Form</h1>
                <h6>Full Name</h6>
                <input 
                type='text'
                name='fullname'
                value={this.state.fullname}
                onChange={this.handleChange}
                />
                <h6>Email</h6>
                <input 
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                />
                <br></br>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Form;