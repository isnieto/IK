<script>
  import PagesHeader from "../../components/PagesHeader/PagesHeader.svelte";
  import DATA from "../../components/Data/data.js";
</script>

<section class="container mb-5">
  <PagesHeader headerData={DATA.HEADERS.FAQ} />
  <div class="accordion" id="accordionIK">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <strong>1. Wie und Wo kann ich mich anmelden?</strong>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Man bewirbt sich zuerst online und unverbindlich bei uns mit Hilfe
            unserer <a href="/bewerbung">Bewerbung</a>. Wir werden uns
            unmittelbar danach mit dem Bewerber in Verbindung setzen.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <strong>2. Wann sollte ich mich bewerben?</strong>
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Ungeachtet unserer Anmeldefristen wir empfehlen, sich so früh wie
            möglich zu bewerben.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThird"
          aria-expanded="false"
          aria-controls="collapseThird"
        >
          <strong
            >3. Welche Voraussetzungen müssen für eine Teilnahme erfüllt werden?</strong
          >
        </button>
      </h2>
      <div
        id="collapseThird"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <ul>
            <li>Alter zwischen 14 und 19 Jahren</li>
            <li>Gesunde körperliche Verfassung</li>
            <li>Sprachkenntnisse: erwünscht, aber nicht vorausgesetzt</li>
            <li>
              Bewerber soll Motiviert, Anpassungsfähig und Lernbegierig sein.;-)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          <strong>4. Werden Spanischkenntnisse vorausgesetzt?</strong>
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Nein. Spanischkenntnisse sind keine Voraussetzung. Man muss auch
            nicht Spanisch in der Schule belegt haben. Wir empfehlen jedoch
            eindringlich, vor Abreise einen Sprachkurs zu belegen.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          <strong>5. Wie bewerbe ich mich für ein bestimmtes Programm?</strong>
        </button>
      </h2>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Während der Bewerbungsphase sollte der Bewerber unseren
            Ansprechpartner darauf aufmerksam machen, dass man sich für ein
            konkretes Programm in Spanien bewerben möchte. <a href="/bewerbung"
              >Online Bewerbung</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
          <strong
            >6. Was passiert nachdem ich die Anmeldung abgeschickt habe?</strong
          >
        </button>
      </h2>
      <div
        id="collapseSix"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Nach Eingang der Anmeldung bei uns werden wir eine
            Anmeldebestätigung erstellen und per Email zukommen lassen. Die
            Anmeldebestätigung ist gleichzeitig die Rechnung für das Programm.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSeven"
          aria-expanded="false"
          aria-controls="collapseSeven"
        >
          <strong>7. Wie erfolgt die Bezahlung?</strong>
        </button>
      </h2>
      <div
        id="collapseSeven"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Die Bezahlung erfolgt nach Erhalt der Rechnung (Anmeldebestätigung).
            Alle wichtigen Informationen sind in dem Schreiben enthalten.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEight"
          aria-expanded="false"
          aria-controls="collapseEight"
        >
          <strong
            >8. Kann ich mir eine Region für meinen Aufenthalt in Spanien
            wünschen?</strong
          >
        </button>
      </h2>
      <div
        id="collapseEight"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>Ja.</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNine"
          aria-expanded="false"
          aria-controls="collapseNine"
        >
          <strong
            >9. Wie lange nach Anmeldung muss ich auf die Informationen meiner
            Gastfamilie warten?</strong
          >
        </button>
      </h2>
      <div
        id="collapseNine"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Manche <a href="/gastfamilie">Familien</a> entscheiden sich sehr schnell,
            andere hingegen lassen sich viel Zeit. Manchmal hängt dies auch von der
            Region ab. Es kann aber bis ca. 8 Wochen dauern.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTen"
          aria-expanded="false"
          aria-controls="collapseTen"
        >
          <strong>10. Gibt es eine Vorbereitung auf ein Austauschjahr?</strong>
        </button>
      </h2>
      <div
        id="collapseTen"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Ja. Wir organisieren am Anfang des Aufenthalts ein freiwilliges
            <a href="/vorbereitung">Orientierungskurs</a>. Die Vorbereitung
            findet immer in Barcelona statt.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEleven"
          aria-expanded="false"
          aria-controls="collapseEleven"
        >
          <strong>11. Gibt es Hilfe vor Ort?</strong>
        </button>
      </h2>
      <div
        id="collapseEleven"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Ja. Unsere <a href="/betreuung">Betreuer</a> sind zuständig für die Suche
            nach Gastfamilie und Schule. Sie unterstützen ebenfalls die Schüler und
            die Gastfamilien während des ganzen Aufenthalts. Interkultur-Schüleraustausch
            platziert AustauschschülerInnen aber NUR, wo ein Betreuer vor Ort ist.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwelve"
          aria-expanded="false"
          aria-controls="collapseTwelve"
        >
          <strong>12. Gibt es Familienwechsel?</strong>
        </button>
      </h2>
      <div
        id="collapseTwelve"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Wenn Konflikte zwischen Gastfamilie und AustauschschülerIn
            entstehen, die nicht gelöst werden können, kann es zum Wechsel der
            Gastfamilie kommen. Für Interkultur-Schüleraustausch ist das kein
            TABU. Manchmal gibt es keine Gemeinsamkeiten oder die Chemie stimmt
            gar nicht. In solchen Situationen, und bevor die Situation
            eskaliert, wird ein Familienwechelse durchgeführt.
          </p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThirteen"
          aria-expanded="false"
          aria-controls="collapseThirteen"
        >
          <strong>13. Welche Kosten kommen insgesamt auf mich zu?</strong>
        </button>
      </h2>
      <div
        id="collapseThirteen"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Zum <a href="/preise-leistungen">Programmpreis</a> kommen nur noch das
            Taschengeld, Schul- und Telefonkosten.
          </p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFourteen"
          aria-expanded="false"
          aria-controls="collapseFourteen"
        >
          <strong
            >14. Ich habe noch viele Fragen. Wer kann mir weiter helfen?</strong
          >
        </button>
      </h2>
      <div
        id="collapseFourteen"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionIK"
      >
        <div class="accordion-body">
          <p>
            Der Intekultur-Schüleraustaus ch Ansprechpartner, Ismael Nieto
            Martinez, steht jederzeit bereit, um weiterzuhelfen: <a
              href="/kontakt">Kontakt</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
