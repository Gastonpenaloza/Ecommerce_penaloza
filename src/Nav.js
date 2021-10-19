import CartWidget from "./CartWidget";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          E-Commerce
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
