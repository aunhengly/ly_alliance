import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './App.css';
import {productArray} from '../components/productArray';

 class App extends Component {
 	constructor (){
 			super()
 			this.state = {
 				productArray: productArray,
 				searchfield: ''
 			}
 		}
 	// Can not use componentDidMount() below cause the json file is not on internet. is that right?
 	// componentDidMount(){
 	// 	fetch('src/components/productArray.js/users')
 	// 		.then(response => response.json())
 	// 		.then(users => this.setState({productArray: users}));
 	// }


	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}

 	render() {
 		const {productArray, searchfield} = this.state;
 		const filteredItems = productArray.filter(item => {
 			return item.name.toLowerCase().includes(searchfield.toLowerCase())
 		})
 		return(
			<div className='tc'>
				<h1 className='f1'>Welcome to LY Alliance</h1>
				<p>We are under developing</p>
				<SearchBox searchChange = {this.onSearchChange} />
				<Scroll>
					<CardList productArray={filteredItems}/>
				</Scroll>
			</div>
		);
	}	
 }

export default App;