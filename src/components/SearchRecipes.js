import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
	constructor(props){
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      ingredients: '',
      dish: ''
    };
  }
  search() {
		let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

		fetch(url, {
			method: 'GET'
		}).then(res => res.json())
			.then(json => {
				this.props.setRecipes(json.results);
			});
  }
  render(){
    return(
      <div>
				<Form inline>
					<FormGroup>
						<ControlLabel>Ingredient</ControlLabel>
						{' '}
						<FormControl type="text" placeholder="garlic, chicken" onChange={event => this.setState({ingredients: event.target.value})} />
					</FormGroup>
					{' '}
					<FormGroup>
						<ControlLabel>Dish</ControlLabel>
						{' '}
						<FormControl type="text" placeholder="adobo" onChange={event => this.setState({dish: event.target.value})} />
					</FormGroup>
					{' '}
					<Button onClick={this.search}>Submit</Button>
				</Form>
      </div>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes); // { setRecipes } = mapDispatchToProps() function, no need to write this
