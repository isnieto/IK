<script>
  import icons from "../../components/Data/icons";
</script>

<div class="bg-danger text-secondary px-1 py-1 text-center">
  <div class="py-5">
    <h2 class="display-6 fw-bold text-white">Austauschprogramme</h2>
    <p class="lead text-white">
      Unsere Schüleraustauschprogramme in Spanien sind für neugierige und offene<br
      />
      Schüler gedacht, die die spanische Kultur und Sprache hautnah erleben möchten.
    </p>

    <div class="col-lg-12 mx-auto pt-5 text-white">
      <div class="btn btn-lg px-4 mx-3 text-white">
        {@html icons.calendarBig}
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="fw-bold mb-0 mt-2">Schuljahr</h4>
            <p class="lead">10 Monate</p>
          </div>
        </div>
      </div>
      <div class="btn btn-lg px-4 mx-3 text-white">
        {@html icons.calendarBig}
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="fw-bold mb-0 mt-2">
              Semester
              <h4>
                <p class="lead">5 Monate</p>
              </h4>
            </h4>
          </div>
        </div>
      </div>
      <div class="btn btn-lg px-3 mx-3 text-white">
        {@html icons.calendarBig}
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="fw-bold mb-0 mt-2">Trimester</h4>
            <p class="lead">3 Monate</p>
          </div>
        </div>
      </div>
      <div class="btn btn-lg px-4 mx-3 text-white">
        {@html icons.calendarBig}
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="fw-bold mb-0 mt-2">2 Monate</h4>
            <p class="lead">8 Wochen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    <a class="mb-5" href="/programme">
      <button
        type="button"
        class="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold"
        >Programmauswahl</button
      ></a
    >
  </div>
</div>
