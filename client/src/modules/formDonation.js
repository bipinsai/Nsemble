import React from "react";

function formDonation() {
  return (
    <div class="container button">
      <form>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input custom-control"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input custom-control"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input custom-control"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                />
                <label class="form-check-label" for="gridRadios3">
                  Third radio
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Custom Checkbox
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">
            <label for="exampleFormControlSelect1">Example select</label>
          </div>
          <div class="col-sm-4">
            <select
              class="custom-control form-control"
              id="exampleFormControlSelect1"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control form-group"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </form>

      <form>
        <div class="form-label-group">
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputEmail">Email address</label>
        </div>

        <div class="form-label-group">
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <label for="inputPassword">Password</label>
        </div>

        <div class="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
          />
          <label class="custom-control-label" for="customCheck1">
            Remember password
          </label>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
          type="submit"
        >
          Sign in
        </button>
        <div class="text-center">
          <a class="small" href="#">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default formDonation;
