import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import FlowerNavBar from './components/FlowerNavBar'
import DropDownMenu from './components/DropDownMenu'
import Home from './components/Home'
import Input from './pages/Input'
import FlowerList from './components/FlowerList'
import Cart from './pages/Cart'
import Inventory from './components/Inventory'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <main className="main-container">
            <FlowerNavBar />
            <section className="flowers-container">
              {/* <DropDownMenu /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/input" component={Input} />
                <Route exact path="/:flowerType" component={FlowerList} />
                <Route exact path="/inventory" component={Inventory} />
              </Switch>
            </section>
          </main>
        </Router>
      </div>
    )
  }
}

export default App
