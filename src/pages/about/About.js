import React from "react";
import ServiceCard from "../../components/cards/ServiceCard";
import webImage from "../../assets/images/icon-dev.svg";
import MobileImage from "../../assets/images/icon-app.svg";
import PhotographImage from "../../assets/images/icon-photo.svg";
import webDesignImage from "../../assets/images/icon-design.svg";

export default function About() {
  const data = [{
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    image: webImage
  }, {
    title: "Mobile app",
    description: "Professional development of applications for iOS and Android.",
    image: MobileImage
  }, {
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level.",
    image: PhotographImage
  }, {
    title: "Web Design",
    description: "The most modern and high-quality design made at a professional level",
    image: webDesignImage
  }]
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Faisalabad, Pakistan, working in web development and print media.
          I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>


      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {
            data.map((item, index) => {
              return <ServiceCard key={index}  image={item.image} title={item.title} description={item.description}/>
            })
          }

          {/* <ServiceCard  image={webImage} title="Web Development" description=" High-quality development of sites at the professional level."/>

            <ServiceCard image={PhotographImage} title="Photograph" description="I make high-quality photos of any category at a professional level."/>

            <ServiceCard image={MobileImage} title="Mobile Apps" description= "Professional development of applications for iOS and Android."/>

            <ServiceCard image={webDesignImage} title="Web design" description="The most modern and high-quality design made at a professional level."/> */}

        </ul>

      </section>


      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="./assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

        </ul>

      </section>




      <div className="modal-container" data-modal-container>

        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">

          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">

            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>

        </section>

      </div>




      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section>

    </article>

  )
}