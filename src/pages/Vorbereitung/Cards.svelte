<script>
  export let cardContent = {};
  const { IMAGE, TITLE, ALT, NOTES } = cardContent;
  console.log(NOTES);
</script>

<div
  class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
>
  <div class="col p-4 d-flex flex-column position-static">
    <h2 class="mb-0">{TITLE}</h2>
    <p class="mt-4 lean">
      {@html NOTES}
    </p>
  </div>
  <div class="col-auto d-none d-lg-block">
    <img src={IMAGE} alt={ALT} />
  </div>
</div>
