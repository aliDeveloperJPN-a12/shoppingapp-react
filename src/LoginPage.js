import React from "react";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="body">
      {/* --------------------------------------------------------- */}
      <div className="loginBox"  style={{marginTop:"20px"}}>
        {" "}
        <img
          className="user"
          src="https://i.ibb.co/yVGxFPR/2.png"
          height="100px"
          width="100px"
        />
        <h3>ورود</h3>
        <form action="login.php" method="post">
          <div className="inputBox">
            {" "}
            <input
              id="uname"
              type="text"
              name="Username"
              placeholder="نام کاربری"
            />{" "}
            <input
              id="pass"
              type="password"
              name="Password"
              placeholder="رمز"
            />{" "}
          </div>{" "}
          <input type="submit" name defaultValue="Login" value="ورود"/>
        </form>
        <a href="#"className="text-light">
          فراموشی رمز
          <br />{" "}
        </a>
        <div className="text-center">
          <p style={{ color: "#59238F" }}>ثبت نام</p>
        </div>
      </div>
      <div className='m1'></div>
      {/* --------------------------------------------------------- */}
    </div>
  );
}

export default LoginPage;
