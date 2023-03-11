import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <div className="body">
      {/* -------------------------------------------------------------------- */}
      <div>
        <meta charSet="UTF-8" />
        <title>Profile Image hover effect</title>
        {/* ------------ Font awesome CDN link ------------------ */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        />
        <div className="image-area">
          <div className="img-wrapper">
            <img id="pic" />
            <h2>Ali Ghane Fard</h2>
            <ul>
              <li>
                <a href="https://github.com/aliDeveloperJPN-a12">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ag062062zero/">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}

      <div className="m">
        {" "}
        <p className="intro">
          Hello my friend , I am Ali Ghane Fard and I specialize in web
          programming
        </p>
        <p className="intro">
          and I have been working in this area for several years I have full
          command of javascript, react and css
        </p>
        <p className="intro">thank you.</p>
      </div>
    </div>
  );
}

export default Profile;
