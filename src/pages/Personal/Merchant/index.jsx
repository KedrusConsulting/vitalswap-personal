import React from "react";
import SplitScreen from "../../../components/SplitScreen";
import openDollarAccountImg from "../../../assets/open-dollar-account-mockup.webp";
import manageWalletimg from "../../../assets/manage-wallet-mockup.webp";
import globalPaymentImg from "../../../assets/Phone11-pro-back.webp";
import getDownloadAppUrl from "../../../utils/getDownloadAppUrl";

const Merchant = () => {
  const downloadURL = getDownloadAppUrl();

  return (
    <section className="merchant">
      <div className="container">
        <div className="merchant__caption">
          <h2 data-aos="fade-up">
            Pay local and international businesses with your local currency on
            VitalSwap.
          </h2>
        </div>

        <div className="open-dollar-account">
          <SplitScreen>
            <div className="open-dollar-account__left">
              <h3 data-aos="fade-right">
                Get a free dollar account and get same-day payments
              </h3>
              <p data-aos="fade-right">
                Freelancers and gig workers can now receive payments instantly.
                Access funds immediately to keep your business running smoothly.
              </p>

              <a
                data-aos="fade-right"
                role="button"
                className="btn btn--primary"
                href={downloadURL}
                target="_blank"
              >
                Download App
              </a>
            </div>

            <div
              className="open-dollar-account__right"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                src={openDollarAccountImg}
                alt="Open dollar account mockup"
              />
            </div>
          </SplitScreen>
        </div>

        <div className="global-payment">
          <SplitScreen>
            <div className="global-payment__left" data-aos="fade-right">
              <img src={globalPaymentImg} alt="Global payment mockup" />
            </div>
            <div className="global-payment__right">
              <h3 data-aos="fade-left">Make global payments</h3>
              <p data-aos="fade-left">
                VitalSwap makes international transactions quick, easy and
                secure. Whether for business or supporting loved ones, our
                service simplifies transfers.
              </p>

              <a
                data-aos="fade-left"
                role="button"
                className="btn btn--primary"
                href={downloadURL}
                target="_blank"
              >
                Download App
              </a>
            </div>
          </SplitScreen>
        </div>

        <div className="manage-wallet">
          <SplitScreen>
            <div className="manage-wallet__left">
              <h3 data-aos="fade-right">
                Manage your wallet without security risks
              </h3>
              <p data-aos="fade-right">
                VitalSwap lets you to hold funds, pay bills, and manage cash
                flow, all without compromising security.
              </p>

              <a
                data-aos="fade-right"
                role="button"
                className="btn btn--primary"
                href={downloadURL}
                target="_blank"
              >
                Download App
              </a>
            </div>

            <div className="manage-wallet__right" data-aos="fade-left">
              <img src={manageWalletimg} alt="Manage wallet mockup" />
            </div>
          </SplitScreen>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
