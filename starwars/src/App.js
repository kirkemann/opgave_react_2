import React, { Component } from 'react'
import Forside from './component/Forside'
import Starwars from './Starwars'
import Planets from './component/planets'
import Films from './component/Films'
import Starships from './component/Starships'
import Navbar from './component/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
// import Forside from './Starwars'

class App extends Component {
  render() {  
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={ Forside } />
        <Route path='/Starwars' component={ Starwars } />
        <Route path='/planets' component={ Planets } />
        <Route path='/Films' component={ Films } />
        <Route path='/Starships' component={ Starships } />
      </div>
      </BrowserRouter>
    )
  }
}

export default App

