<script>
  export let headerData = {};
  const { IMAGE, TITLE, UNTERTITLE, DESCRIPTION } = headerData;
  console.log(IMAGE);
</script>

{#if IMAGE == "vorbereitung"}
  <div class="p-4 p-md-5 mb-4 rounded text-bg-dark img-banner">
    <div class="col-md-10 px-0">
      <div class="col-md-12 px-0">
        <h1 class="display-4 fst-italic">{TITLE}</h1>
        <p class="lead my-3 col-md-8">
          {#if UNTERTITLE != undefined}
            <h3>
              {UNTERTITLE}
            </h3>
          {/if}
        </p>
        {#if DESCRIPTION != undefined}
          <p class="lead">
            {DESCRIPTION}
          </p>
        {/if}
      </div>
    </div>
  </div>
{:else if IMAGE == "erfahrungsbericht"}
  <div class="p-4 p-md-5 mb-4 rounded text-bg-dark img-banner2">
    <div class="col-md-10 px-0">
      <div class="col-md-12 px-0">
        <h1 class="display-4 fst-italic">{TITLE}</h1>
        <p class="lead my-3 col-md-8">
          {#if UNTERTITLE != undefined}
            <h3>
              {UNTERTITLE}
            </h3>
          {/if}
        </p>
        {#if DESCRIPTION != undefined}
          <p class="lead">
            {DESCRIPTION}
          </p>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="p-4 p-md-5 mb-4 rounded text-bg-dark img-banner1">
    <div class="col-md-10 px-0">
      <div class="col-md-12 px-0">
        <h1 class="display-4 fst-italic">{TITLE}</h1>
        <p class="lead my-3 col-md-8">
          {#if UNTERTITLE != undefined}
            <h3>
              {UNTERTITLE}
            </h3>
          {/if}
        </p>
        {#if DESCRIPTION != undefined}
          <p class="lead">
            {DESCRIPTION}
          </p>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .img-banner {
    background: url("../../assets/images/vorbereitungsseminar-in-barcelona.jpg")
      center center no-repeat;
    background-size: cover;
  }
  .img-banner1 {
    background: url("../../assets/images/vorteile-schueleraustausch.jpg") center
      center no-repeat;
    background-size: cover;
  }
  .img-banner2 {
    background: url("../../assets/images/spanisch-lernen.jpg") center center
      no-repeat;
    background-size: cover;
  }
</style>
