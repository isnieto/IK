<section class="container">
  <div class="px-4 py-5">
    <div class="row align-items-center g-lg-5 py-4">
      <div class="col-lg-6 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">Kontakt</h1>
        <h3>Dein Anliegen ist uns wichtig!</h3>
        <p class="lead">
          Schreib uns bitte deine Fragen oder Kommentare. Es ist sehr wichtig
          für einen erfolgreichen Aufenthalt in Spanien, deine Wünsche und
          Prioritäten zu kennen.
        </p>
        <p class="lead">Wir rufen dich auch gerne und unverbindlich zurück.</p>
        <p class="lead">
          Du kannst dich jederzeit kostenlos bei uns <a href="/bewerbung"
            >bewerben</a
          >.
        </p>
      </div>
      <div class="col-md-12 mx-auto col-lg-6">
        <form
          action="../assets/bin/contact_me.php"
          id="contactForm"
          name="sentMessage"
          method="post"
          class="p-2 p-md-4 border rounded-3 bg-light needs-validation"
          novalidate
        >
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingName"
              placeholder="Name"
            />
            <label for="floatingName">Dein Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Deine Email Addresse</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingTelefon"
              placeholder="Telefon"
            />
            <label for="floatingTelefon"
              >Deine Telefonnummer <small>(optional)</small></label
            >
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              cols="5"
              rows="5"
            />
            <label for="floatingTextarea">Dein Anliegen</label>
          </div>

          <div class="checkbox mb-3 pt-3">
            <label>
              <small class="text-muted">
                <input type="checkbox" value="einverstanden" required /> Sie
                erklären sich damit einverstanden, daß Ihre Daten zur
                Bearbeitung Ihres Anliegens verwendet werden. Mehr unter
                <a href="/datenschutz">Datenschutzerklärung</a>.
              </small>
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-warning" type="submit"
            >Senden</button
          >
        </form>
      </div>
    </div>
  </div>
</section>
