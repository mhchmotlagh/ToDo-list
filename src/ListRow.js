import React, { Component } from 'react';

class ListRow extends Component{
	render(){
		return(
			<div>
				<input type="checkbox" checked={this.props.cheched} onChange={()=>this.props.handleChackboxChange(this.props.id)}/> 
				{this.props.content}
			</div>
		)
	}
}
export default ListRow