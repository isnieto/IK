<script>
  export let berichteData = {};
  const { TITLE, NAME, CONTENT, DATUM } = berichteData;
  let contents = CONTENT;
</script>

<div class="container">
  <h5 class="pb-1" >
    {NAME} - <small class="text-muted">{DATUM}</small>
  </h5>
  <div>
    {#each contents as content, i}
      <p>{content}</p>
    {/each}
  </div>
</div>
