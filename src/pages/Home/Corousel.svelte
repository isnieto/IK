<script>
  let image1 = "./images/erfahrungsbericht1.jpg";
  let image2 = "./images/erfahrungsbericht2.jpg";
  let image3 = "./images/erfahrungsbericht3.jpg";
</script>

<div
  id="carouselReviews"
  class="carousel carousel-dark slide"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselReviews"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselReviews"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselReviews"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    />
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselReviews"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselReviews"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true" />
    <span class="visually-hidden">Next</span>
  </button>
</div>
