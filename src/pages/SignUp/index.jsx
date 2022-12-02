import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import FeatureCard from "../../components/FeatureCard";
import InputField from "../../components/InputField";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

function SignUp() {
  const [countriesOptions, setCountriesOptions] = useState([
    { label: "Select Country", value: "" },
  ]);

  const initialValues = {
    firstname: "",
    lastname: "",
    companyName: "",
    email: "",
    phone: "",
    countryOfBusiness: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({});

  const onSubmit = async (values, { resetForm }) => {};

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get("https://restcountries.com/v2/all");

      const data = res.data;
      const countries = data.map((res) => {
        return { label: res.name, value: res.name };
      });

      setCountriesOptions((prev) => [...prev, ...countries]);
    };

    getCountries();
  }, []);

  return (
    <>
      <div className="header header--signup">
        <Navigation />

        <div className="hero--terms">
          <h1 className="heading--secondary">
            Does your business receive payments from Africa?
          </h1>
        </div>
      </div>

      <main className="signup__main">
        <div className="container">
          <div className="signup__container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form className="signup__form" onSubmit={handleSubmit}>
                  <h3 className="heading--tertiary">Let’s get Started</h3>

                  <InputField
                    type="text"
                    name="firstname"
                    id="firstname"
                    label="First Name"
                    placeholder="John"
                    value={values.firstname}
                    onChange={handleChange}
                  />

                  <InputField
                    type="text"
                    name="lastname"
                    id="lastname"
                    label="Last Name"
                    placeholder="Adebayo"
                    value={values.lastname}
                    onChange={handleChange}
                  />

                  <InputField
                    type="text"
                    name="companyName"
                    id="companyName"
                    label="Company Name"
                    placeholder="VitalSwap"
                    value={values.companyName}
                    onChange={handleChange}
                  />

                  <InputField
                    type="email"
                    name="email"
                    id="email"
                    label="Email Address"
                    placeholder="example@example.com"
                    value={values.email}
                    onChange={handleChange}
                  />

                  <InputField
                    type="number"
                    name="phone"
                    id="phone"
                    label="Phone Number"
                    placeholder="+234 805 438 3489"
                    value={values.phone}
                    onChange={handleChange}
                  />

                  <Select
                    options={countriesOptions}
                    name="countryOfBusiness"
                    id="countryOfBusiness"
                    label="Country of Business"
                    value={values.countryOfBusiness}
                    onChange={handleChange}
                  />

                  <TextArea
                    name="description"
                    id="description"
                    label="Description of Business"
                    value={values.description}
                    placeholder="Tell us about your business"
                    onChange={handleChange}
                  />

                  <button
                    type="submit"
                    className="btn btn--primary inputfield__btn"
                  >
                    Get Started
                  </button>
                </form>
              )}
            </Formik>

            <aside className="signup__aside">
              <FeatureCard
                icon={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 15C22.8065 15 21.6619 15.4741 20.818 16.318C19.9741 17.1619 19.5 18.3065 19.5 19.5C19.5 20.6935 19.9741 21.8381 20.818 22.682C21.6619 23.5259 22.8065 24 24 24C25.1935 24 26.3381 23.5259 27.182 22.682C28.0259 21.8381 28.5 20.6935 28.5 19.5C28.5 18.3065 28.0259 17.1619 27.182 16.318C26.3381 15.4741 25.1935 15 24 15Z"
                      fill="#04396D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 9.75C3 7.678 4.68 6 6.75 6H41.25C43.32 6 45 7.68 45 9.75V29.25C45 31.322 43.32 33 41.25 33H6.75C6.25754 33 5.76991 32.903 5.31494 32.7146C4.85997 32.5261 4.44657 32.2499 4.09835 31.9017C3.75013 31.5534 3.47391 31.14 3.28545 30.6851C3.097 30.2301 3 29.7425 3 29.25V9.75ZM16.5 19.5C16.5 17.5109 17.2902 15.6032 18.6967 14.1967C20.1032 12.7902 22.0109 12 24 12C25.9891 12 27.8968 12.7902 29.3033 14.1967C30.7098 15.6032 31.5 17.5109 31.5 19.5C31.5 21.4891 30.7098 23.3968 29.3033 24.8033C27.8968 26.2098 25.9891 27 24 27C22.0109 27 20.1032 26.2098 18.6967 24.8033C17.2902 23.3968 16.5 21.4891 16.5 19.5ZM37.5 18C37.1022 18 36.7206 18.158 36.4393 18.4393C36.158 18.7206 36 19.1022 36 19.5V19.516C36 20.344 36.672 21.016 37.5 21.016H37.516C37.9138 21.016 38.2954 20.858 38.5767 20.5767C38.858 20.2954 39.016 19.9138 39.016 19.516V19.5C39.016 19.1022 38.858 18.7206 38.5767 18.4393C38.2954 18.158 37.9138 18 37.516 18H37.5ZM9 19.5C9 19.1022 9.15804 18.7206 9.43934 18.4393C9.72064 18.158 10.1022 18 10.5 18H10.516C10.9138 18 11.2954 18.158 11.5767 18.4393C11.858 18.7206 12.016 19.1022 12.016 19.5V19.516C12.016 19.9138 11.858 20.2954 11.5767 20.5767C11.2954 20.858 10.9138 21.016 10.516 21.016H10.5C10.1022 21.016 9.72064 20.858 9.43934 20.5767C9.15804 20.2954 9 19.9138 9 19.516V19.5Z"
                      fill="#04396D"
                    />
                    <path
                      d="M4.5 36C4.10218 36 3.72064 36.158 3.43934 36.4393C3.15804 36.7206 3 37.1022 3 37.5C3 37.8978 3.15804 38.2794 3.43934 38.5607C3.72064 38.842 4.10218 39 4.5 39C15.3 39 25.76 40.444 35.7 43.15C38.08 43.798 40.5 42.034 40.5 39.51V37.5C40.5 37.1022 40.342 36.7206 40.0607 36.4393C39.7794 36.158 39.3978 36 39 36H4.5Z"
                      fill="#04396D"
                    />
                  </svg>
                }
                bgIcon={
                  <svg
                    className="features__svg features__svg--1"
                    width="331"
                    height="276"
                    viewBox="0 0 331 276"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M178.464 16.1212C197.487 27.1042 212.278 42.6158 222.285 60.529L222.303 60.5393L222.564 61.0253C222.943 61.7176 223.316 62.4119 223.686 63.1106L230.008 74.8471L305.571 212.598L328.509 200.45L330.319 201.735L316.092 266.826C313.71 275.609 310.755 278.12 307.052 272.46L279.752 221.753L235.481 139.9L201.101 76.4924C193.317 61.2589 181.215 48.036 165.332 38.8663C121.255 13.4179 64.7508 28.7685 39.1251 73.1536C13.4994 117.539 28.4572 174.148 72.5351 199.596C94.4447 212.245 119.422 214.812 142.155 208.746L155.025 232.211C124.232 242.273 89.5503 239.752 59.4007 222.346C2.84442 189.693 -16.3474 117.06 16.5329 60.11C49.4106 3.16412 121.908 -16.5315 178.464 16.1212V16.1212Z"
                      fill="#EBEFF2"
                    />
                  </svg>
                }
                label="Receive payments in your local currency irrespective of customers
              currency."
              />

              <FeatureCard
                icon={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 12C4.5 10.4087 5.13214 8.88258 6.25736 7.75736C7.38258 6.63214 8.9087 6 10.5 6H37.5C39.0913 6 40.6174 6.63214 41.7426 7.75736C42.8679 8.88258 43.5 10.4087 43.5 12V36C43.5 37.5913 42.8679 39.1174 41.7426 40.2426C40.6174 41.3679 39.0913 42 37.5 42H10.5C8.9087 42 7.38258 41.3679 6.25736 40.2426C5.13214 39.1174 4.5 37.5913 4.5 36V12ZM12.44 13.94C12.7213 13.6591 13.1025 13.5013 13.5 13.5013C13.8975 13.5013 14.2787 13.6591 14.56 13.94L19.06 18.44C19.3409 18.7213 19.4987 19.1025 19.4987 19.5C19.4987 19.8975 19.3409 20.2787 19.06 20.56L14.56 25.06C14.2757 25.325 13.8996 25.4692 13.511 25.4624C13.1224 25.4555 12.7516 25.2981 12.4768 25.0232C12.2019 24.7484 12.0445 24.3776 12.0377 23.989C12.0308 23.6004 12.175 23.2243 12.44 22.94L15.88 19.5L12.44 16.06C12.1591 15.7787 12.0013 15.3975 12.0013 15C12.0013 14.6025 12.1591 14.2213 12.44 13.94ZM21 22.5C20.6022 22.5 20.2206 22.658 19.9393 22.9393C19.658 23.2206 19.5 23.6022 19.5 24C19.5 24.3978 19.658 24.7794 19.9393 25.0607C20.2206 25.342 20.6022 25.5 21 25.5H27C27.3978 25.5 27.7794 25.342 28.0607 25.0607C28.342 24.7794 28.5 24.3978 28.5 24C28.5 23.6022 28.342 23.2206 28.0607 22.9393C27.7794 22.658 27.3978 22.5 27 22.5H21Z"
                      fill="#04396D"
                    />
                  </svg>
                }
                bgIcon={
                  <svg
                    className="features__svg features__svg--2"
                    width="331"
                    height="276"
                    viewBox="0 0 331 276"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M178.464 16.1212C197.487 27.1042 212.278 42.6158 222.285 60.529L222.303 60.5393L222.564 61.0253C222.943 61.7176 223.316 62.4119 223.686 63.1106L230.008 74.8471L305.571 212.598L328.509 200.45L330.319 201.735L316.092 266.826C313.71 275.609 310.755 278.12 307.052 272.46L279.752 221.753L235.481 139.9L201.101 76.4924C193.317 61.2589 181.215 48.036 165.332 38.8663C121.255 13.4179 64.7508 28.7685 39.1251 73.1536C13.4994 117.539 28.4572 174.148 72.5351 199.596C94.4447 212.245 119.422 214.812 142.155 208.746L155.025 232.211C124.232 242.273 89.5503 239.752 59.4007 222.346C2.84442 189.693 -16.3474 117.06 16.5329 60.11C49.4106 3.16412 121.908 -16.5315 178.464 16.1212V16.1212Z"
                      fill="#EBEFF2"
                    />
                  </svg>
                }
                label="Access free smart & duly documented API for integration and check
              out."
              />

              <FeatureCard
                icon={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9279 17.4921C21.3819 17.1321 21.9219 16.8701 22.4999 16.7041V22.2941C21.9294 22.1379 21.3952 21.8708 20.9279 21.5081C20.1399 20.8821 19.8359 20.1461 19.8359 19.5001C19.8359 18.8541 20.1399 18.1181 20.9279 17.4921ZM25.4999 31.3241V25.6761C26.1939 25.8461 26.8279 26.1321 27.3419 26.5181C28.1959 27.1581 28.4999 27.8901 28.4999 28.5001C28.4999 29.1101 28.1959 29.8421 27.3419 30.4821C26.7907 30.8831 26.1642 31.1688 25.4999 31.3221V31.3241Z"
                      fill="#04396D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 4.5C13.23 4.5 4.5 13.23 4.5 24C4.5 34.77 13.23 43.5 24 43.5C34.77 43.5 43.5 34.77 43.5 24C43.5 13.23 34.77 4.5 24 4.5ZM25.5 12C25.5 11.6022 25.342 11.2206 25.0607 10.9393C24.7794 10.658 24.3978 10.5 24 10.5C23.6022 10.5 23.2206 10.658 22.9393 10.9393C22.658 11.2206 22.5 11.6022 22.5 12V13.632C21.2457 13.8431 20.0636 14.3626 19.06 15.144C17.636 16.276 16.836 17.844 16.836 19.5C16.836 21.158 17.636 22.724 19.062 23.856C20.066 24.656 21.266 25.15 22.5 25.368V31.324C21.8356 31.17 21.2092 30.8836 20.658 30.482L18.9 29.162C18.7424 29.0438 18.5631 28.9578 18.3723 28.9089C18.1815 28.86 17.9829 28.8492 17.7879 28.8771C17.394 28.9333 17.0387 29.1437 16.8 29.462C16.5613 29.7803 16.4588 30.1803 16.5151 30.5741C16.5713 30.968 16.7817 31.3233 17.1 31.562L18.858 32.882C19.924 33.682 21.196 34.172 22.5 34.382V36C22.5 36.3978 22.658 36.7794 22.9393 37.0607C23.2206 37.342 23.6022 37.5 24 37.5C24.3978 37.5 24.7794 37.342 25.0607 37.0607C25.342 36.7794 25.5 36.3978 25.5 36V34.38C26.8171 34.1821 28.0668 33.6681 29.142 32.882C30.632 31.764 31.5 30.194 31.5 28.5C31.5 26.806 30.632 25.236 29.142 24.118C28.067 23.3311 26.8174 22.8164 25.5 22.618V16.708C26.08 16.872 26.618 17.134 27.072 17.494L27.902 18.154C28.2136 18.4014 28.6108 18.515 29.0061 18.4696C29.4014 18.4242 29.7626 18.2236 30.01 17.912C30.2574 17.6004 30.371 17.2032 30.3256 16.8079C30.2802 16.4126 30.0796 16.0514 29.768 15.804L28.938 15.144C27.9348 14.3637 26.7534 13.8448 25.5 13.634V12Z"
                      fill="#04396D"
                    />
                  </svg>
                }
                bgIcon={
                  <svg
                    className="features__svg features__svg--3"
                    width="331"
                    height="276"
                    viewBox="0 0 331 276"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M178.464 16.1212C197.487 27.1042 212.278 42.6158 222.285 60.529L222.303 60.5393L222.564 61.0253C222.943 61.7176 223.316 62.4119 223.686 63.1106L230.008 74.8471L305.571 212.598L328.509 200.45L330.319 201.735L316.092 266.826C313.71 275.609 310.755 278.12 307.052 272.46L279.752 221.753L235.481 139.9L201.101 76.4924C193.317 61.2589 181.215 48.036 165.332 38.8663C121.255 13.4179 64.7508 28.7685 39.1251 73.1536C13.4994 117.539 28.4572 174.148 72.5351 199.596C94.4447 212.245 119.422 214.812 142.155 208.746L155.025 232.211C124.232 242.273 89.5503 239.752 59.4007 222.346C2.84442 189.693 -16.3474 117.06 16.5329 60.11C49.4106 3.16412 121.908 -16.5315 178.464 16.1212V16.1212Z"
                      fill="#EBEFF2"
                    />
                  </svg>
                }
                label="Get intuitive dashboard for reports, along with daily payouts to
            your bank accounts."
              />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SignUp;
