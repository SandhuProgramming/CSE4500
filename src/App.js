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
import AntimagicField from "./components/AntimagicField";
import AntipathySympathy from "./components/AntipathySympathy";
import ArcaneEye from "./components/ArcaneEye";
import ArcaneHand from "./components/ArcaneHand";
import ArcaneLock from "./components/ArcaneLock";
import ArcaneSword from "./components/ArcaneSword";
import ArcanistsMagicAura from "./components/ArcanistsMagicAura";
import AstralProjection from "./components/AstralProjection";
import Augury from "./components/Augury";
import Awaken from "./components/Awaken";
import Bane from "./components/Bane";
import Banishment from "./components/Banishment";
import Barkskin from "./components/Barkskin";
import BeaconOfHope from "./components/BeaconOfHope";
import BestowCurse from "./components/BestowCurse";
import BlackTentacles from "./components/BlackTentacles";
import BladeBarrier from "./components/BladeBarrier";
import Bless from "./components/Bless";
import Blight from "./components/Blight";
import BlindnessDeafness from "./components/BlindnessDeafness";
import Blink from "./components/Blink";
import Blur from "./components/Blur";
import BrandingSmite from "./components/BrandingSmite";
import BurningHands from "./components/BurningHands";
import CallLightning from "./components/CallLightning";
import CalmEmotions from "./components/CalmEmotions";
import ChainLightning from "./components/ChainLightning";
import CharmPerson from "./components/CharmPerson";
import ChillTouch from "./components/ChillTouch";
import CircleOfDeath from "./components/CircleOfDeath";
import Clairvoyance from "./components/Clairvoyance";
import Clone from "./components/Clone";
import Cloudkill from "./components/Cloudkill";
import ColorSpray from "./components/ColorSpray";
import Command from "./components/Command";
import Commune from "./components/Commune";
import CommuneWithNature from "./components/CommuneWithNature";
import ComprehendLanguages from "./components/ComprehendLanguages";
import Compulsion from "./components/Compulsion";
import ConeOfCold from "./components/ConeOfCold";
import Confusion from "./components/Confusion";
import ConjureAnimals from "./components/ConjureAnimals";
import ConjureCelestial from "./components/ConjureCelesial";
import ConjureElemental from "./components/ConjureElemental";
import ConjureFey from "./components/ConjureFey";
import ConjureMinorElementals from "./components/ConjureMinorElementals";
import ConjureWoodlandBeings from "./components/ConjureWoodlandBeings";
import ContactOtherPlane from "./components/ContactOtherPlane";
import Contagion from "./components/Contagion";
import Contingency from "./components/Contingency";

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
              <Route path="/antimagic-field">
                <AntimagicField />
              </Route>
              <Route path="/antipathy-sympathy">
                <AntipathySympathy />
              </Route>
              <Route path="/arcane-eye">
                <ArcaneEye />
              </Route>
              <Route path="/arcane-hand">
                <ArcaneHand />
              </Route>
              <Route path="/arcane-lock">
                <ArcaneLock />
              </Route>
              <Route path="/arcane-sword">
                <ArcaneSword />
              </Route>
              <Route path="/arcanists-magic-aura">
                <ArcanistsMagicAura />
              </Route>
              <Route path="/astral-projection">
                <AstralProjection />
              </Route>
              <Route path="/augury">
                <Augury />
              </Route>
              <Route path="/awaken">
                <Awaken />
              </Route>
              <Route path="/bane">
                <Bane />
              </Route>
              <Route path="/banishment">
                <Banishment />
              </Route>
              <Route path="/barkskin">
                <Barkskin />
              </Route>
              <Route path="/beacon-of-hope">
                <BeaconOfHope />
              </Route>
              <Route path="/bestow-curse">
                <BestowCurse />
              </Route>
              <Route path="/black-tentacles">
                <BlackTentacles />
              </Route>
              <Route path="/blade-barrier">
                <BladeBarrier />
              </Route>
              <Route path="/bless">
                <Bless />
              </Route>
              <Route path="/blight">
                <Blight />
              </Route>
              <Route path="/blindness-deafness">
                <BlindnessDeafness />
              </Route>
              <Route path="/blink">
                <Blink />
              </Route>
              <Route path="/blur">
                <Blur />
              </Route>
              <Route path="/branding-smite">
                <BrandingSmite />
              </Route>
              <Route path="/burning-hands">
                <BurningHands />
              </Route>
              <Route path="/call-lightning">
                <CallLightning />
              </Route>
              <Route path="/calm-emotions">
                <CalmEmotions />
              </Route>
              <Route path="/chain-lightning">
                <ChainLightning />
              </Route>
              <Route path="/charm-person">
                <CharmPerson />
              </Route>
              <Route path="/chill-touch">
                <ChillTouch />
              </Route>
              <Route path="/circle-of-death">
                <CircleOfDeath />
              </Route>
              <Route path="/clairvoyance">
                <Clairvoyance />
              </Route>
              <Route path="/clone">
                <Clone />
              </Route>
              <Route path="/cloudkill">
                <Cloudkill />
              </Route>
              <Route path="/color-spray">
                <ColorSpray />
              </Route>
              <Route path="/command">
                <Command />
              </Route>
              <Route path="/commune">
                <Commune />
              </Route>
              <Route path="/commune-with-nature">
                <CommuneWithNature />
              </Route>
              <Route path="/comprehend-languages">
                <ComprehendLanguages />
              </Route>
              <Route path="/compulsion">
                <Compulsion />
              </Route>
              <Route path="/cone-of-cold">
                <ConeOfCold />
              </Route>
              <Route path="/confusion">
                <Confusion />
              </Route>
              <Route path="/conjure-animals">
                <ConjureAnimals />
              </Route>
              <Route path="/conjure-celestial">
                <ConjureCelestial />
              </Route>
              <Route path="/conjure-elemental">
                <ConjureElemental />
              </Route>
              <Route path="/conjure-fey">
                <ConjureFey />
              </Route>
              <Route path="/conjure-minor-elementals">
                <ConjureMinorElementals />
              </Route>
              <Route path="/conjure-woodland-beings">
                <ConjureWoodlandBeings />
              </Route>
              <Route path="/contact-other-plane">
                <ContactOtherPlane />
              </Route>
              <Route path="/contagion">
                <Contagion />
              </Route>
              <Route path="/contingency">
                <Contingency />
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
