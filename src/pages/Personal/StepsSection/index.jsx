import React, { useEffect, useRef, useState } from "react";

import enter_amount_screen from "../../../assets/slider-@1x.webp";
import destination_currency_screen from "../../../assets/slider-2@1x.webp";
import sendto_recip_screen from "../../../assets/slider-3@1x.webp";

function StepsSection() {
  const imgsContainerRef = useRef();
  const cardsContainerRef = useRef();

  const [updateCount, setUpCount] = useState(true);

  let cur = 0,
    stepsTimer;

  useEffect(() => {
    const stepsCard = Array.from(
      cardsContainerRef.current.querySelectorAll(".steps__card")
    );

    const stepsImg = Array.from(
      imgsContainerRef.current.querySelectorAll("[class^=steps__img")
    );

    stepsTimer = setInterval(() => {
      stepsCard.map((card, i) => {
        card.classList.remove("steps__card--active");
      });

      stepsImg.map((img, i) => {
        img.classList.remove("steps__img--active");
      });

      if (cur < stepsCard.length - 1) {
        cur++;
      } else {
        cur = 0;
      }

      // console.log("..........");
      // console.log(cur);

      stepsCard[cur].classList.add("steps__card--active");
      stepsImg[cur].classList.add("steps__img--active");
    }, 4000);

    return () => clearInterval(stepsTimer);
  }, []);

  const handleSteps = (e) => {
    const elem = e.target.closest(".steps__card");

    const stepsCard = Array.from(
      cardsContainerRef.current.querySelectorAll(".steps__card")
    );
    const stepsImg = Array.from(
      imgsContainerRef.current.querySelectorAll("[class^=steps__img")
    );

    cur = +elem.dataset.card;

    // console.log("------------------");
    // console.log(cur);

    clearInterval(stepsTimer);

    stepsCard.map((card, i) => {
      card.classList.remove("steps__card--active");
    });

    stepsImg.map((img, i) => {
      img.classList.remove("steps__img--active");
    });

    stepsCard[cur].classList.add("steps__card--active");
    stepsImg[cur].classList.add("steps__img--active");

    // alert("Stopped timer");

    stepsTimer = setInterval(() => {
      stepsCard.map((card, i) => {
        card.classList.remove("steps__card--active");
      });

      stepsImg.map((img, i) => {
        img.classList.remove("steps__img--active");
      });

      if (cur < stepsCard.length - 1) {
        cur++;
      } else {
        cur = 0;
      }

      stepsCard[cur].classList.add("steps__card--active");
      stepsImg[cur].classList.add("steps__img--active");
    }, 4000);
  };

  return (
    <section className="steps__section" id="how-it-works">
      <div className="container">
        <div className="steps__inner">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="steps__caption"
          >
            <h2 className="heading--secondary">
              Making payments has never been this easy.
            </h2>
          </div>

          <div
            className="steps__container"
            onClick={handleSteps}
            ref={cardsContainerRef}
          >
            <div className="steps__text-box">
              <div
                data-card="0"
                data-aos="fade-up"
                data-aos-duration="2000"
                className="steps__card steps__card--active"
              >
                <h4 className="heading--quad">Convert</h4>
                <p>
                  Select your local currency for your destination currency with
                  VitalSwap EasySend for the best rates.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="steps__img--mob steps__img--1"
                data-mob="0"
              >
                <img
                  src={enter_amount_screen}
                  alt="Vitalswap send money app screen"
                />
              </div>

              <div
                data-card="1"
                data-aos="fade-up"
                data-aos-duration="2000"
                className="steps__card"
              >
                <h4 className="heading--quad">Select the recipient</h4>
                <p>Choose personal expenses or an institution.</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="steps__img--mob steps__img--2"
                data-mob="1"
              >
                <img
                  src={destination_currency_screen}
                  alt="Vitalswap send money app screen"
                />
              </div>

              <div
                data-card="2"
                data-aos="fade-up"
                data-aos-duration="2000"
                className="steps__card"
              >
                <h4 className="heading--quad">Send</h4>
                <p>
                  Add your desired amount after signing up and hit the EasySend
                  button to complete the process.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="steps__img--mob steps__img--3"
                data-mob="2"
              >
                <img
                  src={sendto_recip_screen}
                  alt="Vitalswap send money app screen"
                />
              </div>
            </div>
            <div
              ref={imgsContainerRef}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="steps__img-box"
            >
              <div className="steps__img--1 steps__img--active" data-img="0">
                <img
                  src={enter_amount_screen}
                  alt="Vitalswap send money app screen"
                />
              </div>

              <div className="steps__img--2" data-img="1">
                <img
                  src={destination_currency_screen}
                  alt="Vitalswap destination currency app screen"
                />
              </div>

              <div className="steps__img--3" data-img="2">
                <img
                  src={sendto_recip_screen}
                  alt="Vitalswap send to recipient app screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
