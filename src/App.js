import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllCats from "./components/allCats/allCats";
import Body from "./components/body/body";
import CatInfo from "./components/CatInfo/CatInfo";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import { DataContext } from "./context/context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
            <Body />
          </Route>
          <Route path='/All_cats'>
            <AllCats />
          </Route>
          <Route path='/cat-info/:name' component={CatInfo}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
