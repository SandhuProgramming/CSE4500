import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import Classes from "./components/Classes";
import Spells from "./components/Spell";
import Barbarian from "./components/Barbarian";
import { BrowserView, MobileView } from "react-device-detect";
import Bard from "./components/Bard";
import Cleric from "./components/Cleric";
import Druid from "./components/Druid";
import Fighter from "./components/Fighter";
import Monk from "./components/Monk";
import Paladin from "./components/Paladin";
import Ranger from "./components/Ranger";
import Rogue from "./components/Rogue";
import Sorcerer from "./components/Sorcerer";
import Warlock from "./components/Warlock";
import Wizard from "./components/Wizard";
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
              <Route path="/bard">
                <Bard />
              </Route>
              <Route path="/cleric">
                <Cleric />
              </Route>
              <Route path="/druid">
                <Druid />
              </Route>
              <Route path="/fighter">
                <Fighter />
              </Route>
              <Route path="/monk">
                <Monk />
              </Route>
              <Route path="/paladin">
                <Paladin />
              </Route>
              <Route path="/ranger">
                <Ranger />
              </Route>
              <Route path="/rogue">
                <Rogue />
              </Route>
              <Route path="/sorcerer">
                <Sorcerer />
              </Route>
              <Route path="/warlock">
                <Warlock />
              </Route>
              <Route path="/wizard">
                <Wizard />
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
              <Route path="/bard">
                <Bard />
              </Route>
              <Route path="/cleric">
                <Cleric />
              </Route>
              <Route path="/druid">
                <Druid />
              </Route>
              <Route path="/fighter">
                <Fighter />
              </Route>
              <Route path="/monk">
                <Monk />
              </Route>
              <Route path="/paladin">
                <Paladin />
              </Route>
              <Route path="/ranger">
                <Ranger />
              </Route>
              <Route path="/rogue">
                <Rogue />
              </Route>
              <Route path="/sorcerer">
                <Sorcerer />
              </Route>
              <Route path="/warlock">
                <Warlock />
              </Route>
              <Route path="/wizard">
                <Wizard />
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
