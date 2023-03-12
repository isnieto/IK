<script>
  import PagesHeader from "../../components/PagesHeader/PagesHeader.svelte";
  import DATA from "../../components/Data/data.js";
  import icons from "../../components/Data/icons.js";
</script>

<section class="container">
  <PagesHeader headerData={DATA.HEADERS.ABOUT} />
  <!-- Content Row -->
  <div class="row">
    <div class="col-md-5">
      <img
        src="./src/assets/images/interkultur-schueleraustausch.jpg"
        alt="interkultur-schueleraustausch"
      />
    </div>
    <div class="col-md-7">
      <div class="alert alert-light text-danger display-6 fs-b" role="alert">
        Wir handeln stets im Sinne unserer Schüler. Direkter Anschluss,
        schnelles Handeln und ehrliche Haltung bilden das Fundament unserer
        Arbeit.
      </div>
      <p>
        Unser Ziel ist es die spanische Sprache und die interkulturelle
        Verständigung durch unsere Programme zu fördern. Interkultur wurde
        speziell für Austauschüler gegründet und war die erste Organisation, die
        es den Interessenten erlaubte, sich ohne Umwege online einzuschreiben.
        Wir sind keine große Organisation, die Hunderte von Schülern jedes Jahr
        ins Ausland befördert. Im Gegenteil, bei uns gilt der Satz “klein, aber
        fein”. Wir sind tatsächlich etwas ungewöhnlich, da wir in Spanien und
        auf die spanische Sprache spezialisiert sind und noch dazu in Spanien
        selbst arbeiten. Wir arbeiten ohne Vermittler oder Partner. Der Vorteil
        ist ein direkter und somit besserer Kontakt zwischen zwischen
        Organisation, Familien und Schülern. Die Platzierung und die
        Kommunikation vor Ort wird vereinfacht. Unsere Arbeit wird effizienter
        und unsere Preise günstiger.
      </p>
    </div>
    <div class="container mt-5 pt-5" id="icon-grid">
      <h2 class="pb-2 border-bottom">Unser größte Stärke: die Nähe</h2>

      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
      >
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.chat}</p>
            <h4 class="fw-bold mb-0">Kommunikation</h4>
            <p>
              Eltern haben direkte Kommunikation mit uns. Wir sind rundum die
              Uhr ansprechbar.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.phone}</p>
            <h4 class="fw-bold mb-0">Direkter Anschluss</h4>
            <p>
              Wir kennen alle Schüler persönlich. Ihre Bedürfnisse und Wünsche
              sind uns deshalb sehr gut bekannt.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.people}</p>
            <h4 class="fw-bold mb-0">Persönliche Betreuung</h4>
            <p>
              Engagierte Betreuer spanienweit, die unsere Schüler und
              Gastfamilien direkt vor Ort unterstützen.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.wreck}</p>
            <h4 class="fw-bold mb-0">Schnelle Problemlösung</h4>
            <p>
              Wir handeln stets im Sinne unserer Schüler. Gastfamilienwechsel
              oder Besuche von Verwandten sind für uns kein Tabu.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.sport}</p>
            <h4 class="fw-bold mb-0">Maximale Nutzung</h4>
            <p>Sport und Reisen werden gefördert bzw. mitorganisiert.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.thumbUp}</p>
            <h4 class="fw-bold mb-0">Fairness</h4>
            <p>
              Professionelles Verhalten und ehrliche Haltung bilden das
              Fundament unserer Arbeit.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.home}</p>
            <h4 class="fw-bold mb-0">Unsere Gastfamilien</h4>
            <p>
              Engagierte Gastfamilien mit interkulturellem Interesse. Familie
              mit Kindern wird garantiert.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start text-center">
          <div>
            <p class="ms-4 ps-4 px-4">{@html icons.chart}</p>
            <h4 class="fw-bold mb-0">Wünsche erwünscht!</h4>
            <p>Flexible Gestaltung des Aufenthalts nach Möglichkeiten.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</section>
