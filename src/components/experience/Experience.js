import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Develpment</h3>
          <div className="experience__content">
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>HTML</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>JavaScript</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>BootStrap</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>TailWind</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Angular</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Develpment</h3>
          <div className="experience__content">
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>MongoDB</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>MySql</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>Python</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <div className="experience__iconAndTitle">
                <BsPatchCheckFill className="experience__details-icons" />
                <h4>PHP</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
