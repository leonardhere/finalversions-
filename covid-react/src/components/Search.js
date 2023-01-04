import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="sBox">
          <form className="form">
            <select
              name="state"
              id="stateForDashBoard"
              class="form-control"
              onChange={this.props.onClickFormHandler}
            >
              <option value="Delhi (NCT)">Delhi</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands (UT)">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh (UT)">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli (UT)">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu (UT)">Daman and Diu</option>

              <option value="Lakshadweep (UT)">Lakshadweep</option>
              <option value="Puducherry (UT)">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir (UT)">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>

            {/* <button type="submit" onClick={this.props.onClickFormHandler}>
            Submit
          </button> */}
          </form>
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
