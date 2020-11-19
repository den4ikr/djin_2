import {BrowserRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { initiliseApp } from "./redux/app-reducer";
import { useEffect } from 'react';
import Header from './componets/Header/Header';
import Info from './componets/Info/Info';
import BoxContainer from './componets/Box/BoxContainer';
import MapContainer from './componets/Map/MapContainer';
import Preloader from './componets/Preloader/Preloader';
import Search from './componets/Search/Search';
import Footer from './componets/Footer/Footer';
import './App.css';


function App(props) {

  useEffect ( () => {
    props.initiliseApp ()
  }, [] )

  if (!props.isInitilised) {
    return <Preloader />
  }  

  

  return (
    <div className = "wrapper" >
      <div className = "container" >
        <BrowserRouter>
            <div className = "header" >
              <Header />
            </div>
            <div>
              <Info />
              <div className = "row" >
                <BoxContainer />
                <Search />
              </div>
              <MapContainer />
            </div>
            <div>
            </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isInitilised: state.app.isInitilised,
  }
}

export default connect (mapStateToProps, { initiliseApp })(App);
