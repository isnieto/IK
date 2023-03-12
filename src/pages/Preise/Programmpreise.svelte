<script>
  export let programmData = {};
  const { JAHR, HALB, TRI, ZWEI } = programmData;
</script>

<section class="container pt-5">
  <!-- svelte-ignore a11y-missing-attribute -->

  <h2 class="f0 text-center">PREISE</h2>
  <p class="lead text-center">
    Neuen Zeiten bringen Veränderungen. Wir haben unsere unsere Programmpreise
    an die neuen Bedürfnisse und Wünsche unserer Teilnehmer angepasst.
    Garantien, Ehrlichkeit und Flexibilität gehen vor.
  </p>
  <hr class="text-danger mb-5" />
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <!-- SCHULJAHR -->
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 bg-primary">
          <h4 class="my-0 fw-normal text-white">{JAHR.NAME}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {JAHR.PREIS}<small class="text-muted fw-light" />
          </h1>
          <h2 class="card-title pricing-card-title">
            {JAHR.DAUER}
          </h2>
          <hr class="px-1 bg-success" />
          <h5>
            Beginn: <br />
            {JAHR.DATEN[0]}
          </h5>
          <h5 class="pb-4">
            Ende:
            <br />
            {JAHR.DATEN[1]}
          </h5>
        </div>
      </div>
    </div>
    <!-- Herbstsemester -->
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-success">
        <div class="card-header py-3 bg-success">
          <h4 class="my-0 fw-normal text-white">{HALB.NAME[0]}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {HALB.PREIS}
          </h1>
          <h2 class="card-title pricing-card-title">
            {HALB.DAUER}
          </h2>
          <hr class="px-1 bg-success" />
          <h5>
            Beginn: <br />
            {HALB.DATEN[0]}
          </h5>
          <h5 class="pb-4">
            Ende:
            <br />
            {HALB.DATEN[1]}
          </h5>
        </div>
      </div>
    </div>
    <!-- Herbsttrimester -->
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-danger">
        <div class="card-header py-3 text-white bg-danger border-danger">
          <h4 class="my-0 fw-normal">{TRI.NAME[0]}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {TRI.PREIS}
          </h1>
          <h2 class="card-title pricing-card-title">
            {TRI.DAUER}
          </h2>
          <hr class="px-1 bg-success" />
          <h5>
            Beginn: <br />
            {TRI.DATEN[0]}
          </h5>
          <h5 class="pb-4">
            Ende:
            <br />
            {TRI.DATEN[1]}
          </h5>
        </div>
      </div>
    </div>
    <!-- 2 Monate -->
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-warning">
        <div class="card-header py-3 text-white bg-warning border-warning">
          <h4 class="my-0 fw-normal">{ZWEI.NAME}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {ZWEI.PREIS}
          </h1>
          <h2 class="card-title pricing-card-title">
            {ZWEI.DAUER}
          </h2>
          <hr class="px-1 bg-success" />
          <h5>
            Beginn: <br />
            {ZWEI.DATEN}
          </h5>
          <h5 class="pb-4">
            Ende:
            <br />
            --
          </h5>
        </div>
      </div>
    </div>
    <!-- FRÜHLINGsemester -->
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-success">
        <div class="card-header py-3 bg-success">
          <h4 class="my-0 fw-normal text-white">{HALB.NAME[1]}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {HALB.PREIS}<small class="text-muted fw-light" />
          </h1>
          <h2 class="card-title pricing-card-title">
            {HALB.DAUER}
          </h2>
          <hr class="px-1 bg-success" />
          <h5>
            Beginn: <br />
            {HALB.DATEN_F[0]}
          </h5>
          <h5 class="pb-4">
            Ende:
            <br />
            {HALB.DATEN_F[1]}
          </h5>
        </div>
      </div>
    </div>
    <!-- FRÜHLINGTrimester -->
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-danger">
        <div class="card-header py-3 bg-danger">
          <h4 class="my-0 fw-normal text-white">{TRI.NAME[1]}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            {TRI.PREIS}
          </h1>
          <h2 class="card-title pricing-card-title">
            {TRI.DAUER}
          </h2>
          <hr class="px-1 bg-success" />
          <h5>
            Beginn: <br />
            {TRI.DATEN_F[0]}
          </h5>
          <h5 class="pb-4">
            Ende:
            <br />
            {TRI.DATEN_F[1]}
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>
