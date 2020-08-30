import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import ListRow from './ListRow'

class App extends Component{
	constructor(){
		super()
		this.state = {
			list: [],
			tempinput: ''
		}
	}
	handleSubmit = (event)  => {
		let newlist = {
			key: uuidv1(),
			content: this.state.tempinput,
			checked: false
		}
		let templist = []
		if(this.state.list){
			templist = this.state.list
		}
		templist.push(newlist)
		this.setState({
			list: templist,
			tempinput: ''
		})
		event.preventDefault()
	}
	handleInputChange = (event) => {
		this.setState({
			tempinput: event.target.value
		})
	} 
	handleChackboxUpdate = (key) => {
       this.setState((prevstate)=>{
       		let newlist = prevstate.list.map((row)=>{
       			if(row.key === key){
       				row.checked = !row.checked;
       			}
       			return row
       		})
       		return {
       			list: newlist
       		}
       })
	}
	render(){
		const list = this.state.list.map((row) => {
			return(<ListRow id={row.key} key={row.key} checked={row.checked} content={row.content} handleChackboxChange={this.handleChackboxUpdate}/>)
		})
		return(
			<React.Fragment>
				{list}
				<form onSubmit={this.handleSubmit}>
	               <input type = "text" value={this.state.tempinput} onChange={this.handleInputChange}/>
	               <button type="submit">Insert</button>
				</form>
			</React.Fragment>
			)
	}
} 

export default App;