import React from "react";
import "./End.css";
function End() {
  return (
    <div>
      {/* ------------------------------------------------ */}
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h1 className="display-4 text-dark">
                سوال های پر تکرار کاربران
              </h1>
            </div>
          </div>
          <div className="row">
            {/* ---------------------------------- */}
            {/* ---------------------------------- */}

            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card text-white card-has-bg click-col"
                style={{
                  "background-image":
                    "url('https://source.unsplash.com/600x900/?tech,street')",
                }}
              >
                <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <small className="card-meta mb-2">رسول شایسته</small>
                    <h4 className="card-title mt-0 ">
                      <a className="text-white" herf="#">
                        چه مدت طول میکشه به برنامه نویسی وب مسلط بشم ؟
                      </a>
                    </h4>
                    <small>
                      <i className="far fa-clock" /> 10 دی 1400
                    </small>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <img
                        className="mr-3 rounded-circle"
                        src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                        alt="Generic placeholder image"
                        style={{ "max-width": "50px" }}
                      />
                      <div className="media-body">
                        <h6 className="my-0 text-white d-block">ali ghane fard</h6>
                        <small>Director of UI/UX</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------- */}
            {/* ---------------------------------- */}

            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card text-white card-has-bg click-col"
                style={{
                  "background-image":
                    "url('https://source.unsplash.com/600x900/?tree,nature')",
                }}
              >
                <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tree,nature"
                  alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <small className="card-meta mb-2">معصومه تربیت</small>
                    <h4 className="card-title mt-0 ">
                      <a className="text-white" herf="#">
                        ایا برای متخصص وب ، یادگیری فوتوشاپ لازمه ؟
                      </a>
                    </h4>
                    <small>
                      <i className="far fa-clock" /> 10 آذر 1400
                    </small>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <img
                        className="mr-3 rounded-circle"
                        src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                        alt="Generic placeholder image"
                        style={{ "max-width": "50px" }}
                      />
                      <div className="media-body">
                        <h6 className="my-0 text-white d-block">ali ghane fard</h6>
                        <small>Director of UI/UX</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------- */}

            {/* ---------------------------------- */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card text-white card-has-bg click-col"
                style={{
                  "background-image":
                    "url('https://source.unsplash.com/600x900/?computer,design')",
                }}
              >
                <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?computer,design"
                  alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <small className="card-meta mb-2">مهدی نیازی</small>
                    <h4 className="card-title mt-0 ">
                      <a className="text-white" herf="#">
                        بهترین فریم ورک های جاوااسکریپت چیست ؟
                      </a>
                    </h4>
                    <small>
                      <i className="far fa-clock" /> 13 دی 1401
                    </small>
                  </div>
                  <div className="card-footer">
                    <div className="media">
                      <img
                        className="mr-3 rounded-circle"
                        src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                        alt="Generic placeholder image"
                        style={{ "max-width": "50px" }}
                      />
                      <div className="media-body">
                        <h6 className="my-0 text-white d-block">ali ghane fard</h6>
                        <small>Director of UI/UX</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------- */}
          </div>
        </div>
      </section>
      {/* ------------------------------------------------ */}
    </div>
  );
}

export default End;
