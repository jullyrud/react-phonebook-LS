import React, { Component } from "react"
import { Form } from './form/Form'
import { Info } from './info/Info'
import { Filter } from './filter/Filter'
import { nanoid } from 'nanoid'
import { Wrap } from './App.styled'


export class App extends Component {
  state = {

    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
}
  
  onSubmitHandler = data => {
   
    for (let cont of this.state.contacts) {
      if (data.name === cont.name) {
        return alert (`${data.name} is already in contacts`)
      } 

    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
    
  }
  
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter( cont => cont.id !== id )
    }))
  }
  
  onFilterChange = e => (
    this.setState({
    filter: e.target.value
  })
)
  
  filteredContacts = () => {
    return this.state.contacts.filter(cont => cont.name.toLowerCase().includes(this.state.filter.toLowerCase()))
   }
  
render()
  {
   return (
        <>
          <Wrap>
            <h1>Phonebook</h1>
            <Form inSubmit={this.onSubmitHandler} />
            <h2>Contacts</h2>
            <Filter onFilterChange={this.onFilterChange} />
            <Info contacts={this.filteredContacts()}
              onDelBtnClick={this.deleteContact} />
          </Wrap>
       </>
    ) 
  }

}