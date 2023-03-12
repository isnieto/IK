<script>
  import PagesHeader from "../../components/PagesHeader/PagesHeader.svelte";
  import DATA from "../../components/Data/data.js";
</script>

<section class="container">
  <PagesHeader headerData={DATA.HEADERS.BETREUUNG} />
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-7">
      <p>
        Die Aufgabe des Betreuers fängt schon vor der Ankunft der Schüler an.
        Sie besuchen Schulen und interviewen die interessierten Gastfamilien in
        ihrer jeweiligen Regionen. Sie müssen sich, als unsere Vertreter vor
        Ort, vergewissern, dass die notwendigen Bedingungen für den perfekten
        Verlauf des Aufenthalts garantiert sind. Die Arbeit besteht ebenfalls
        darin, die Unterstützung der Gastfamilien und der Austauschüler während
        des Aufenthaltes. Sie arbeiten eng mit den Gastfamilien, den
        Austauschülern und den Schulen zusammen.
      </p>
      <p>
        Permanente Unterstützung und Hilfe sind dadurch stets garantiert. Sie
        vermittelt bei Problemen und gegeben falls bei auftretenden schwierigen
        Konflikten ein. Unsere umfangreiche Netzwerk an Betreuer ermöglicht uns
        mit Gastfamilien und Schulen in ganz Spanien zu arbeiten und die
        Bedürfnisse der Schüler und ihre Eltern zu gewährleisten.
      </p>
      <p>Unsere Betreuer arbeiten stets aus der Nähe:</p>
      <div class="alert alert-warning" role="alert">
        <ul>
          <li>Suche, Interview und Auswahl der Gastfamilien.</li>
          <li>
            Auskunft und Beratung der Gastfamilien vor Ankunft der Schüler.
          </li>
          <li>Schule: Suche und Einschreibung an den Schulen.</li>
          <li>
            Auskunft und Beratung der Gastfamilien vor Ankunft der Schüler.
          </li>
          <li>
            Permanenter Kontakt mit den Schülern und mit den Gastfamilien.
          </li>
          <li>Beratung und Vermittlung im Falle von Konflikten.</li>
          <li>
            Berichterstattung über die Entwicklung der Schüler während des
            Aufenthaltes.
          </li>
          <li>
            Begleitung und Unterstützung bei eventuellen Arzt- oder
            Zahnarztterminen.
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-5">
      <img src="./src/assets/images/betreuer.jpg" alt="betreuer" />
    </div>
  </div>
</section>
