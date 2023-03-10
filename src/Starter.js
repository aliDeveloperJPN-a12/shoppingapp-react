import React from "react";
import "./Starter.css";
function Starter() {
  return (
    <div>
      {/* --------------------------------------------- */}
      <div>
        <section className="light">
          <div className="container py-2">
            <div className="h4 text-dark" id="pageHeaderTitle" style={{fontSize:"25px",textAlign:"right",fontStyle:"italic"}}>
              جدیدترین پادکست ها :
            </div>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://picsum.photos/1000/1000"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="#">چگونه یک برنامه نویس بشیم</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2" />4 آذر 1399
                  </time>
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">
                  محبوبیت برنامه نویسی در سال‌های اخیر به قدری افزایش یافته است
                  که تقریباً اکثر افراد در مورد آن چیزهایی شنیده‌اند. با توجه به
                  درآمد و حقوق بالای برنامه نویسی و جذابیت‌های متعدد آن، افراد
                  بسیاری تصمیم می‌گیرند که وارد دنیای برنامه نویسی شوند. در این
                  راستا، اولین سوالی که به وجود می‌آید این است که اصلاً برنامه
                  نویسی چیست و چه کاربردی دارد؟...
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fas fa-tag mr-2" />
                    پادکست
                  </li>
                  <li className="tag__item">
                    <i className="fas fa-clock mr-2" />
                    55 دقیقه
                  </li>
                  <li className="tag__item play blue">
                    <a href="#">
                      <i className="fas fa-play mr-2" />
                      پخش
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="postcard light red">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://picsum.photos/501/500"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title red">
                  <a href="#">نقشه راه فرانت اند</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2" />
                    10 دی 1399
                  </time>
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">
                  برای اینکه بدانید برنامه نویسی فرانت اند چیست و برنامه نویس
                  Front End کیست، ابتدا باید بدانید که Front end چیست؟ ما در این
                  مقاله، برنامه نویسی فرانت اند، موارد مورد نیاز برای یادگیری آن
                  و تفاوت‌های برنامه نویس فرانت اند با سایر حوزه‌ها را توضیح
                  می‌دهیم. پس در ادامه‌ی این مقاله، با وب سایت آموزش برنامه
                  نویسی سون لرن همراه باشید تا به بررسی این موضوع بپردازیم.
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fas fa-tag mr-2" />
                    پادکست
                  </li>
                  <li className="tag__item">
                    <i className="fas fa-clock mr-2" />
                    40 دقیقه
                  </li>
                  <li className="tag__item play red">
                    <a href="#">
                      <i className="fas fa-play mr-2" />
                      پخش
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="postcard light green">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://picsum.photos/500/501"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title green">
                  <a href="#">نقشه راه بکند</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2" />
                    11 فروردین 1400
                  </time>
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">
                  به برنامه‌های دسته دوم و کدهایی که به این ترتیب و برای پردازش
                  صفحه‌های وب نوشته می‌شوند back end می‌گویند. بک اندها به‌طور
                  مستقیم با سیستم در ارتباط نیستند و کدهایشان را از طریق یک سرور
                  به مرورگر کاربران ارسال می‌کنند. درواقع این وسط یک سرور وجود
                  دارد که برنامه نویس‌های بک اند، کدهایشان را از آن طریق روی
                  سیستم کاربر می‌فرستند.
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fas fa-tag mr-2" />
                    پادکست
                  </li>
                  <li className="tag__item">
                    <i className="fas fa-clock mr-2" />
                    25 دقیقه
                  </li>
                  <li className="tag__item play green">
                    <a href="#">
                      <i className="fas fa-play mr-2" />
                      پخش
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="postcard light yellow">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://picsum.photos/501/501"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title yellow">
                  <a href="#">فول استک</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2" />
                    12 دی 1401
                  </time>
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">
                  در مقالات قبلی درباره برنامه نویسی، طراحی وب، برنامه نویسی وب
                  و مفاهیم مختلف صحبت کردیم و به سوالات بسیاری پاسخ دادیم. در
                  این مقاله و فایل ویدئویی میخواهیم درباره‌ی فول استک یا Full
                  Stack صحبت کنیم و یاد بگیریم که Full Stack چیست . در این مقاله
                  با من همراه باشید.
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fas fa-tag mr-2" />
                    پادکست
                  </li>
                  <li className="tag__item">
                    <i className="fas fa-clock mr-2" />
                    55 دقیقه
                  </li>
                  <li className="tag__item play yellow">
                    <a href="#">
                      <i className="fas fa-play mr-2" />
                      پخش
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
      {/* --------------------------------------------- */}
    </div>
  );
}

export default Starter;
