import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import FAQCard from "../../../components/FAQCard";
import { useApp } from "../../../context/app";

function FAQ() {
  const { faqs } = useApp();

  const [open, setOpen] = useState(false);

  const faqContainerRef = useRef();

  useEffect(() => {
    faqContainerRef.current.addEventListener("click", (e) => {
      const elem = e.target.closest(".faq__title");

      if (elem) {
        const parent = elem.parentElement;

        const faqs = Array.from(document.querySelectorAll(".faq__faq"));
        const faqsBody = Array.from(document.querySelectorAll(".faq__body"));

        faqs.map((faq, i) => {
          faq.classList.remove("faq__faq--is-open");
          faqsBody[i].style.height = 0;

          faq.querySelector(".faq__open").classList.remove("hidden");
          faq.querySelector(".faq__close").classList.add("hidden");
        });

        if (!open) {
          parent.classList.add("faq__faq--is-open");

          parent.querySelector(".faq__body").style.height =
            parent.querySelector(".faq__answer").offsetHeight + "px";

          parent.querySelector(".faq__open").classList.add("hidden");
          parent.querySelector(".faq__close").classList.remove("hidden");
        }

        if (open) {
          parent.classList.remove("faq__faq--is-open");

          parent.querySelector(".faq__body").style.height = 0;

          parent.querySelector(".faq__open").classList.remove("hidden");
          parent.querySelector(".faq__close").classList.add("hidden");
        }

        // setOpen((prev) => !prev);
      }
    });

    return faqContainerRef.current.removeEventListener(
      "click",
      console.log("removed")
    );
  }, [open]);

  return (
    <section className="faq__section" id="faq">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="faq__caption"
        >
          <h4 className="heading--caption">FAQs</h4>
          <h2 className="heading--secondary">
            We answered some of your questions
          </h2>
        </div>

        <div
          className="faq__container"
          ref={faqContainerRef}
          onClick={() => setOpen((prev) => !prev)}
        >
          {faqs?.map((faq) => (
            <FAQCard key={faq.id} title={faq.title} body={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
