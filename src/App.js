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
import ContinualFlame from "./components/ContinualFlame";
import ControlWater from "./components/ControlWater";
import ControlWeather from "./components/ControlWeather";
import Counterspell from "./components/Counterspell";
import CreateFoodAndWater from "./components/CreateFoodAndWater";
import CreateOrDestroyWater from "./components/CreateOrDestroyWater";
import CreateUndead from "./components/CreateUndead";
import Creation from "./components/Creation";
import CureWounds from "./components/CureWounds";
import DancingLights from "./components/DancingLights";
import Darkness from "./components/Darkness";
import Darkvision from "./components/Darkvision";
import Daylight from "./components/Daylight";
import DeathWard from "./components/DeathWard";
import DelayedBlastFireball from "./components/DelayedBlastFireball";
import Demiplane from "./components/Demiplane";
import DetectEvilAndGood from "./components/DetectEvilAndGood";
import DetectMagic from "./components/DetectMagic";
import DetectPoisonAndDisease from "./components/DetectPoisonAndDisease";
import DetectThought from "./components/DetectThought";
import DimensionDoor from "./components/DimensionDoor";
import DisguiseSelf from "./components/DisguiseSelf";
import Disintegrate from "./components/Disintegrate";
import DispelEvilAndGood from "./components/DispelEvilAndGood";
import DispelMagic from "./components/DispelMagic";
import Divination from "./components/Divination";
import DivineFavor from "./components/DivineFavor";
import DivineWord from "./components/DivineWord";
import DominateBeast from "./components/DominateBeast";
import DominateMonster from "./components/DominateMonster";
import DominatePerson from "./components/DominatePerson";
import Dream from "./components/Dream";
import DruidCraft from "./components/DruidCraft";
import Earthquake from "./components/Earthquake";
import EldritchBlast from "./components/EldritchBlast";
import EnhanceAbility from "./components/EnhanceAbility";
import EnlargeReduce from "./components/EnlargeReduce";
import Entangle from "./components/Entangle";
import Enthrall from "./components/Enthrall";
import Etherealness from "./components/Etherealness";
import ExpeditiousRetreat from "./components/ExpeditiousRetreat";
import Eyebite from "./components/Eyebite";
import Fabricate from "./components/Fabricate";
import FaerieFire from "./components/FaerieFire";
import FaithfulHound from "./components/FaithfulHound";
import FalseLife from "./components/FalseLife";
import Fear from "./components/Fear";
import FeatherFall from "./components/FeatherFall";
import FeebleMind from "./components/FeebleMind";
import FindFamiliar from "./components/FindFamiliar";
import FindSteed from "./components/FindSteed";
import FindThePath from "./components/FindThePath";
import FindTraps from "./components/FindTraps";
import FingerOfDeath from "./components/FingerOfDeath";
import FireBolt from "./components/FireBolt";
import FireShield from "./components/FireShield";
import FireStorm from "./components/FireStorm";
import Fireball from "./components/Fireball";
import FlameBlade from "./components/FlameBlade";
import FlameStrike from "./components/FlameStrike";
import FlamingSphere from "./components/FlamingSphere";
import FleshToStone from "./components/FleshToStone";
import FloatingDisk from "./components/FloatingDisk";
import Fly from "./components/Fly";
import FogCloud from "./components/FogCloud";
import Forbiddance from "./components/Forbiddance";
import Forcecage from "./components/Forcecage";
import Foresight from "./components/Foresight";
import FreedomOfMovement from "./components/FreedomOfMovement";
import FreezingSphere from "./components/FreezingSphere";
import GaseousForm from "./components/GaseousForm";
import Gate from "./components/Gate";
import Geas from "./components/Geas";
import GentleRepose from "./components/GentleRepose";
import GiantInsect from "./components/GiantInsect";
import Glibness from "./components/Glibness";
import GlobeOfInvulnerability from "./components/GlobeOfInvulnerability";
import GlyphOfWarding from "./components/GlyphOfWarding";
import Goodberry from "./components/Goodberry";
import Grease from "./components/Grease";
import GreaterInvisibility from "./components/GreaterInvisibility";
import GreaterRestoration from "./components/GreaterRestoration";
import GuardianOfFaith from "./components/GuardianOfFaith";
import GuardsAndWards from "./components/GuardsAndWards";
import Guidance from "./components/Guidance";
import GuidingBolt from "./components/GuidingBolt";
import GustOfWind from "./components/GustOfWind";
import Hallow from "./components/Hallow";
import HallucinatoryTerrain from "./components/HallucinatoryTerrain";
import Harm from "./components/Harm";
import Haste from "./components/Haste";
import Heal from "./components/Heal";
import HealingWord from "./components/HealingWord";
import HeatMetal from "./components/HeatMetal";
import HellishRebuke from "./components/HellishRebuke";
import HeroesFeast from "./components/HeroesFeast";
import Heroism from "./components/Heroism";
import HideousLaughter from "./components/HideousLaughter";
import HoldMonster from "./components/HoldMonster";
import HoldPerson from "./components/HoldPerson";
import HolyAura from "./components/HolyAura";
import HuntersMark from "./components/HuntersMark";
import HypnoticPattern from "./components/HypnoticPattern";
import IceStorm from "./components/IceStorm";
import Identify from "./components/Identify";
import IllusoryScript from "./components/IllusoryScript";
import Imprisonment from "./components/Imprisonment";
import IncendiaryCloud from "./components/IncendiaryCloud";
import InflictWounds from "./components/InflictWounds";
import InsectPlague from "./components/InsectPlague";
import InstantSummons from "./components/InstantSummons";
import Invisibility from "./components/Invisibility";
import IrresistibleDance from "./components/IrresistibleDance";
import Jump from "./components/Jump";
import Knock from "./components/Knock";
import LegendLore from "./components/LegendLore";
import LesserRestoration from "./components/LesserRestoration";
import Levitate from "./components/Levitate";
import Light from "./components/Light";
import LightningBolt from "./components/LightningBolt";
import LocateAnimalsOrPlants from "./components/LocateAnimalsOrPlants";
import LocateCreature from "./components/LocateCreature";
import LocateObject from "./components/LocateObject";
import Longstrider from "./components/Longstrider";
import MageArmor from "./components/MageArmor";
import MageHand from "./components/MageHand";
import MagicCircle from "./components/MagicCircle";
import MagicJar from "./components/MagicJar";
import MagicMissile from "./components/MagicMissile";
import MagicMouth from "./components/MagicMouth";
import MagicWeapon from "./components/MagicWeapon";
import MagnificentMansion from "./components/MagnificentMansion";
import MajorImage from "./components/MajorImage";
import MassCureWounds from "./components/MassCureWounds";
import MassHeal from "./components/MassHeal";
import MassHealingWord from "./components/MassHealingWord";
import MassSuggestion from "./components/MassSuggestion";
import Maze from "./components/Maze";
import MeldIntoStone from "./components/MeldIntoStone";
import Mending from "./components/Mending";
import Message from "./components/Message";
import MeteorSwarm from "./components/MeteorSwarm";
import MindBlank from "./components/MindBlank";
import MinorIllusion from "./components/MinorIllusion";
import MirageArcane from "./components/MirageArcane";
import MirrorImage from "./components/MirrorImage";
import Mislead from "./components/Mislead";
import MistyStep from "./components/MistyStep";
import ModifyMemory from "./components/ModifyMemory";
import MoonBeam from "./components/MoonBeam";
import MoveEarth from "./components/MoveEarth";
import Nondetection from "./components/Nondetection";
import PassWithoutTrace from "./components/PassWithoutTrace";
import Passwall from "./components/Passwall";
import PhantasmalKiller from "./components/PhantasmalKiller";
import PhantomSteed from "./components/PhantomSteed";
import PlanarAlly from "./components/PlanarAlly";
import PlanarBinding from "./components/PlanarBinding";
import PlaneShift from "./components/PlaneShift";
import PlantGrowth from "./components/PlantGrowth";
import PoisonSpray from "./components/PoisonSpray";
import Polymorph from "./components/Polymorph";
import PowerWordKill from "./components/PowerWordKill";
import PowerWordStun from "./components/PowerWordStun";
import PrayerOfHealing from "./components/PrayerOfHealing";
import Prestidigitation from "./components/Prestidigitation";
import PrismaticSpray from "./components/PrismaticSpray";
import PrismaticWall from "./components/PrismaticWall";
import PrivateSanctum from "./components/PrivateSanctum";
import ProduceFlame from "./components/ProduceFlame";
import ProgrammedIllusion from "./components/ProgrammedIllusion";
import ProjectImage from "./components/ProjectImage";
import ProtectionFromEnergy from "./components/ProtectionFromEnergy";
import ProtectionFromEvilAndGood from "./components/ProtectionFromEvilAndGood";
import ProtectionFromPoison from "./components/ProtectionFromPoison";
import PurifyFoodAndDrink from "./components/PurifyFoodAndDrink";
import RaiseDead from "./components/RaiseDead";
import RayOfEnfeeblement from "./components/RayOfEnfeeblement";
import RayOfFrost from "./components/RayOfFrost";
import Regenerate from "./components/Regenerate";
import Reincarnate from "./components/Reincarnate";
import RemoveCurse from "./components/RemoveCurse";
import ResilientSphere from "./components/ResilientSphere";
import Resistance from "./components/Resistance";
import Resurrection from "./components/Resurrection";
import ReverseGravity from "./components/ReverseGravity";
import Revivify from "./components/Revivify";
import RopeTrick from "./components/RopeTrick";
import SacredFlame from "./components/SacredFlame";
import Sanctuary from "./components/Sanctuary";
import ScorchingRay from "./components/ScorchingRay";
import Scrying from "./components/Scrying";
import SecretChest from "./components/SecretChest";
import SeeInvisibility from "./components/SeeInvisibility";
import Seeming from "./components/Seeming";
import Sending from "./components/Sending";
import Sequester from "./components/Sequester";
import Shapechange from "./components/Shapechange";
import Shatter from "./components/Shatter";
import Shield from "./components/Shield";
import ShieldOfFaith from "./components/ShieldOfFaith";
import Shillelagh from "./components/Shillelagh";
import ShockingGrasp from "./components/ShockingGrasp";
import Silence from "./components/Silence";
import SilentImage from "./components/SilentImage";
import Simulacrum from "./components/Simulacrum";
import Sleep from "./components/Sleep";
import SleetStorm from "./components/SleetStorm";
import Slow from "./components/Slow";
import SpareTheDying from "./components/SpareTheDying";
import SpeakWithAnimals from "./components/SpeakWithAnimals";
import SpeakWithDead from "./components/SpeakWithDead";
import SpeakWithPlants from "./components/SpeakWithPlants";
import SpiderClimb from "./components/SpiderClimb";
import SpikeGrowth from "./components/SpikeGrowth";
import SpiritGuardians from "./components/SpiritGuardians";
import SpiritualWeapons from "./components/SpiritualWeapon";
import StinkingCloud from "./components/StinkingCloud";
import StoneShape from "./components/StoneShape";
import Stoneskin from "./components/Stoneskin";
import StormOfVegeance from "./components/StormOfVengeance";
import Suggestion from "./components/Suggestion";
import Sunbeam from "./components/Sunbeam";
import Sunburst from "./components/Sunburst";
import Symbol from "./components/Symbol";
import Telekinesis from "./components/Telekinesis";
import TelepathicBond from "./components/TelepathicBond";
import Teleport from "./components/Teleport";
import TeleportationCircle from "./components/TeleportationCircle";
import Thaumaturgy from "./components/Thaumaturgy";
import Thunderwave from "./components/Thunderwave";
import TimeStop from "./components/TimeStop";
import TinyHut from "./components/TinyHut";
import Tongues from "./components/Tongues";
import TransportViaPlants from "./components/TransportViaPlants";
import TreeStride from "./components/TreeStride";
import TruePolymorph from "./components/TruePolymorph";
import TrueResurrection from "./components/TrueResurrection";
import TrueSeeing from "./components/TrueSeeing";
import TrueStrike from "./components/TrueStrike";
import UnseenServant from "./components/UnseenServant";
import VampiricTouch from "./components/VampiricTouch";
import ViciousMockery from "./components/ViciousMockery";
import WallOfFire from "./components/WallOfFire";
import WallOfForce from "./components/WallOfForce";
import WallOfThorns from "./components/WallOfThorns";
import WallOfIce from "./components/WallOfIce";
import WardingBond from "./components/WardingBond";
import WallOfStone from "./components/WallOfStone";
import WaterBreathing from "./components/WaterBreathing";
import WaterWalk from "./components/WaterWalk";
import Web from "./components/Web";
import Weird from "./components/Weird";
import WindWalk from "./components/WindWalk";
import WindWall from "./components/WindWall";
import Wish from "./components/Wish";
import WordOfRecall from "./components/WordOfRecall";
import ZoneOfTruth from "./components/ZoneOfTruth";

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
              <Route path="/continual-flame">
                <ContinualFlame />
              </Route>
              <Route path="/control-water">
                <ControlWater />
              </Route>
              <Route path="/control-weather">
                <ControlWeather />
              </Route>
              <Route path="/counterspell">
                <Counterspell />
              </Route>
              <Route path="/create-food-and-water">
                <CreateFoodAndWater />
              </Route>
              <Route path="/create-or-destroy-water">
                <CreateOrDestroyWater />
              </Route>
              <Route path="/create-undead">
                <CreateUndead />
              </Route>
              <Route path="/creation">
                <Creation />
              </Route>
              <Route path="/cure-wounds">
                <CureWounds />
              </Route>
              <Route path="/dancing-lights">
                <DancingLights />
              </Route>
              <Route path="/darkness">
                <Darkness />
              </Route>
              <Route path="/darkvision">
                <Darkvision />
              </Route>
              <Route path="/daylight">
                <Daylight />
              </Route>
              <Route path="/death-ward">
                <DeathWard />
              </Route>
              <Route path="/delayed-blast-fireball">
                <DelayedBlastFireball />
              </Route>
              <Route path="/demiplane">
                <Demiplane />
              </Route>
              <Route path="/detect-evil-and-good">
                <DetectEvilAndGood />
              </Route>
              <Route path="/detect-magic">
                <DetectMagic />
              </Route>
              <Route path="/detect-poison-and-disease">
                <DetectPoisonAndDisease />
              </Route>
              <Route path="/detect-thoughts">
                <DetectThought />
              </Route>
              <Route path="/dimension-door">
                <DimensionDoor />
              </Route>
              <Route path="/disguise-self">
                <DisguiseSelf />
              </Route>
              <Route path="/disintegrate">
                <Disintegrate />
              </Route>
              <Route path="/dispel-evil-and-good">
                <DispelEvilAndGood />
              </Route>
              <Route path="/dispel-magic">
                <DispelMagic />
              </Route>
              <Route path="/divination">
                <Divination />
              </Route>
              <Route path="/divine-favor">
                <DivineFavor />
              </Route>
              <Route path="/divine-word">
                <DivineWord />
              </Route>
              <Route path="/dominate-beast">
                <DominateBeast />
              </Route>
              <Route path="/dominate-monster">
                <DominateMonster />
              </Route>
              <Route path="/dominate-person">
                <DominatePerson />
              </Route>
              <Route path="/dream">
                <Dream />
              </Route>
              <Route path="/druidcraft">
                <DruidCraft />
              </Route>
              <Route path="/earthquake">
                <Earthquake />
              </Route>
              <Route path="/eldritch-blast">
                <EldritchBlast />
              </Route>
              <Route path="/enhance-ability">
                <EnhanceAbility />
              </Route>
              <Route path="/enlarge-reduce">
                <EnlargeReduce />
              </Route>
              <Route path="/entangle">
                <Entangle />
              </Route>
              <Route path="/enthrall">
                <Enthrall />
              </Route>
              <Route path="/etherealness">
                <Etherealness />
              </Route>
              <Route path="/expeditious-retreat">
                <ExpeditiousRetreat />
              </Route>
              <Route path="/eyebite">
                <Eyebite />
              </Route>
              <Route path="/fabricate">
                <Fabricate />
              </Route>
              <Route path="/faerie-fire">
                <FaerieFire />
              </Route>
              <Route path="/faithful-hound">
                <FaithfulHound />
              </Route>
              <Route path="/false-life">
                <FalseLife />
              </Route>
              <Route path="/fear">
                <Fear />
              </Route>
              <Route path="/feather-fall">
                <FeatherFall />
              </Route>
              <Route path="/feeblemind">
                <FeebleMind />
              </Route>
              <Route path="/find-familiar">
                <FindFamiliar />
              </Route>
              <Route path="/find-steed">
                <FindSteed />
              </Route>
              <Route path="/find-the-path">
                <FindThePath />
              </Route>
              <Route path="/find-traps">
                <FindTraps />
              </Route>
              <Route path="/finger-of-death">
                <FingerOfDeath />
              </Route>
              <Route path="/fire-bolt">
                <FireBolt />
              </Route>
              <Route path="/fire-shield">
                <FireShield />
              </Route>
              <Route path="/fire-storm">
                <FireStorm />
              </Route>
              <Route path="/fireball">
                <Fireball />
              </Route>
              <Route path="/flame-blade">
                <FlameBlade />
              </Route>
              <Route path="/flame-strike">
                <FlameStrike />
              </Route>
              <Route path="/flaming-sphere">
                <FlamingSphere />
              </Route>
              <Route path="/flesh-to-stone">
                <FleshToStone />
              </Route>
              <Route path="/floating-disk">
                <FloatingDisk />
              </Route>
              <Route path="/fly">
                <Fly />
              </Route>
              <Route path="/fog-cloud">
                <FogCloud />
              </Route>
              <Route path="/forbiddance">
                <Forbiddance />
              </Route>
              <Route path="/forcecage">
                <Forcecage />
              </Route>
              <Route path="/foresight">
                <Foresight />
              </Route>
              <Route path="/freedom-of-movement">
                <FreedomOfMovement />
              </Route>
              <Route path="/freezing-sphere">
                <FreezingSphere />
              </Route>
              <Route path="/gaseous-form">
                <GaseousForm />
              </Route>
              <Route path="/gate">
                <Gate />
              </Route>
              <Route path="/geas">
                <Geas />
              </Route>
              <Route path="/gentle-repose">
                <GentleRepose />
              </Route>
              <Route path="/giant-insect">
                <GiantInsect />
              </Route>
              <Route path="/glibness">
                <Glibness />
              </Route>
              <Route path="/globe-of-invulnerability">
                <GlobeOfInvulnerability />
              </Route>
              <Route path="/glyph-of-warding">
                <GlyphOfWarding />
              </Route>
              <Route path="/goodberry">
                <Goodberry />
              </Route>
              <Route path="/grease">
                <Grease />
              </Route>
              <Route path="/greater-invisibility">
                <GreaterInvisibility />
              </Route>
              <Route path="/greater-restoration">
                <GreaterRestoration />
              </Route>
              <Route path="/guardian-of-faith">
                <GuardianOfFaith />
              </Route>
              <Route path="/guards-and-wards">
                <GuardsAndWards />
              </Route>
              <Route path="/guidance">
                <Guidance />
              </Route>
              <Route path="/guiding-bolt">
                <GuidingBolt />
              </Route>
              <Route path="/gust-of-wind">
                <GustOfWind />
              </Route>
              <Route path="/hallow">
                <Hallow />
              </Route>
              <Route path="/hallucinatory-terrain">
                <HallucinatoryTerrain />
              </Route>
              <Route path="/harm">
                <Harm />
              </Route>
              <Route path="/haste">
                <Haste />
              </Route>
              <Route path="/heal">
                <Heal />
              </Route>
              <Route path="/healing-word">
                <HealingWord />
              </Route>
              <Route path="/heat-metal">
                <HeatMetal />
              </Route>
              <Route path="/hellish-rebuke">
                <HellishRebuke />
              </Route>
              <Route path="/heroes-feast">
                <HeroesFeast />
              </Route>
              <Route path="/heroism">
                <Heroism />
              </Route>
              <Route path="/hideous-laughter">
                <HideousLaughter />
              </Route>
              <Route path="/hold-monster">
                <HoldMonster />
              </Route>
              <Route path="/hold-person">
                <HoldPerson />
              </Route>
              <Route path="/holy-aura">
                <HolyAura />
              </Route>
              <Route path="/hunters-mark">
                <HuntersMark />
              </Route>
              <Route path="/hypnotic-pattern">
                <HypnoticPattern />
              </Route>
              <Route path="/ice-storm">
                <IceStorm />
              </Route>
              <Route path="/identify">
                <Identify />
              </Route>
              <Route path="/illusory-script">
                <IllusoryScript />
              </Route>
              <Route path="/imprisonment">
                <Imprisonment />
              </Route>
              <Route path="/incendiary-cloud">
                <IncendiaryCloud />
              </Route>
              <Route path="/inflict-wounds">
                <InflictWounds />
              </Route>
              <Route path="/insect-plague">
                <InsectPlague />
              </Route>
              <Route path="/instant-summons">
                <InstantSummons />
              </Route>
              <Route path="/invisibility">
                <Invisibility />
              </Route>
              <Route path="/irresistible-dance">
                <IrresistibleDance />
              </Route>
              <Route path="/jump">
                <Jump />
              </Route>
              <Route path="/knock">
                <Knock />
              </Route>
              <Route path="/legend-lore">
                <LegendLore />
              </Route>
              <Route path="/lesser-restoration">
                <LesserRestoration />
              </Route>
              <Route path="/levitate">
                <Levitate />
              </Route>
              <Route path="/light">
                <Light />
              </Route>
              <Route path="/lightning-bolt">
                <LightningBolt />
              </Route>
              <Route path="/locate-animals-or-plants">
                <LocateAnimalsOrPlants />
              </Route>
              <Route path="/locate-creature">
                <LocateCreature />
              </Route>
              <Route path="/locate-object">
                <LocateObject />
              </Route>
              <Route path="/longstrider">
                <Longstrider />
              </Route>
              <Route path="/mage-armor">
                <MageArmor />
              </Route>
              <Route path="/mage-hand">
                <MageHand />
              </Route>
              <Route path="/magic-circle">
                <MagicCircle />
              </Route>
              <Route path="/magic-jar">
                <MagicJar />
              </Route>
              <Route path="/magic-missile">
                <MagicMissile />
              </Route>
              <Route path="/magic-mouth">
                <MagicMouth />
              </Route>
              <Route path="/magic-weapon">
                <MagicWeapon />
              </Route>
              <Route path="/magnificent-mansion">
                <MagnificentMansion />
              </Route>
              <Route path="/major-image">
                <MajorImage />
              </Route>
              <Route path="/mass-cure-wounds">
                <MassCureWounds />
              </Route>
              <Route path="/mass-heal">
                <MassHeal />
              </Route>
              <Route path="/mass-healing-word">
                <MassHealingWord />
              </Route>
              <Route path="/mass-suggestion">
                <MassSuggestion />
              </Route>
              <Route path="/maze">
                <Maze />
              </Route>
              <Route path="/meld-into-stone">
                <MeldIntoStone />
              </Route>
              <Route path="/mending">
                <Mending />
              </Route>
              <Route path="/message">
                <Message />
              </Route>
              <Route path="/meteor-swarm">
                <MeteorSwarm />
              </Route>
              <Route path="/mind-blank">
                <MindBlank />
              </Route>
              <Route path="/minor-illusion">
                <MinorIllusion />
              </Route>
              <Route path="/mirage-arcane">
                <MirageArcane />
              </Route>
              <Route path="/mirror-image">
                <MirrorImage />
              </Route>
              <Route path="/mislead">
                <Mislead />
              </Route>
              <Route path="/misty-step">
                <MistyStep />
              </Route>
              <Route path="/modify-memory">
                <ModifyMemory />
              </Route>
              <Route path="/moonbeam">
                <MoonBeam />
              </Route>
              <Route path="/move-earth">
                <MoveEarth />
              </Route>
              <Route path="/nondetection">
                <Nondetection />
              </Route>
              <Route path="/pass-without-trace">
                <PassWithoutTrace />
              </Route>
              <Route path="/passwall">
                <Passwall />
              </Route>
              <Route path="/phantasmal-killer">
                <PhantasmalKiller />
              </Route>
              <Route path="/phantom-steed">
                <PhantomSteed />
              </Route>
              <Route path="/planar-ally">
                <PlanarAlly />
              </Route>
              <Route path="/planar-binding">
                <PlanarBinding />
              </Route>
              <Route path="/plane-shift">
                <PlaneShift />
              </Route>
              <Route path="/plant-growth">
                <PlantGrowth />
              </Route>
              <Route path="/poison-spray">
                <PoisonSpray />
              </Route>
              <Route path="/polymorph">
                <Polymorph />
              </Route>
              <Route path="/power-word-kill">
                <PowerWordKill />
              </Route>
              <Route path="/power-word-stun">
                <PowerWordStun />
              </Route>
              <Route path="/prayer-of-healing">
                <PrayerOfHealing />
              </Route>
              <Route path="/prestidigitation">
                <Prestidigitation />
              </Route>
              <Route path="/prismatic-spray">
                <PrismaticSpray />
              </Route>
              <Route path="/prismatic-wall">
                <PrismaticWall />
              </Route>
              <Route path="/private-sanctum">
                <PrivateSanctum />
              </Route>
              <Route path="/produce-flame">
                <ProduceFlame />
              </Route>
              <Route path="/programmed-illusion">
                <ProgrammedIllusion />
              </Route>
              <Route path="/project-image">
                <ProjectImage />
              </Route>
              <Route path="/protection-from-energy">
                <ProtectionFromEnergy />
              </Route>
              <Route path="/protection-from-evil-and-good">
                <ProtectionFromEvilAndGood />
              </Route>
              <Route path="/protection-from-poison">
                <ProtectionFromPoison />
              </Route>
              <Route path="/purify-food-and-drink">
                <PurifyFoodAndDrink />
              </Route>
              <Route path="/raise-dead">
                <RaiseDead />
              </Route>
              <Route path="/ray-of-enfeeblement">
                <RayOfEnfeeblement />
              </Route>
              <Route path="/ray-of-frost">
                <RayOfFrost />
              </Route>
              <Route path="/regenerate">
                <Regenerate />
              </Route>
              <Route path="/reincarnate">
                <Reincarnate />
              </Route>
              <Route path="/remove-curse">
                <RemoveCurse />
              </Route>
              <Route path="/resilient-sphere">
                <ResilientSphere />
              </Route>
              <Route path="/resistance">
                <Resistance />
              </Route>
              <Route path="/resurrection">
                <Resurrection />
              </Route>
              <Route path="/reverse-gravity">
                <ReverseGravity />
              </Route>
              <Route path="/revivify">
                <Revivify />
              </Route>
              <Route path="/rope-trick">
                <RopeTrick />
              </Route>
              <Route path="/sacred-flame">
                <SacredFlame />
              </Route>
              <Route path="/sanctuary">
                <Sanctuary />
              </Route>
              <Route path="/scorching-ray">
                <ScorchingRay />
              </Route>
              <Route path="/scrying">
                <Scrying />
              </Route>
              <Route path="/secret-chest">
                <SecretChest />
              </Route>
              <Route path="/see-invisibility">
                <SeeInvisibility />
              </Route>
              <Route path="/seeming">
                <Seeming />
              </Route>
              <Route path="/sending">
                <Sending />
              </Route>
              <Route path="/sequester">
                <Sequester />
              </Route>
              <Route path="/shapechange">
                <Shapechange />
              </Route>
              <Route path="/shatter">
                <Shatter />
              </Route>
              <Route path="/shield">
                <Shield />
              </Route>
              <Route path="/shield-of-faith">
                <ShieldOfFaith />
              </Route>
              <Route path="/shillelagh">
                <Shillelagh />
              </Route>
              <Route path="/shocking-grasp">
                <ShockingGrasp />
              </Route>
              <Route path="/silence">
                <Silence />
              </Route>
              <Route path="/silent-image">
                <SilentImage />
              </Route>
              <Route path="/simulacrum">
                <Simulacrum />
              </Route>
              <Route path="/sleep">
                <Sleep />
              </Route>
              <Route path="/sleet-storm">
                <SleetStorm />
              </Route>
              <Route path="/slow">
                <Slow />
              </Route>
              <Route path="/spare-the-dying">
                <SpareTheDying />
              </Route>
              <Route path="/speak-with-animals">
                <SpeakWithAnimals />
              </Route>
              <Route path="/speak-with-dead">
                <SpeakWithDead />
              </Route>
              <Route path="/speak-with-plants">
                <SpeakWithPlants />
              </Route>
              <Route path="/spider-climb">
                <SpiderClimb />
              </Route>
              <Route path="/spike-growth">
                <SpikeGrowth />
              </Route>
              <Route path="/spirit-guardians">
                <SpiritGuardians />
              </Route>
              <Route path="/spiritual-weapon">
                <SpiritualWeapons />
              </Route>
              <Route path="/stinking-cloud">
                <StinkingCloud />
              </Route>
              <Route path="/stone-shape">
                <StoneShape />
              </Route>
              <Route path="/stoneskin">
                <Stoneskin />
              </Route>
              <Route path="/storm-of-vengeance">
                <StormOfVegeance />
              </Route>
              <Route path="/suggestion">
                <Suggestion />
              </Route>
              <Route path="/sunbeam">
                <Sunbeam />
              </Route>
              <Route path="/sunburst">
                <Sunburst />
              </Route>
              <Route path="/symbol">
                <Symbol />
              </Route>
              <Route path="/telekinesis">
                <Telekinesis />
              </Route>
              <Route path="/telepathic-bond">
                <TelepathicBond />
              </Route>
              <Route path="/teleport">
                <Teleport />
              </Route>
              <Route path="/teleportation-circle">
                <TeleportationCircle />
              </Route>
              <Route path="/thaumaturgy">
                <Thaumaturgy />
              </Route>
              <Route path="/thunderwave">
                <Thunderwave />
              </Route>
              <Route path="/time-stop">
                <TimeStop />
              </Route>
              <Route path="/tiny-hut">
                <TinyHut />
              </Route>
              <Route path="/tongues">
                <Tongues />
              </Route>
              <Route path="/transport-via-plants">
                <TransportViaPlants />
              </Route>
              <Route path="/tree-stride">
                <TreeStride />
              </Route>
              <Route path="/true-polymorph">
                <TruePolymorph />
              </Route>
              <Route path="/true-resurrection">
                <TrueResurrection />
              </Route>
              <Route path="/true-Seeing">
                <TrueSeeing />
              </Route>
              <Route path="/true-Strike">
                <TrueStrike />
              </Route>
              <Route path="/unseen-servant">
                <UnseenServant />
              </Route>
              <Route path="/vampiric-touch">
                <VampiricTouch />
              </Route>
              <Route path="/vicious-mockery">
                <ViciousMockery />
              </Route>
              <Route path="/wall-of-fire">
                <WallOfFire />
              </Route>
              <Route path="/wall-of-force">
                <WallOfForce />
              </Route>
              <Route path="/wall-of-thorns">
                <WallOfThorns />
              </Route>
              <Route path="/wall-of-ice">
                <WallOfIce />
              </Route>
              <Route path="/warding-bond">
                <WardingBond />
              </Route>
              <Route path="/wall-of-stone">
                <WallOfStone />
              </Route>
              <Route path="/water-breathing">
                <WaterBreathing />
              </Route>
              <Route path="/water-walk">
                <WaterWalk />
              </Route>
              <Route path="/web">
                <Web />
              </Route>
              <Route path="/weird">
                <Weird />
              </Route>
              <Route path="/wind-walk">
                <WindWalk />
              </Route>
              <Route path="/wind-wall">
                <WindWall />
              </Route>
              <Route path="/wish">
                <Wish />
              </Route>
              <Route path="/word-of-recall">
                <WordOfRecall />
              </Route>
              <Route path="/zone-of-truth">
                <ZoneOfTruth />
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
