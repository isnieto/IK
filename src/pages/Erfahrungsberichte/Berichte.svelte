<script>
  import PageBanner from "../../components/PageBanner/PageBanner.svelte";
  import DATOS from "../../components/Data/data.js";
  import Modal from "./Modal.svelte";
  import DATA from "./berichteData.js";
  import Content from "./Content.svelte";

  let showModal = false;
  let modal;
</script>

<section class="container mt-4">
  <PageBanner headerData={DATOS.HEADERS.BERICHTE} />
  <!-- List of testimonials-->
  <div class="row mb-2">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title border-bottom">{DATA.BERICHTE.ERF3.NAME}</h5>
          <p class="card-subtitle pb-1"><span class="text-muted">{DATA.BERICHTE.ERF3.DATUM}</span></p>
          <p class="card-text">
            "Am 15. Jänner ging es los. Ich war schon sehr gespannt und
            neugierig auf die nächsten 6 Monate. Am Vortag hatte ich mich noch
            von all meinen Freunden verabschieden müssen, was wirklich ..."
          </p>
          <button
            type="button"
            class="btn btn-danger"
            on:click={() => {
              showModal = true;
              modal = 0;
            }}
          >
            Lesen
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title border-bottom">{DATA.BERICHTE.ERF5.NAME}</h5>
          <p class="card-subtitle pb-1"><span class="text-muted">{DATA.BERICHTE.ERF5.DATUM}</span></p>
         
          <p class="card-text">
            "Etwa ein Jahr vor meinem Austausch in Spanien hab ich begonnen mir
            Gedanken zu machen wohin ich gehen sollte. Alle meine Freundinnen
            haben sich entschlossen in englischsprachige Länder zu..."
          </p>
          <button
            type="button"
            class="btn btn-danger"
            on:click={() => {
              showModal = true;
              modal = 1;
            }}
          >
            Lesen
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title border-bottom">{DATA.BERICHTE.ERF1.NAME}</h5>
          <p class="card-subtitle pb-1"><span class="text-muted">{DATA.BERICHTE.ERF1.DATUM}</span></p>
         
          <p class="card-text">
            "Am 12.09.2021 stieg ich in den Flieger, der mich zu meiner
            Gastfamilie, die ich bisher nur von wenigen Nachrichten und Bildern
            kannte, bringen sollte..."
          </p>
          <button
            type="button"
            class="btn btn-danger"
            on:click={() => {
              showModal = true;
              modal = 2;
            }}
          >
            Lesen
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title border-bottom">{DATA.BERICHTE.ERF2.NAME}</h5>
          <p class="card-subtitle pb-1"><span class="text-muted">{DATA.BERICHTE.ERF2.DATUM}</span></p>
         
          <p class="card-text">
            "Anfang 2021 kam unsere damals 15jährige Tochter Hannah auf uns zu
            der Frage, ob wir mit einem Auslandsaufenthalt in der kommenden 11.
            Klasse des Gymnasiums einverstanden wären..."
          </p>
          <button
            type="button"
            class="btn btn-danger"
            on:click={() => {
              showModal = true;
              modal = 3;
            }}
          >
            Lesen
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title border-bottom">{DATA.BERICHTE.ERF4.NAME}</h5>
          <p class="card-subtitle pb-1"><span class="text-muted">{DATA.BERICHTE.ERF4.DATUM}</span></p>
         
          <p class="card-text">
            "Etwa ein Jahr vor meinem Austausch in Spanien hab ich begonnen mir
            Gedanken zu machen wohin ich gehen sollte. Alle meine Freundinnen
            haben sich entschlossen in englischsprachige Länder zu..."
          </p>
          <button
            type="button"
            class="btn btn-danger"
            on:click={() => {
              showModal = true;
              modal = 4;
            }}
          >
            Lesen
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<Modal bind:showModal>
  {#if modal == 0}
    <Content berichteData={DATA.BERICHTE.ERF3} />
  {:else if modal == 1}
    <Content berichteData={DATA.BERICHTE.ERF5} />
  {:else if modal == 2}
    <Content berichteData={DATA.BERICHTE.ERF1} />
  {:else if modal == 3}
    <Content berichteData={DATA.BERICHTE.ERF2} />
  {:else}
    <Content berichteData={DATA.BERICHTE.ERF4} />
  {/if}
</Modal>
