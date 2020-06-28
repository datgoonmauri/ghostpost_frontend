import React, { Component } from 'react';
import Post from "./Post";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

class App extends Component {
  state = {
    posts: [],
    text: "",
    category_choice: "",
    id: ""
  }
componentDidMount(){
  fetch('http://127.0.0.1:8000/api/Post/')
  .then(results =>{
      return results.json();  
  }).then(data => {
      console.log(data)
      this.setState({posts: data})
      console.log("state", this.state.posts)
  })
}

handleChange = event => {
  this.setState({ text: event.target.value})
};



render() {
  console.log(this.state)
  return (
    <BrowserRouter>
      <section className="ghostpostapp">
        <header className="header">
          <h1>Ghostpost</h1>
          <Post />
          <br />
        </header>


      <Switch>
          <Route
            exact
            path="/all"
            render={() => (
              <Post
                posts={this.state.posts}
              />
            )}
           />

           <Route
            exact
            path="/is_boasts"
            render={() => (
              <Post
                posts={this.state.posts.filter(
                  posts => posts.category_choice === true
                )}
              />
            )}
          />

          <Route 
            exact
            path="/roasts"
            render={() => (
              <Post
                posts={this.state.posts.filter(
                  posts => posts.category_choice === false
                )}
              />
            )}
          />
          <Route path="/downvote" render={() => (
            <Post posts={this.state.posts.sort((a, b) => {
              return a.downvote - b.downvote
                })} />
              )}>
          </Route>

          <Route path="/upvote" render={() => (
            <Post posts={this.state.posts.sort((a, b) => {
              return b.upvote - a.upvote
                })} />
              )}>
          </Route>
      </Switch>
        <footer className="footer">
          <ul className="filters">
            <li>
              <NavLink exact to="/Post"
              activeClassName="selected">
                All Posts
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/boasts"
              activeClassName="selected">
                Boasts
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/roasts"
              activeClassName="selected">
               Roasts
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/downvote"
              activeClassName="selected">
                Downvotes
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/upvote"
              activeClassName="selected">
             Upvotes
              </NavLink>
            </li>
          </ul>
        </footer>
      </section>
    </BrowserRouter>
    
  )
}
}

export default App;