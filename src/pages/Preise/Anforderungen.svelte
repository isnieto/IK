<script>
  import icons from "../../components/Data/icons";
  export let fristData = {};
  const fristen = fristData;
</script>

<div
  class="row align-items-start bg-danger text-secondary px-1 py-5 text-center"
>
  <div class="row justify-content-center">
    <div class="col-4 text-white">
      <h3 class="display-6 fw-bold my-3">Anmeldefristen</h3>
      <p class="ms-4 ps-4 px-4 pb-3">{@html icons.calendarBig}</p>
      <hr class="text-white" />
      <h4 class=" my-0 fw-normal text-white">{fristen[0].frist}</h4>
      <h2 class="display-6 my-0 fw-normal text-white">{fristen[0].daten}</h2>
      <br />
      <h4 class="my-0 fw-normal text-white">{fristen[1].frist}</h4>
      <h5 class="display-6 my-0 fw-normal text-white">{fristen[1].daten}</h5>
      <p class="text-white mt-3">
        <small>Späte Anmeldungen möglich nach Rücksprache!</small>
      </p>
    </div>
    <div class="col-4 text-white">
      <h3 class="display-6 fw-bold my-3">Voraussetzungen</h3>
      <p class="ms-4 ps-4 px-4 pb-3">{@html icons.listCheck}</p>
      <hr class="text-white" />

      <ul class="list-unstyled">
        <li class="my-0 fw-normal text-white">
          <h3>{@html icons.check} Alter: 14 bis 19</h3>
        </li>
        <li class="my-0 fw-normal text-white">
          <h3>{@html icons.check} Gesunde körperliche Verfassung</h3>
        </li>
        <li class="my-0 fw-normal text-white">
          <h3>{@html icons.check} Spanisch: erwünscht</h3>
        </li>
        <li class="my-0 fw-normal text-white">
          <h3>{@html icons.check} Selbständigkeit</h3>
        </li>
        <li class="my-0 fw-normal text-white">
          <h3>{@html icons.check} Kulturelles Interesse</h3>
        </li>
      </ul>
    </div>
  </div>
</div>
