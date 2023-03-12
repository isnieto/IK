<script>
  import PagesHeader from "../../components/PagesHeader/PagesHeader.svelte";
  import FAQ from "./FAQ.svelte";
  import DATA from "../../components/Data/data.js";
</script>

<section class="container">
  <PagesHeader headerData={DATA.HEADERS.GASTFAMILIE} />
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-7">
      <p>
        Die Gastfamilie gibt somit dem Austauschüler die Möglichkeit, eine
        fremde Kultur im Rahmen eines Familienlebens zu erleben und eine fremde
        Sprache zu lernen bzw. seine schon vorhandenen Sprachkenntnisse zu
        verbessern. Im Alltag macht der Austauschüler sich mit der neuen
        kulturelle und sprachlichen Realität bekannt und mit der Zeit damit
        vertraut. Der Austauschüler bringt seinen/ihre eigene/n kulturellen und
        sprachlichen Hintergrund in das Familienleben ein. Der Gastfamilie wird
        damit die Gelegenheit gegeben, mit anderen Gewohnheiten und neuen
        Einsichten Bekanntschaft zu machen. Zie ist der kulturelle und
        sprachliche Austausch zwischen Schülern und Familien.
      </p>
      <p>
        Der Austauschüler ist ein weiteres Familienmitglied und teilt mit der
        Familie gleiche Rechte und Pflichten. Die Gastfamilie soll den
        Austauschüler mit Verständnis, Zuneigung und Fürsorge begegnen. Unsere
        Gastfamilien haben ihre eigene Hausregeln und Lebgewohnheiten.
      </p>
      <h4>Unterstützung für Austauschüler und Gastfamilie</h4>
      <p>
        Um ein erfolgreicher Aufenthalt, sowohl für die Gastfamilie und
        Austauschschüler, zu gewährleisten, haben wir bestimmte Regeln und
        Verfahren. Unsere Betreuer vor Ort unterstützen Gastfamilie und
        Austauschschüler durch den regelmäßigen Kontakt während des gesamten
        Aufenthaltes. Sie dienen als Brücke zwischen Ihnen und bieten Hilfe und
        Rat. Schüler und Familien können auch auf die Unterstützung unseres
        Hauptbüros in Barcelona zurückgreifen. Unser Team ist 24 Stunden am Tag
        erreichbar auf Englisch und Spanisch.
      </p>

      <FAQ />
    </div>
    <div class="col-md-5">
      <img
        src="./src/assets/images/gastfamilien-in-spanien.jpg"
        alt="gastfamilien-in-spanien"
      />
      <div class="alert alert-warning mt-3" role="alert">
        <p class="lead">Die Aufgaben unserer Gastfamilien:</p>
        <ul>
          <li>
            Aufnehmen eines Austauschülers bei sich zu Hause Verfügen über Ein
            Einzel- oder Doppelzimmer.
          </li>
          <li>
            Vorbereitung der Mahlzeiten, die im Haus und im Rahmen des Alltags
            stattfinden.
          </li>
          <li>
            Verständnis, Zuneigung und Pflege im Umgang mit dem Austauschüler.
          </li>
          <li>
            Die Gastfamilie ist nicht verpflichtet, private Ausgaben (Telefon,
            Kosmetik, etc.) zu bezahlen, so wie alle Schul- oder
            Transportkosten.
          </li>
        </ul>
      </div>
      <div class="alert alert-primary" role="alert">
        <p>
          Wichtige Entscheidungen und das Einhalten von den Programmregeln
          werden selbstverständlich durch unsere Betreuer und das Zentralbüro in
          Barcelona bestimmt. Wir legen sowohl großen Wert auf die familiäre
          Atmosphäre in Umgang mit den Austauschülern als auch auf die Förderung
          des kulturellen und sprachlichen Austausches.
        </p>
      </div>
    </div>
  </div>
</section>
