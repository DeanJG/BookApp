import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Favorites from './components/Favorites'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      // From my understanding, the api pull would occur in the Main component, and there would be
      // dynamically created book divs, displaying info on books based on a title or author search.
      // Each book div would also have a 'Favorites' button which would push the books to a 
      // 'favorites' array. Through array iteration, the books in the favorites array are then
      // displayed on the favorites page.

      // Because the favorites page is just responsible for housing the list of favorited books,
      // the state management is only necessary in the Main component, where the book search would
      // this.setState({ book: }), and in turn update the books array which is what will be iterated
      // over to display the books on the Main component. 
      <>
        <Router>
          <div>
            <Route exact path='/' component={() => <Main />} />
            <Route path='/favorites' component={() => <Favorites />} />
          </div>
        </Router>
      </>
    )
  }
}

export default App
