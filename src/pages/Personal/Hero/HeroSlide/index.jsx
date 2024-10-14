import React, { useState } from "react";

import USD from "../../../../assets/us-svg.svg";
import NGN from "../../../../assets/ng-svg.svg";

import apple_store from "../../../../assets/apple-store@1.5x.webp";
import google_play from "../../../../assets/google-play@1.5x.webp";

import hero_img01 from "../../../../assets/hero-img@1x.webp";
import hero_img02 from "../../../../assets/hero-img-phone-mockup@2x.png";
import hero_img03 from "../../../../assets/hero-image-3@2x.webp";
import RateCard from "../../../../components/RateCard";
import { useEffect } from "react";
import { useApp } from "../../../../context/app";

export function HeroSlide1() {
  const { rate } = useApp();
  const [rateUSD, setUSDRate] = useState();
  const [rateNaria, setNariaRate] = useState();

  useEffect(() => {
    const getRate = async () => {
      const { iHaveDollarsIneedNaira, iHaveNairaIneedDollars } = rate;
      setUSDRate(iHaveNairaIneedDollars);
      setNariaRate(iHaveDollarsIneedNaira);
    };

    getRate();
  }, [rate]);

  return (
    <div className="hero__container hero__container--1">
      <div className="hero__text-box">
        <h1 className="heading--primary">
          The easy way to make payments globally.
        </h1>
        <p className="text__lg">
          Send money easily to your friends and family in a few clicks.
        </p>

        <div className="hero__cta">
          <a
            target="_blank"
            href="https://apps.apple.com/lb/app/swap-by-vitalswap/id1595742241"
          >
            <img src={apple_store} alt="Apple store cta" />
          </a>

          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1"
          >
            <img src={google_play} alt="Google play cta" />
          </a>
        </div>
      </div>

      <div className="hero__img-box">
        <div className="layer-glow "></div>
        <img src={hero_img01} alt="Hero img" />

        <svg
          className="hero__svg"
          viewBox="0 0 761 567"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M128.323 84.6419C169.624 60.7966 214.846 49.8256 259.39 50.4552L259.429 50.4328L260.626 50.4701C262.34 50.5081 264.049 50.5613 265.765 50.6243L294.695 51.4775L635.728 58.9381L637.786 2.62259L642.167 0.613687L749.109 98.0221C763.037 112.036 764.551 120.318 749.888 121.137L624.912 117.422L422.951 111.806L266.408 107.617C229.317 105.714 191.316 114.116 156.834 134.024C61.1362 189.275 28.6611 312.179 84.2973 408.544C139.934 504.909 262.609 538.236 358.307 482.985C405.875 455.522 437.814 411.345 451.087 362.015L509.177 363.29C494.67 432.112 452.281 494.585 386.823 532.377C264.034 603.27 106.634 560.508 35.2473 436.863C-36.1338 313.227 5.53363 155.535 128.323 84.6419V84.6419Z"
            fill="white"
          />
        </svg>

        <div className="rate__cards">
          <RateCard
            symbol={"₦"}
            amtToSend={(50000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            amtToReceive={`$${(50000 / rateUSD)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
            currency={USD}
            rate={rateUSD}
          />

          <RateCard
            symbol={"$"}
            amtToSend={(1000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            amtToReceive={`₦${(1000 * rateNaria)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
            currency={NGN}
            rate={rateNaria}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSlide2() {
  return (
    <div className="hero__container hero__container--2">
      <div className="hero__text-box">
        <h1 className="heading--primary">
          Get a virtual dollar card that actually works.
        </h1>
        <p className="text__lg">
          Enjoy low exchange rates, no hidden fees, and a 99.99% success rate
          with our dollar card.
        </p>

        <div className="hero__cta">
          <a
            target="_blank"
            href="https://apps.apple.com/lb/app/swap-by-vitalswap/id1595742241"
          >
            <img src={apple_store} alt="Apple store cta" />
          </a>

          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1"
          >
            <img src={google_play} alt="Google play cta" />
          </a>
        </div>
      </div>

      <div className="hero__img-box">
        <div className="layer-glow "></div>
        <img src={hero_img02} alt="Hero img" />

        <svg
          className="hero__svg"
          viewBox="0 0 761 567"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M128.323 84.6419C169.624 60.7966 214.846 49.8256 259.39 50.4552L259.429 50.4328L260.626 50.4701C262.34 50.5081 264.049 50.5613 265.765 50.6243L294.695 51.4775L635.728 58.9381L637.786 2.62259L642.167 0.613687L749.109 98.0221C763.037 112.036 764.551 120.318 749.888 121.137L624.912 117.422L422.951 111.806L266.408 107.617C229.317 105.714 191.316 114.116 156.834 134.024C61.1362 189.275 28.6611 312.179 84.2973 408.544C139.934 504.909 262.609 538.236 358.307 482.985C405.875 455.522 437.814 411.345 451.087 362.015L509.177 363.29C494.67 432.112 452.281 494.585 386.823 532.377C264.034 603.27 106.634 560.508 35.2473 436.863C-36.1338 313.227 5.53363 155.535 128.323 84.6419V84.6419Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export function HeroSlide3() {
  return (
    <div className="hero__container hero__container--3">
      <div className="hero__text-box">
        <h1 className="heading--primary">
          Send money to family and friends around the world.
        </h1>
        <p className="text__lg">
          Show your love and support to family and friends globally without
          hassle.
        </p>

        <div className="hero__cta">
          <a
            target="_blank"
            href="https://apps.apple.com/lb/app/swap-by-vitalswap/id1595742241"
          >
            <img src={apple_store} alt="Apple store cta" />
          </a>

          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1"
          >
            <img src={google_play} alt="Google play cta" />
          </a>
        </div>
      </div>

      <div className="hero__img-box">
        <div className="layer-glow "></div>
        <img src={hero_img03} alt="Hero img" />

        <svg
          className="hero__svg hero__svg--3"
          viewBox="0 0 761 567"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M128.323 84.6419C169.624 60.7966 214.846 49.8256 259.39 50.4552L259.429 50.4328L260.626 50.4701C262.34 50.5081 264.049 50.5613 265.765 50.6243L294.695 51.4775L635.728 58.9381L637.786 2.62259L642.167 0.613687L749.109 98.0221C763.037 112.036 764.551 120.318 749.888 121.137L624.912 117.422L422.951 111.806L266.408 107.617C229.317 105.714 191.316 114.116 156.834 134.024C61.1362 189.275 28.6611 312.179 84.2973 408.544C139.934 504.909 262.609 538.236 358.307 482.985C405.875 455.522 437.814 411.345 451.087 362.015L509.177 363.29C494.67 432.112 452.281 494.585 386.823 532.377C264.034 603.27 106.634 560.508 35.2473 436.863C-36.1338 313.227 5.53363 155.535 128.323 84.6419V84.6419Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
