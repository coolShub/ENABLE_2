
import './App.css';

import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CaptionImage from "./CaptionImage";
import SignLanguage from "./SignLanguage";
import SpeechToText from "./SpeechToText";
import Footer from "./Footer";
import Navbar from "./Navbar";






function App() {
  return (

    <Router>

      <div className="app">

      <Navbar/>
                  <Switch>
                

                          <Route path="/sign">
                          


                            <SignLanguage/>
                            
                          </Route>

                          <Route path="/caption">
                          
                            <CaptionImage/>
                          
                          </Route>

                          <Route path="/speech">
                                        
                                  <SpeechToText/>  
                                        
                          </Route>

                          <Route path="/">
                      
                        <Home/>


                          </Route>
                    

                  </Switch>

      <Footer/>



           
      </div>
      </Router>





    
  );
}

export default App;
