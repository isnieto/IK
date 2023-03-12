<script>
import Searchbar from "./Searchbar.svelte";
export let navlists = [];
</script>

<nav class="py-2 bg-ik border-bottom">
  <div class="container d-flex flex-wrap">
    <ul class="nav me-auto">
      {#each navlists as list}
        <li class="nav-item">
          <a class="nav-link px-2 active" href={list.url}>{list.label}</a>
        </li>
      {/each}
    </ul>
    <ul class="nav">
      <li class="nav-item">
        <a href="/kontakt" class="nav-link px-2">Kontakt</a>
      </li>
    </ul>
  </div>
</nav>
<header class="py-3 border-bottom">
  <div class="container d-flex flex-wrap justify-content-center">
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32"
        ><use xlink:href="#bootstrap" /></svg
      >
      <span class="fs-4 text-danger fw-bold fs-1">InterKultur</span>
    </a>
  <Searchbar />  
  </div>
</header>

<style>
  .bg-ik {
    background-color:#dc3546;
    color: white;
  }
  .nav-link {
    color: white;
  }
</style>
