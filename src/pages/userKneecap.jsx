import { React, useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
function userKneecap() {
  const navigate = useNavigate();
  const prev =() =>{
    navigate(-1);
}
  return (
    <>
      <div className="wrap">
        <section className="user-name">
          <div className="container">
            <progress className="progressbar" max="100" value="20"></progress>

            {/* <!-- 슬개골 탈구 여부 --> */}
            <form className="user-form">
              <p className="user-form-title">
                수의사에게<br /><b>슬개골탈구 진단</b>받은 적이 있나요?
              </p>
              <div className="form-radio-group form-small-radio-group">
                <label className="form-label" htmlFor="kneecap1">
                  <span
                    className="form-radio-text form-radio-text-small kneecap-true"
                  >
                    있어요
                    <input
                      className="form-radio"
                      type="radio"
                      id="kneecap1"
                      name="kneecap"
                      value="안 했어요"
                    />
                  </span>
                </label>
                <label className="form-label" htmlFor="kneecap2">
                  <span className="form-radio-text form-radio-text-small kneecap-not">
                    했어요
                    <input
                      className="form-radio"
                      type="radio"
                      id="kneecap2"
                      name="kneecap"
                      value="했어요"
                    />
                  </span>
                </label>
              </div>
            </form>

            {/* <!-- 있어요 --> */}
            <form
              id="userKneecapTrue"
              className="user-form user-form-sub user-kneecap-true"
            >
              <p className="user-form-title">
                <b>슬개골탈구</b><br /><b>몇 기</b>를 진단받으셨나요?
              </p>
              <div className="form-radio-group">
                <label className="form-label" htmlFor="stage1">
                  <span className="form-radio-text">
                    1기 이하
                    <input
                      className="form-radio"
                      type="radio"
                      id="stage1"
                      name="stage"
                      value="first-stage"
                    />
                  </span>
                </label>
                <label className="form-label" htmlFor="stage2">
                  <span className="form-radio-text">
                    2기 이하
                    <input
                      className="form-radio"
                      type="radio"
                      id="stage2"
                      name="stage"
                      value="second-stage"
                    />
                  </span>
                </label>
                <label className="form-label" htmlFor="stage3">
                  <span className="form-radio-text">
                    3기 이하
                    <input
                      className="form-radio"
                      type="radio"
                      id="stage3"
                      name="stage"
                      value="third-stage"
                    />
                  </span>
                </label>
                <label className="form-label" htmlFor="stage4">
                  <span className="form-radio-text">
                    3기 이상
                    <input
                      className="form-radio"
                      type="radio"
                      id="stage4"
                      name="stage"
                      value="fourth-stage"
                    />
                  </span>
                </label>
              </div>
            </form>

            {/* <!-- 없어요 --> */}
            <form
              id="userKneecapNot"
              className="user-form user-form-sub user-kneecap-not"
            >
              <p className="user-form-subtitle">
                <b
                  >해당하는 증상이 있다면<br />체크<span
                    className="text-check-icon"
                  ></span
                  >해주세요</b
                >
              </p>
              <div className="form-check-group">
                <div className="form-checkbox-wrap">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    id="check1"
                    name="checkValue"
                    value="check1"
                  />
                  <label className="form-check-label" htmlFor="check1">
                    최근 6개월 안에 뒷다리가 절뚝거린 적이 있어요.
                  </label>
                </div>

                <div className="form-checkbox-wrap">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    id="check2"
                    name="checkValue"
                    value="check2"
                  />
                  <label className="form-check-label" htmlFor="check2">
                    높은 곳에 올라가거나 내려오기 주저해요.
                  </label>
                </div>

                <div className="form-checkbox-wrap">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    id="check3"
                    name="checkValue"
                    value="check3"
                  />
                  <label className="form-check-label" htmlFor="check3">
                    다리를 굽혔다 펼 때, '두두둑'하는 뼈소리가 나요.
                  </label>
                </div>

                <div className="form-checkbox-wrap">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    id="check4"
                    name="checkValue"
                    value="check4"
                  />
                  <label className="form-check-label" htmlFor="check4">
                    다리를 만지려고 할 때 거부 반응이 있어요.
                  </label>
                </div>

                <div className="form-checkbox-wrap">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    id="check5"
                    name="checkValue"
                    value="check5"
                  />
                  <label className="form-check-label" htmlFor="check5">
                    서있는 자세를 뒤에서 봤을 때, 다리가 곧지 않고 휘어 있어요.
                  </label>
                </div>
              </div>
            </form>
            <div className="button-group">
              <button onClick={prev} className="prev-button">
                <svg
                  width="13"
                  height="23"
                  viewBox="0 0 13 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0867 22.2104C10.623 22.2087 10.1786 22.0242 9.85 21.697L0.516671 12.3637C0.18607 12.0371 0 11.5917 0 11.127C0 10.6623 0.18607 10.217 0.516671 9.89037L9.85 0.557033C10.2863 0.0888423 10.9433 -0.103882 11.5633 0.0544668C12.1834 0.212815 12.6676 0.696981 12.8259 1.31703C12.9843 1.93707 12.7915 2.5941 12.3233 3.03037L4.22667 11.127L12.3233 19.2237C12.6539 19.5503 12.84 19.9957 12.84 20.4604C12.84 20.9251 12.6539 21.3704 12.3233 21.697C11.9947 22.0242 11.5504 22.2087 11.0867 22.2104Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
              <Link to="/userSurgery">
                <button
                  type="submit"
                  id="inputSubmitBtn"
                  className="button-medium"
                >
                  다음
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default userKneecap;
