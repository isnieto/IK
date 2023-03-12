<script>
  export let headerData = {};
  const { TITLE, UNTERTITLE, DESCRIPTION } = headerData;
</script>

<section>
  <div class="col-lg-12 pt-3">
    <h1 class="f0">{TITLE}</h1>
    <p class="fs-5 col-md-8">
      {#if UNTERTITLE != undefined}
      <p>
        {UNTERTITLE}
      </p>
    {/if}
    </p>
    {#if DESCRIPTION != undefined }
      <p>
        {DESCRIPTION}
      </p>
    {/if}
  </div>
  <hr class="col-3 col-md-2 mb-5" />
</section>
