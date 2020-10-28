import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {Navbar, Footer} from './components';
import GlobalStyle from "./globalStyles";
import Home from './pages/Home/Home';
import Services from "./pages/Services/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
     <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' exact component={Services} />
      </Switch>
        <Footer />
    </Router>
  );
}

export default App;
