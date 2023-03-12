<script>
  import DATA from "../../components/Data/data.js";
  import PROGRAM_DATA from "./pricingData.js";
  import Leistungen from "./Leistungen.svelte";
  import Programmpreise from "./Programmpreise.svelte";
  import Anforderungen from "./Anforderungen.svelte";
</script>

<!-- Preise-->
<Programmpreise programmData={PROGRAM_DATA} />
<!-- Anforderungen-->
<Anforderungen fristData={DATA.FRISTEN} />
<!-- Leistungen-->
<Leistungen />
