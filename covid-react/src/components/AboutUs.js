import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="stateName posHead">About Us</div>
        <div id="AboutUsBox">
          <p className="ques">
            What are the different components of your project? How does it help
            the citizens of India?
          </p>
          <p className="Abans">
            {" "}
            Our Project is divided into 4 components.
            <br />
            1. Home Page:- This Page contains all the recent verified twitter
            tweets about Covid19 India and availablility of Hospital beds,
            Oxygen Cylinders, Plasma Donors and patients etc. This page would
            help the patients to know the about the treatment and facilities
            that they could avail as there is high shortage of hospital beds and
            Oxygen Cylinders.
            <br />
            2. Trends:- This Page contains all the recent trends and data about
            Covid19 infection cases. Data about every state and union territory
            is provided along with necessary graphs and charts.
            <br />
            3. Vaccination Prediction:- This Page contains the Machine Learning
            Model Prediction API which predictes the number of Vaccination Doses
            that will be jabbed at any given date.
            <br />
            4. Triage:- An AI based online Medical Assessment test which
            identifies the patients condition based on the user responses and
            helps the doctors for a quick and efficent treatment service. The
            Triage asks the patients few questions and gives a Medical
            desciption about patient's condition and the measures that are
            needed to be taken for improvement of patient's health.
            <br />
            5. Login and SignUp:- Login and SignUp module embedded along with
            user authentication and verification.
          </p>
          <p className="ques">What are your Data sources?</p>
          <p className="Abans">
            {" "}
            We are using state bulletins and official handles to update our
            numbers. We are using official indian Government data and APIs to
            fetch the data. The Data is verified at multiple levels and is also
            been used by Google. All the trends and charts are made using JS on
            the data fetched by official APIs.
          </p>
          <p className="ques">
            Why are you guys putting in time and resources to do this while not
            gaining a single penny from it?
          </p>
          <p className="Abans">
            {" "}
            The Current pandemic is catastrophic and many people need help, this
            is not the time of earning money but to save mankind and show
            integrity because it affects all of us. Today if someone else who is
            getting infected; tomorrow it could be us. We need to prevent the
            spread of this virus. We need to document the data so that people
            with knowledge can use this data to make informed decisions.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
