<script>
  import icons from "../../components/Data/icons";
  export let navpills = {};
</script>

<section class="container">
  <div class="row justify-content-start mt-5">
    <div class="col-8">
      {@html icons.clockBig}
      <span class="fs-5 ps-2">{navpills.JAHR}</span>
      <h3>{navpills.HEADER}</h3>
      <p class="fs-5 ">
        {navpills.LEAD}
      </p>
      <p class="fs-5">{navpills.CONTENT_2}</p>
      <div class="mb-5">
        <a href="/bewerbung" class="btn btn-danger btn-lg px-4">Bewerbung</a>
      </div>
    </div>
    <div class="col-4">
      <div class="col text-center">
        <div class="card mb-4 rounded-3 shadow-sm border-warning">
          <div class="card-header py-3 text-white bg-warning border-warning">
            <h4 class="my-0 fw-normal">Programmdaten</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">
              <small class="text-muted fw-light">Dauer</small><br />
              {navpills.DAUER}
            </h3>
            <h3 class="card-title pricing-card-title">
              <small class="text-muted fw-light">Beginn:</small><br />
              {navpills.START}
            </h3>
            <h3 class="card-title pricing-card-title">
              <small class="text-muted fw-light">Ende:</small><br />
              {navpills.END}
            </h3>
            <h1 class="card-title pricing-card-title">
              <small class="text-muted fw-light">Preis:</small><br />
              {navpills.PREIS}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
