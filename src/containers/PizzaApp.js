import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Three stages:

// First: PizzaSelecion component, select pizza, route to second selection
// Second: Toppings, select additional toppings, route to third selection
// Third: Drinks, select drinks, route to fourth selection
// Fourth: Address and checkout

class PizzaApp extends Component {
	render() {
		console.log("pizzaapp", this.props)
		return (
			<Router>
				<div className="pizzaSelection selectionBox1">
					<h2>Welcome to Pizza-Pizza</h2>
					<h3>Choose your pizza</h3>
					<ul>
						<li>Pizza Choice 1</li>
						<li>Pizza Choice 2</li>
						<li>Pizza Choice 3</li>
						<li>Pizza Choice 4</li>
						<li>Pizza Choice 5</li>
					</ul>
					<div>
						<Link to={`/toppings`}>Continue with toppings and drinks</Link>
					</div>
				</div>
				<Route path={`/toppings`} component={Toppings}/>	
			</Router>
			
		)		
	}

}



class Toppings extends Component {
	constructor(props) {
		super(props)
		console.log(props)
		
	}
	render() {
		return (
			<Fragment>
			<div className="selectionBox">
				<h3>This is toppings component</h3>
				<div>
					<Link to={`${this.props.match.url}/drinks`}>Continue with drinks</Link>
				</div>
				
			
			</div>
			<Route path={`${this.props.match.path}/:drinks`} component={Drinks}/>	
			</Fragment>
		)	
	}
	
}


function Drinks(props) {
	console.log("Drinks" , props)
	return (
		<div className="selectionBox"><h3>Drinks</h3></div>
	)
}


export default PizzaApp
