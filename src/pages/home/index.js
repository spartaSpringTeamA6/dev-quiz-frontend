import React from "react";
import "./style.css";

import {
  logo_devquiz,
  img_computer_science,
  img_database,
  img_design_pattern,
  img_java,
  img_jpa,
  img_spring,
} from "../../assets/images";

export default function Home() {
  return (
    <div className="page">
      <div className="div">
        <div className="container">
          <div className="text-wrapper">Categories</div>
          <div className="list">
            <div className="row">
              <button className="article">
                <div className="image-container">
                  <div className="image">
                    <img
                      className="img"
                      alt="database"
                      src={img_computer_science}
                    />
                  </div>
                </div>
                <div className="frame">
                  <div className="title-2">Computer Science</div>
                  <div className="subtitle">
                    Test your Computer Science knowledge
                  </div>
                </div>
              </button>
              <button className="article">
                <div className="image-container">
                  <div className="image">
                    <img className="img" alt="java" src={img_design_pattern} />
                  </div>
                </div>
                <div className="frame">
                  <div className="title-2">Design Pattern</div>
                  <div className="subtitle">
                    Test your Design Pattern knowledge
                  </div>
                </div>
              </button>
            </div>
            <div className="row">
              <button className="article">
                <div className="image-container">
                  <div className="image">
                    <img className="img" alt="database" src={img_database} />
                  </div>
                </div>
                <div className="frame">
                  <div className="title-2">Database</div>
                  <div className="subtitle">Test your Database knowledge</div>
                </div>
              </button>
              <button className="article">
                <div className="image-container">
                  <div className="image">
                    <img className="img" alt="java" src={img_java} />
                  </div>
                </div>
                <div className="frame">
                  <div className="title-2">Java</div>
                  <div className="subtitle">Test your Java knowledge</div>
                </div>
              </button>
            </div>
            <div className="row">
              <button className="article">
                <div className="image-container">
                  <div className="image" />
                  <img className="img" alt="spring" src={img_spring} />
                </div>
                <div className="frame">
                  <div className="title-2">Spring</div>
                  <p className="subtitle">
                    <span className="span">Test your Spring knowledge</span>
                  </p>
                </div>
              </button>
              <button className="article">
                <div className="image-container-2">
                  <img className="img" alt="jpa" src={img_jpa} />
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="title-2">JPA</div>
                  <p className="subtitle">
                    <span className="span">Test your JPA knowledge</span>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="vector-200-2.svg" />
      </div>
    </div>
  );
}
