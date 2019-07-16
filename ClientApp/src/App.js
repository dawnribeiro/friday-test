import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import FlowerNavBar from './components/FlowerNavBar'
import DropDownMenu from './components/DropDownMenu'
import Home from './components/Home'
// import Input from './pages/Inventory'
import FlowerList from './components/FlowerList'
import Cart from './pages/Cart'
import Inventory from './pages/Inventory'
import AllCarts from './components/AllCarts'
import auth from './auth'
import axios from 'axios'
import Footer from './components/Footer'

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
                <Route path="/login" render={() => auth.login()} />
                <Route
                  path="/logout"
                  render={() => {
                    auth.logout()
                    return <p />
                  }}
                />
                <Route
                  path="/callback"
                  render={() => {
                    auth.handleAuthentication(() => {
                      // NOTE: Uncomment the following lines if you are using axios
                      //
                      // Set the axios authentication headers
                      axios.defaults.headers.common = {
                        Authorization: auth.authorizationHeader()
                      }
                    })
                    return <p />
                  }}
                />
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/allCarts" component={AllCarts} />
                {/* <Route exact path="/input" component={Input} /> */}
                <Route exact path="/inventory" component={Inventory} />
                <Route exact path="/:flowerType" component={FlowerList} />
              </Switch>
            </section>
          </main>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
