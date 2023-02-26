import React, { Component } from "react";
import { AddForm, Input, Label, Button } from './Form.styled'
import PropTypes from 'prop-types';


export class Form extends Component {
state = {
    name: '',
    number: ''
}

handleChahge = event => {
    const { name, value } = event.currentTarget
    this.setState({[name]: value })
}
    
handleSubmit = event => {
    event.preventDefault()
    this.props.inSubmit(this.state)
    this.reset()
}
    
reset = () => {
    this.setState({
        name: '',
        number: ''
})
}
    
 render()
  {
    const { name, number } = this.state
    return (
      <>
        <AddForm onSubmit={this.handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
                type="text"
                value={name}
                onChange={this.handleChahge}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
              />
          
          <Label htmlFor="number">Number</Label>
          <Input
                type="text"
                value={number}
                onChange={this.handleChahge}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id="number"
              />
          <Button type="submit"> add contact </Button>
        </AddForm>
      </>
    ) 
  }

    
}

Form.propTypes = {
  inSubmit: PropTypes.func.isRequired
}