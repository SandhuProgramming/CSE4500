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
import AcidArrow from "./components/AcidArrow";
import AcidSplash from "./components/AcidSplash";
import Aid from "./components/Aid";
import Alarm from "./components/Alarm";
import AlterSelf from "./components/AlterSelf";
import AnimalFriendship from "./components/AnimalFriendship";
import AnimalMessenger from "./components/AnimalMessenger";
import AnimalShapes from "./components/AnimalShapes";
import AnimateDead from "./components/AnimateDead";
import AnimateObjects from "./components/AnimateObjects";
import AntilifeShell from "./components/AntilifeShell";

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
              <Route path="/acid-arrow">
                <AcidArrow />
              </Route>
              <Route path="/acid-splash">
                <AcidSplash />
              </Route>
              <Route path="/aid">
                <Aid />
              </Route>
              <Route path="/alarm">
                <Alarm />
              </Route>
              <Route path="/alter-self">
                <AlterSelf />
              </Route>
              <Route path="/animal-friendship">
                <AnimalFriendship />
              </Route>
              <Route path="/animal-messenger">
                <AnimalMessenger />
              </Route>
              <Route path="/animal-shapes">
                <AnimalShapes />
              </Route>
              <Route path="/animate-dead">
                <AnimateDead />
              </Route>
              <Route path="/animate-objects">
                <AnimateObjects />
              </Route>
              <Route path="/antilife-shell">
                <AntilifeShell />
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
              <Route>
                <AcidArrow />
              </Route>
              <Route>
                <AcidSplash />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </MobileView>
    </>
  );
}

export default App;
