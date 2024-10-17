import React, { lazy } from "react";

import Footer from "../../components/Footer";
import Loadable from "../../components/Loadable";
import Navigation from "../../components/Navigation";

import Hero from "./Hero";
import GetInTouch from "../../components/GetInTouch";
import FAQ from "../../components/FAQ";
import Features from "./Features";

import { faqDataPersonal } from "../../components/FAQ/faqData";
import ScrollBackUp from "../../components/ScrollBackUp";

const Blog = Loadable(lazy(() => import("./Blog")));
const Exchange = Loadable(lazy(() => import("./Exchange")));
const Marketplace = Loadable(lazy(() => import("./Marketplace")));
const StepsSection = Loadable(lazy(() => import("./StepsSection")));
const Merchant = Loadable(lazy(() => import("./Merchant")));
const VirtualCard = Loadable(lazy(() => import("./VirtualCard")));
const Testimonials = Loadable(lazy(() => import("./Testimonials")));

function Personal() {
  return (
    <>
      <header className="header header--personal">
        <Navigation />
        <Hero />
      </header>

      <main className="main">
        <VirtualCard />
        <Merchant />

        <section className="get-exchange secure-process">
          <div className="container">
            <Exchange />
          </div>
        </section>
        <Features />
        <StepsSection />
        <Testimonials />
        <FAQ data={faqDataPersonal} />
        <GetInTouch />
        <Blog />
        <Marketplace />
        <Footer />
      </main>

      <ScrollBackUp />
    </>
  );
}

export default Personal;
