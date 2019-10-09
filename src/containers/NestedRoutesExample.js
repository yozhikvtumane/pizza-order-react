import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics(props) {
	console.log(props)
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      {/* <Switch> */}
        <Route path={`${props.match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={props.match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      {/* </Switch> */}
    </div>
  );
}

function Topic(props) {
  // return <h3>Requested topic ID: {props.params.topicId}</h3>;
  return <h3>Requested topic ID: </h3>;
}

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default function App(props) {
  console.log(props)
  return (
    <Router>
      <div>
        <Navigation />

        {/* <Switch> */}
          <Route path="/about">
            <About render={(props)=> props}/>
          </Route>
          <Route path="/topics">
            <Topics render={(props)=> props}/>
          </Route>
          <Route path="/">
            <Home render={(props)=> props}/>
          </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}