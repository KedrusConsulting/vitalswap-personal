import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CurrencyConverter from "../../../components/CurrencyConverter";

function Exchange() {
  const initialValues = {
    amountToSend: "",
    amountToReceive: "",
  };

  const [position, setPosition] = useState(false);
  const { innerWidth: width } = window;

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > "768" && setPosition(false);
      window.innerWidth <= "768" && setPosition(true);
    });
  }, []);

  return (
    <div className="exchange" id="rates">
      <div className="exchange__text-box">
        <h2 data-aos="fade-up" className="heading--secondary">
          Explore unbeatable exchange rates
        </h2>
        <p data-aos="fade-up">Enjoy the best rates from the marketplace.</p>

        <div className="form_box-mob">
          <Formik initialValues={initialValues}>
            {({ values, handleChange }) => (
              <form>
                <CurrencyConverter values={values} onChange={handleChange} />
              </form>
            )}
          </Formik>
        </div>

        <a
          data-aos="fade-up"
          href="https://vitalswap.com/download.html"
          className="btn btn--primary mt-4"
        >
          Get Started
        </a>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="exchange__form-box"
      >
        <div className="form_box-desk">
          <Formik initialValues={initialValues}>
            {({ values, handleChange }) => (
              <form>
                <CurrencyConverter values={values} onChange={handleChange} />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
