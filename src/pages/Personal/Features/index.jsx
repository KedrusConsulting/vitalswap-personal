import payBillsIcon from "../../../assets/pay-bills-icon.svg";
import airTimeIcon from "../../../assets/airtime-icon.svg";
import dataIcon from "../../../assets/data-icon.svg";
import payVendorIcon from "../../../assets/pay-vendor-icon.svg";

const features = [
  {
    image_url: payBillsIcon,
    title: "Pay Bills",
    description:
      "Pay your utility bills, internet, cable TV, and insurance premiums all on one platform effortlessly.",
  },

  {
    image_url: airTimeIcon,
    title: "Data",
    description:
      "Stay connected by topping up your data anytime, anywhere—simple and quick.",
  },

  {
    image_url: dataIcon,
    title: "Airtime",
    description:
      "Need a top-up? Recharge your airtime effortlessly with just a couple of clicks.",
  },

  {
    image_url: payVendorIcon,
    title: "Pay vendors",
    description:
      "Pay vendors online and offline for a wide variety of products & services with ease.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__caption">
          <span>Features</span>
          <h2 data-aos="fade-up">What else can you do with VitalSwap?</h2>
          <p data-aos="fade-up">
            Access services for day to day activities with ease
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => {
            return (
              <div
                className="features__card"
                key={feature.title}
                data-aos="fade-up"
              >
                <img src={feature.image_url} alt={feature.title} />
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
