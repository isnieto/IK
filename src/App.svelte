<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./pages/Home/Home.svelte";
	import Navbar from "./components/Navbar/Navbar.svelte";
	import Footer from "./components/Footer/Footer.svelte";
	import Kontakt from "./pages/Kontakt/Kontakt.svelte";
	import Preise from "./pages/Preise/Preise.svelte";
	import Ueberuns from "./pages/Ueberuns/Ueberuns.svelte";
	import Programme from "./pages/Programme/Programme.svelte";
	import Bewerbung from "./pages/Bewerbung/Bewerbung.svelte";
	import Datenschutz from "./pages/Datenschutz/Datenschutz.svelte";
	import Impressum from "./pages/Impressum/Impressum.svelte";
	import Vorbereitung from "./pages/Vorbereitung/Vorbereitung.svelte";
	import Gastfamilien from "./pages/Gastfamilien/Gastfamilien.svelte";
	import Betreuung from "./pages/Betreuung/Betreuung.svelte";
	import Schule from "./pages/Schule/Schule.svelte";
	import Agb from "./pages/Agb/Agb.svelte";
	import Faq from "./pages/Faq/Faq.svelte";
	import Vorteile from "./pages/Vorteile/Vorteile.svelte";
	import Berichte from "./pages/Erfahrungsberichte/Berichte.svelte";
	import Error404 from "./pages/Error/Error404.svelte";
  
	import DATA from "./components/Data/data.js";
  </script>
  
  <main>
	<Navbar navlists={DATA.NAVBAR_DATA} />
	<Router>
	  <Route path="/" component={Home} />
	  <Route path="/kontakt" component={Kontakt} />
	  <Route path="/programme" component={Programme} />
	  <Route path="/preise-leistungen" component={Preise} />
	  <Route path="/bewerbung" component={Bewerbung} />
	  <Route path="/ueberuns" component={Ueberuns} />
	  <Route path="/schule" component={Schule} />
	  <Route path="/erfahrungsberichte" component={Berichte} />
	  <Route path="/vorteile" component={Vorteile} />
	  <Route path="/gastfamilien" component={Gastfamilien} />
	  <Route path="/betreuung" component={Betreuung} />
	  <Route path="/faq" component={Faq} />
	  <Route path="/vorbereitung" component={Vorbereitung} />
	  <Route path="/datenschutz" component={Datenschutz} />
	  <Route path="/impressum" component={Impressum} />
	  <Route path="/agb" component={Agb} />
	  <Route path="/error404" component={Error404} />
	</Router>
  
	<Footer />
  </main>
  