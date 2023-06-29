import React from "react";
import Navbar from "../components/Navbar";

export default function Bookatable() {
  return (
    <div className="home-container">
      <Navbar />

      <h3 className="fw-normal mb-0 text-black">Book a Table</h3>
      <form className="w-100 p-4">
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-outline">
              <label className="form-label">Time</label>
              <input type="time" className="form-control" />
            </div>
          </div>
        </div>

        <div class="col">
          <div className="form-outline mb-4">
            <label className="form-label">Person</label>

            <select className="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <label class="form-label">First name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label">Last name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label">Phone Number</label>
              <input type="number" class="form-control" />
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Additional information</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <div class="form-check d-flex">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            checked
          />
          <label class="form-check-label">
            I have read and agree to the terms
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Book a Table
        </button>
      </form>
    </div>
  );
}
