import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import Classes from "./components/Classes";
import Spells from "./components/Spell";
import Barbarian from "./components/Barbarian";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
  return (
    <>
      <BrowserView>
        <Container className="appContainer">
          <BrowserRouter>
            <Landing></Landing>
            <Switch>
              <Route path="/classes">
                <Classes />
              </Route>
              <Route path="/barbarian">
                <Barbarian />
              </Route>
              <Route path="/spells">
                <Spells />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </BrowserView>
      <MobileView>
        <Container className="appMobileContainer">
          <BrowserRouter>
            <Landing></Landing>
            <Switch>
              <Route path="/classes">
                <Classes />
              </Route>
              <Route path="/barbarian">
                <Barbarian />
              </Route>
              <Route path="/spells">
                <Spells />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </MobileView>
    </>
  );
}

export default App;
