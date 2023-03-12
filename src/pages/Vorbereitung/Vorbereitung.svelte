<script>
  import PageBanner from "../../components/PageBanner/PageBanner.svelte";
  import DATA from "../../components/Data/data.js";
  import Cards from "./Cards.svelte";
  import cartContent from "./cardContent";
</script>

<section class="container mt-4">
  <PageBanner headerData={DATA.HEADERS.VORBEREITUNG} />

  <div class="row mb-2">
    <div class="col-md-6">
      <div
        class="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative"
      >
        <p>
          Im September und Januar/Februar bieten wir ein Orientierungswochenende
          in Barcelona an, um Schüler auf ihren Austausch vorzubereiten. Dabei
          bauen sie erste Hemmungen ab und lernen andere Austauschschüler und
          uns kennen. Das Programm umfasst Gespräche, Videos, Besichtigungen von
          Sehenswürdigkeiten sowie Freizeit.
        </p>
        <p>
          Das Wochenende ist intensiv und zielstrebig, mit Gesprächsrunden (in
          einem nahegelegenen Hotel), Informationen und Tips. Dabei werden
          typische Eigenschaften des Landes und Unterschiede zwischen der
          spanischen und deutschsprachige Kultur behandelt, um die Anpassung an
          eine neue Mentalität, Kultur, Sprache und Sichtweise zu erleichtern.
        </p>
        <div class="alert alert-warning mt-1" role="alert">
          <blockquote>
            Ein normaler Tagesablauf sieht folgendermassen aus:
            <ul class="mt-3">
              <li>8:00 Frühstück</li>
              <li>9:00 Gesprächrunden und Videovorschau</li>
              <li>14:00 Mittagessen und Freizeit</li>
              <li>16:00 Kulturelle Aktivität</li>
              <li>19:00 Freizeit</li>
              <li>20:30 Abendessen in Albergue</li>
              <li>Aktivität oder Freizeit</li>
            </ul>
          </blockquote>
        </div>
        <p>
          Die Unterkunft für die Schüler ist die private Herberge "Pere Tarrés".
          Diese befindet sich im Geschäftsviertel der Stadt, in der Nähe des FC
          Barcelona Stadions. Die Herberge ist sehr gut ausgestattet mit frei
          zugänglichen PCs und einer WIFI-Zone. Alle Zimmer verfügen über ein
          eigenes Bad und Bettwäsche wird gestellt. Handtücher können gegen eine
          Gebühr von 2€ gemietet werden.
        </p>

        <p>In der Vorbereitungskurs ist folgendes inbegriffen:</p>
        <div class="alert alert-primary" role="alert">
          <blockquote>
            <ul>
              <li>Transfers von/zu Flughafen bzww. Bahnhof</li>
              <li>Fahrkarte bzw. Flugticket</li>
              <li>2 Übernachtungen mit Vollpension</li>
              <li>Rundfahrt</li>
              <li>Besichtigungen</li>
            </ul>
            <strong>Nicht inbegriffen:</strong>
            <ul>
              <li>persönlichen Ausgaben</li>
            </ul>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <Cards cardContent={cartContent.TRANSFER} />
      <Cards cardContent={cartContent.ACCOMODATION} />
      <Cards cardContent={cartContent.SEMINAR} />
      <Cards cardContent={cartContent.ACTIVITIES} />
    </div>
  </div>
</section>
