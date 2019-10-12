import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'

// Three stages:

// First: PizzaSelecion component, select pizza, route to second selection
// Second: Toppings, select additional toppings, route to third selection
// Third: Drinks, select drinks, route to fourth selection
// Fourth: Address and checkout

// function Main() {
// 	return (
// 		<Router>
// 			<PizzaApp />
// 		</Router>
// 	)
// }

class PizzaApp extends Component {
	constructor(props) {
		super(props)
		console.log(this.props)
	}
	
	
	render() {
		console.log("pizzaapp", this.props)
		return (
			<Router>
				<div className="selectionBox pizza">
					<h2>Welcome to Pizza-Pizza</h2>
					<h3>Choose your pizza</h3>
					<ul>
						<li>Pizza Choice 1</li>
						<li>Pizza Choice 2</li>
						<li>Pizza Choice 3</li>
						<li>Pizza Choice 4</li>
						<li>Pizza Choice 5</li>
					</ul><ul>
						<li>Pizza Choice 1</li>
						<li>Pizza Choice 2</li>
						<li>Pizza Choice 3</li>
						<li>Pizza Choice 4</li>
						<li>Pizza Choice 5</li>
					</ul><ul>
						<li>Pizza Choice 1</li>
						<li>Pizza Choice 2</li>
						<li>Pizza Choice 3</li>
						<li>Pizza Choice 4</li>
						<li>Pizza Choice 5</li>
					</ul><ul>
						<li>Pizza Choice 1</li>
						<li>Pizza Choice 2</li>
						<li>Pizza Choice 3</li>
						<li>Pizza Choice 4</li>
						<li>Pizza Choice 5</li>
					</ul><ul>
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
					<Route path={`/toppings`} render={(routeProps) => {
						return <Toppings {...routeProps} testProp="1234"/>				
					}}  />
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
			<div className="selectionBox toppings">
				<h3>This is toppings component with a test prop which value is {this.props.testProp}</h3>
				<ul>
					<li>Topping option 1</li>
					<li>Topping option 2</li>
					<li>Topping option 3</li>
					<li>Topping option 4</li>
					<li>Topping option 5</li>
				</ul>
				<div>
					<Link to={`${this.props.match.url}/drinks`}>Continue with drinks</Link>
				</div>
				
			
			</div>
			<Route path={`${this.props.match.path}/:drinks`} component={Drinks} />
			</Fragment>
		)	
	}
	
}


function Drinks(props) {
	console.log("Drinks" , props)
	return (
		<Fragment>
			<div className="selectionBox drinks">
				<h3>Drinks</h3>
				<ul>
					<li>Drink Selection 1</li>
					<li>Drink Selection 2</li>
					<li>Drink Selection 3</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
					<li>Drink Selection 4</li>
				</ul>
				<Link to={`${props.match.url}/checkout`}>Continue to checkout</Link>
			</div>
			<Route path={`${props.match.path}/:checkout`} component={Checkout} />
		</Fragment>
	)
}

function Checkout() {
	return (
		<div className="selectionBox checkout">
			<h3>Order checkout</h3>
		</div>
	)
}
export default PizzaApp
