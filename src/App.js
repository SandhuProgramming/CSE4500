import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import Classes from "./components/Classes";
import Spells from "./components/Spell";
import Barbarian from "./components/Barbarian";
function App() {
  return (
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
  );
}

export default App;
