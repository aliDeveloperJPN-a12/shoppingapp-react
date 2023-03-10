import React from "react";
import "./Products.css";
function Products() {
  return (
    <div className="wrap1">
      {/* ---------------------------------------------------- */}
      <div className="container" style={{ "margin-top": "50px" }}>
        <div className="row">
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://kaliboys.com/wp-content/uploads/2019/12/python-tips-and-techniques.jpg" />
              </div>
              <div className="card-heading">پایتون</div>
              <div className="card-text">
                دوره جامع زبان برنامه نویسی پایتون از صفر تا صد
              </div>
              <div className="card-text">$30,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="data:image/jpeg;base64,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" />
              </div>
              <div className="card-heading">پی اچ پی</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی پی اچ پی از صفر تا صد
              </div>
              <div className="card-text">$20,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Perl_language_logo.svg/1200px-Perl_language_logo.svg.png" />
              </div>
              <div className="card-heading">پرل</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی پرل از صفر تا صد
              </div>
              <div className="card-text">$30,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png" />
              </div>
              <div className="card-heading">روبی</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی روبی از صفر تا صد
              </div>
              <div className="card-text">$110,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
        </div>
      </div>
      {/* ---------------------------------------------------- */}

      {/* ---------------------------------------------------- */}
      <div className="container" style={{ "margin-top": "50px" }}>
        <div className="row">
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://www.thewindowsclub.com/wp-content/uploads/2020/09/JavaScript.jpg" />
              </div>
              <div className="card-heading">جاوااسکریپت</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی جاوااسکریپت از صفر تا صد

              </div>
              <div className="card-text">$109,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://i.ytimg.com/vi/r04MoADAjD4/maxresdefault.jpg" />
              </div>
              <div className="card-heading">ایدا</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی ایدا از صفر تا صد

              </div>
              <div className="card-text">$90,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://nkveducation.in/wp-content/uploads/2021/02/C-programming-1024x530-1.png" />
              </div>
              <div className="card-heading">سی</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی سی از صفر تا صد

              </div>
              <div className="card-text">$80,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230304231205/C-Language2.png" />
              </div>
              <div className="card-heading">سی پلاس پلاس</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی سی پلاس پلاس از صفر تا صد

              </div>
              <div className="card-text">$75,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
        </div>
      </div>
      {/* ---------------------------------------------------- */}
      {/* ---------------------------------------------------- */}
      <div className="container" style={{ "margin-top": "50px" }}>
        <div className="row">
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Assembly-Language.jpg" />
              </div>
              <div className="card-heading">اسمبلی</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی اسمبلی از صفر تا صد

              </div>
              <div className="card-text">$100,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://www.codeguru.com/wp-content/uploads/2021/08/C-Sharp-Tutorials.png" />
              </div>
              <div className="card-heading">سی شارپ</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی سی شارپ از صفر تا صد

              </div>
              <div className="card-text">$95,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://www.webdevelopersnotes.com/wp-content/uploads/html-not-programming-language.png" />
              </div>
              <div className="card-heading">اچ تی ام ال</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی اچ تی ام ال از صفر تا صد

              </div>
              <div className="card-text">$67,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://i.ytimg.com/vi/hdDkwo0_zZw/maxresdefault.jpg" />
              </div>
              <div className="card-heading">سی اس اس</div>
              <div className="card-text">
              دوره جامع زبان برنامه نویسی سی اس اس از صفر تا صد

              </div>
              <div className="card-text">$67,400</div>
              <a href="#" className="card-button">
                {" "}
                خرید
              </a>
            </div>
          </div>
          {/* ------------------------------------------------- */}
        </div>
      </div>
      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Products;
