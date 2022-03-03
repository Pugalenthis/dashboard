import "./pages.css";

export function Pages() {
  return (
    <div>
      <h1>Login Forms</h1>
      <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
     
      <div style={{ marginTop: "40px" }} className="container-fluid">
        <h3 style={{ marginBottom: "40px" }}>Normal Form</h3>

        <p>
        Bootstrap’s form controls expand on our Rebooted form styles with
        classes. Use these classes to opt into their customized displays for a
        more consistent rendering across browsers and devices. Be sure to use an
        appropriate type attribute on all inputs (e.g., email for email address
        or number for numerical information) to take advantage of newer input
        controls like email verification, number selection, and more. Here’s a
        quick example to demonstrate Bootstrap’s form styles. Keep reading for
        documentation on required classes, form layout, and more.
      </p>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div style={{ marginTop: "40px" }} className="container-fluid">
        <h3 style={{ marginBottom: "40px" }}>Form Control</h3>
      <p>Textual form controls—like inputss, selects, and textareas—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.</p>
       
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">
              Example multiple select
            </label>
            <select
              multiple
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
