import { React, useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
function userAge() {
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
                {/* <!-- 나이 체크 --> */}
                <form className="user-form">
                    <p className="user-form-title">코코의 <b>나이</b>를<br />알려주세요!</p>
                    <div className="form-radio-group">
                    <label className="form-label" htmlFor="age1">
                        <span className="form-radio-text">
                        10개월 미만
                        <input
                            className="form-radio"
                            type="radio"
                            id="age1"
                            name="age"
                            value="under10month"
                        />
                        </span>
                    </label>
                    <label className="form-label" htmlFor="age2">
                        <span className="form-radio-text">
                        10개월 이상
                        <input
                            className="form-radio"
                            type="radio"
                            id="age2"
                            name="age"
                            value="more10month"
                        />
                        </span>
                    </label>
                    <label className="form-label" htmlFor="age3">
                        <span className="form-radio-text">
                        7살 이상
                        <input
                            className="form-radio"
                            type="radio"
                            id="age3"
                            name="age"
                            value="more7years"
                        />
                        </span>
                    </label>
                    </div>
                </form>

                {/* <!-- 중성화 여부 체크 --> */}
                <form className="user-form">
                    <p className="user-form-title">중성화를 했나요?</p>
                    <div className="form-radio-group form-small-radio-group">
                    <label className="form-label" htmlFor="neutralization1">
                        <span className="form-radio-text form-radio-text-small">
                        안 했어요
                        <input
                            className="form-radio"
                            type="radio"
                            id="neutralization1"
                            name="neutralization"
                            value="안 했어요"
                        />
                        </span>
                    </label>
                    <label className="form-label" htmlFor="neutralization2">
                        <span className="form-radio-text form-radio-text-small">
                        했어요
                        <input
                            className="form-radio"
                            type="radio"
                            id="neutralization2"
                            name="neutralization"
                            value="했어요"
                        />
                        </span>
                    </label>
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
                    <Link to="/userKneecap">
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

export default userAge;
