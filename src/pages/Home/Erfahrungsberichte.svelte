<script>
  import Corousel from "./Corousel.svelte";
</script>

<div class="container my-3 py-3">
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-7 mt-5 pt-5">
        <h4 class="text-muted">ERFAHRUNGSBERICHTE</h4>
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Gut geplant ist halb gewonnen
        </h1>
        <p class="lead">
          Hol Dir wertvolle Tipps und Eindrücke, bevor Du Dich auf den Weg
          machst, und starte Deinen Austausch bestmöglich vorbereitet. Viele
          Austauschschüler haben es vorher in Spanien gewagt.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a
            href="https://www.youtube.com/@IKSchueleraustausch/videos"
            target="_blank"
            rel="noreferrer"
            ><button type="button" class="btn btn-secondary btn-lg px-4 me-md-2"
              >Videos</button
            ></a
          >
          <a href="/erfahrungsberichte"
            ><button type="button" class="btn btn-secondary btn-lg px-4 me-md-2"
              >Berichte</button
            ></a
          >
          <a href="/faq"
            ><button type="button" class="btn btn-secondary btn-lg px-4 me-md-2"
              >FAQ's</button
            ></a
          >
        </div>
      </div>
      <div class="col-md-5">
        <Corousel />
      </div>
    </div>
  </div>

  <hr class="mt-5 text-danger" />
</div>
