import { React, useRef } from 'react';
import {Link} from "react-router-dom";

function userName() {

  return (
    <>
      <div className="wrap">
        <section className="user-name">
          <div className="container">
            <progress className="progressbar" max="100" value="20"></progress>
            <form className="user-form">
              <p className="user-name-title user-form-title">
                운동을 시작하는<br />멍멍이의 이름을 알려주세요.
              </p>
              <input
                id="userNameInput"
                className="user-name-input"
                type="text"
                required
                maxLength="10"
                placeholder="이름을 입력해주세요. (최대 10글자)"
              />
              <span id="clearIcon" className="clear-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1459 12.2604L8.88334 8.0002L13.1459 3.77138C13.3595 3.52398 13.3479 3.1527 13.1193 2.91925C12.8907 2.68581 12.5222 2.6689 12.2734 2.88045L7.99843 7.07789L3.79823 2.84908C3.55517 2.60581 3.16261 2.60581 2.91955 2.84908C2.80158 2.96688 2.73522 3.12725 2.73522 3.29454C2.73522 3.46184 2.80158 3.6222 2.91955 3.74001L7.11352 7.96256L2.851 12.1851C2.73303 12.3029 2.66667 12.4633 2.66667 12.6306C2.66667 12.7979 2.73303 12.9582 2.851 13.076C2.96861 13.1935 3.12781 13.259 3.29346 13.258C3.45606 13.259 3.61261 13.1959 3.72968 13.0823L7.99843 8.84722L12.2734 13.1513C12.391 13.2688 12.5502 13.3342 12.7159 13.3333C12.8794 13.3326 13.036 13.2672 13.1521 13.1513C13.2692 13.0327 13.3345 12.8719 13.3333 12.7046C13.3321 12.5373 13.2647 12.3774 13.1459 12.2604Z"
                    fill="#7B9FFF"
                  />
                </svg>
              </span>
            </form>

            <Link to="/userAge">
              <button
                type="submit"
                id="inputSubmitBtn"
                // onclick="goToAge();"
                className="button-large"
              >
                다음
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default userName;
