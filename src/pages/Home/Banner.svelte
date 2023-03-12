<script>
  import { fade, fly } from "svelte/transition";
  export let visible = false;

  setTimeout(() => {
    visible = true;
    console.log(visible);
  }, 1000);
</script>

<section class="py-5 text-center container-fluid border-bottom img-banner">
  {#if visible}
    <div
      in:fly={{ y: 200, duration: 2000 }}
      out:fade
      class="px-4 pt-5 my-5 text-center text-white"
    >
      <h1 class="display-4 fw-bold">Schüleraustausch in Spanien</h1>
      <h3>Die beste Wahl für einen Spanienaufenthalt</h3>
      <div class="col-lg-6 mx-auto">
        <h4 class=" mb-4">
          Jeder sollte die Möglichkeit haben, ein Auslandsaufenthalt zu erleben.<br
          />
          <span class="display-5 text-bold">An uns wird es nicht scheitern.</span>
        </h4>
        <a href="/kontakt"
          ><button type="button" class="btn btn-light btn-lg px-4 me-sm-3"
            >Auskunft</button
          ></a
        >
        <a href="/bewerbung"
          ><button type="button" class="btn btn-light btn-lg px-4"
            >Bewerbung</button
          ></a
        >
      </div>
    </div>
  {/if}
</section>

<style>
  .img-banner {
    background: url("../../assets/images/beste-wahl-schueleraustausch-in-spanien.jpg")
      center center no-repeat;
    background-size: cover;
    height: 700px;
  }
</style>
