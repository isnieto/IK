<script>
  import DATA from "../../components/Data/data.js";
  import icons from "../../components/Data/icons";
  const dataHeaders = DATA.HEADERS.BEWERBUNG;
  const dataConditions = DATA.VORAUSSETZUNGEN;
</script>

<section class="container">
  <div class="px-4 py-5">
    <div class="row align-items-center g-lg-5 py-2">
      <div class="col-lg-8 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">{dataHeaders.TITLE}</h1>
        <h3>{dataHeaders.UNTERTITLE}</h3>
        <p class="lead">
          {dataHeaders.DESCRIPTION}
        </p>
      </div>
      <div class="col-lg-4 mx-auto text-center ">
        <div class="card p-3 border-secondary">
          <h5 class="fw-bold pt-2">Voraussetzungen</h5>
          <ul class="list-unstyled text-success">
            <li class="my-0 fw-normal">
              <h6>{@html icons.check} {dataConditions[0]}</h6>
            </li>
            <li class="my-0 fw-normal">
              <h6>{@html icons.check} {dataConditions[1]}</h6>
            </li>
            <li class="my-0 fw-normal">
              <h6>{@html icons.check} {dataConditions[2]}</h6>
            </li>
            <li class="my-0 fw-normal">
              <h6>{@html icons.check} {dataConditions[3]}</h6>
            </li>
            <li class="my-0 fw-normal">
              <h6>{@html icons.check} {dataConditions[4]}</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Form -->
  <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
  <div class="container col-xl-12 col-xxl-10 px-2 ">
    <div class="row align-items-center g-lg-5 pb-5">
      <form
        action="../assets/bin/signup.php"
        class="needs-validation p-4 p-md-5 border rounded-3 bg-light"
        id="contactForm"
        method="GET"
        name="sentMessage"
        novalidate
      >
        <div class="row g-3">
          <div class="col-md-4">
            <label for="name" class="form-label">Dein Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder=""
              value=""
              required
            />
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>

          <div class="col-md-4">
            <label for="lastName" class="form-label">Dein Nachname</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder=""
              value=""
              required
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>
          <div class="col-md-4">
            <label for="lastName" class="form-label"
              >Deine Staatsangehörigkeit</label
            >
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder=""
              value=""
              required
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>
          <div class="col-md-4">
            <label for="Telefon" class="form-label"
              >Telefon <span class="text-muted">(Optional)</span></label
            >
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="Telefon"
                placeholder="Telefon"
                required
              />
              <div class="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div class="col-md-8">
            <label for="email" class="form-label">Deine Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="col-md-4">
            <label for="course" class="form-label">Jetzige Stufe</label>
            <select class="form-select" id="course" required>
              <option value="">Auswählen...</option>
              <option>9. Klasse</option>
              <option>10. Klasse</option>
              <option>11. Klasse</option>
              <option>12. Klasse</option>
              <option>Andere</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>

          <div class="col-md-4">
            <label for="age" class="form-label">Dein Alter</label>
            <select class="form-select" id="age" required>
              <option value="">Auswählen...</option>
              <option>14 Jahre alt</option>
              <option>15 Jahre alt</option>
              <option>16 Jahre alt</option>
              <option>17 Jahre alt</option>
              <option>Volljährig</option>
            </select>
            <div class="invalid-feedback">Please provide a valid state.</div>
          </div>

          <div class="col-md-4">
            <label for="spanish" class="form-label"
              >Wie ist Dein Spanisch?</label
            >
            <select class="form-select" id="spanish" required>
              <option value="">Auswählen...</option>
              <option>Forgeschritten</option>
              <option>Sehr gut</option>
              <option>Gut</option>
              <option>Es kommt noch!</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>
          <hr class="my-4 text-danger" />

          <div class="col-md-6">
            <label for="programm" class="form-label">Gewünschtes Programm</label
            >
            <select class="form-select" id="programm" required>
              <option value="">Programm auswählen...</option>
              <option>10 Monate - Schuljahr</option>
              <option>5 Monate - Herbestsemester</option>
              <option>3 Monate - Herbesttrimester</option>
              <option>5 Monate - Frühlingssemester</option>
              <option>3 Monate - Frühlingstrimester</option>
              <option>2 Monate </option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>
          <div class="col-md-6">
            <label for="spanish" class="form-label">Gewünschte Region</label>
            <select class="form-select" id="spanish" required>
              <option value="">Eine Region auswählen...</option>
              <option>Cadiz</option>
              <option>Barcelona</option>
              <option>Valencia</option>
              <option>Málaga</option>
              <option>andere</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>
        </div>

        <hr class="my-4 text-danger" />

        <div class="mb-3">
          <label for="textareaComments" class="form-label"
            >Schreib bitte deine Motivation oder deine Kommentare</label
          >
          <textarea class="form-control" id="comments" rows="3" />
        </div>
        <hr class="my-4 text-danger" />

        <div class="checkbox mb-3">
          <label>
            <small class="text-muted">
              <input type="checkbox" value="einverstanden" required /> Sie
              erklären sich damit einverstanden, daß Ihre Daten zur Bearbeitung
              Ihres Anliegens verwendet werden. Mehr unter
              <a href="/datenschutz">Datenschutzerklärung</a>.
            </small>
          </label>
        </div>
        <div class="col-md-3">
          <button class="w-100 btn btn-lg btn-warning" type="submit"
            >Senden</button
          >
        </div>
      </form>
    </div>
  </div>
  <!-- Content Row -->
</section>

<style>
  textarea {
    height: 100px;
  }
</style>
