import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Roses from './pages/Roses'
import Lilies from './pages/Lilies'
import Tulips from './pages/Tulips'
import Sunflowers from './pages/Sunflowers'
import Carnations from './pages/Carnations'
import Input from './pages/Input'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <main className="main-container">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/roses" component={Roses} />
              <Route exact path="/lilies" component={Lilies} />
              <Route exact path="/tulips" component={Tulips} />
              <Route exact path="/sunflowers" component={Sunflowers} />
              <Route exact path="/carnations" component={Carnations} />
              <Route exact path="/input" component={Input} />
            </Switch>
          </main>
        </Router>
      </>
    )
  }
}

export default App
