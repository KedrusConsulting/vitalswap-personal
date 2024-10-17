import React from "react";
import SplitScreen from "../../../components/SplitScreen";
import virtualCardImg from "../../../assets/virtual-card.png";
import getDownloadAppUrl from "../../../utils/getDownloadAppUrl";

const VirtualCard = () => {
  const downloadURL = getDownloadAppUrl();
  return (
    <section className="virtual-card">
      <div className="container">
        <div className="virtual-card__inner">
          <SplitScreen>
            <div className="virtual-card__left">
              <h3 data-aos="fade-up">
                Get a virtual dollar card that actually works.
              </h3>

              <p data-aos="fade-up">
                Make global payments effortlessly with our virtual dollar card.
                Enjoy low exchange rates, no hidden fees, and a 99.99% success
                rate--works for all platforms.
              </p>

              <a
                data-aos="fade-up"
                role="button"
                className="btn btn--primary"
                href={downloadURL}
                target="_blank"
              >
                Download App
              </a>
            </div>

            <div className="virtual-card__right" data-aos="fade-left">
              <img src={virtualCardImg} alt="Vitalswap virtual card mockup" />
            </div>
          </SplitScreen>
        </div>
      </div>
    </section>
  );
};

export default VirtualCard;
