"use client";

import { useEffect } from "react";
import { upperFirstLetter } from "../utils/string";

const Content = ({ name = "bạn" }: { name: string }) => {
  const openImageModal = (e: React.MouseEvent<HTMLImageElement>) => {
    window.undangan.guest.modal(e.target);
  };

  const desktopImages = [
    "./assets/images/thai-1.jpg",
    "./assets/images/thai-4.jpg",
    "./assets/images/thai-5.jpg",
    "./assets/images/vvvv.jpg",
    "./assets/images/thai-2.jpg",
    "./assets/images/thai-7.jpg",
  ];

  const weddingImages = [
    "./assets/images/thai-1.jpg",
    "./assets/images/thai-4.jpg",
    "./assets/images/thai-5.jpg",
    "./assets/images/thai-9.jpg",
    "./assets/images/thai-11.jpg",
    "./assets/images/vvvv.jpg",
  ];

  const traditionalImages = [
    "./assets/images/thai-2.jpg",
    "./assets/images/thai-3.jpg",
    "./assets/images/thai-6.jpg",
    "./assets/images/thai-7.jpg",
    "./assets/images/thai-8.jpg",
    "./assets/images/thai-10.jpg",
  ];

  const showStory = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.undangan.guest.showStory(e.currentTarget.parentNode);
  };

  useEffect(() => {
    setTimeout(() => {
      const nextBtns = document.querySelectorAll("button.carousel-control-next");
      nextBtns?.forEach((btn) => {
        (btn as HTMLButtonElement).click();
      });
    }, 1000);
  }, []);

  return (
    <div className="row m-0 p-0" id="root">
      {/* Desktop mode */}
      <div className="sticky-top vh-100 d-none d-sm-block col-sm-5 col-md-6 col-lg-7 col-xl-8 col-xxl-9 overflow-y-hidden m-0 p-0">
        <div className="position-relative bg-white-black d-flex justify-content-center align-items-center vh-100">
          <div className="d-flex position-absolute w-100 h-100">
            <div className="position-relative overflow-hidden vw-100">
              {desktopImages.map((src) => (
                <div key={src} className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                  <img
                    src="./assets/images/vvvv.jpg"
                    data-src={src}
                    alt="bg"
                    className="bg-cover-home"
                    style={{ maskImage: "none", opacity: "50%", objectPosition: "0px -350px" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center p-4 bg-overlay-auto rounded-5">
            <h2 className="font-esthetic mb-4" style={{ fontSize: "2rem" }}>
              Việt Thái &amp; Thu Thảo
            </h2>
            <p className="m-0" style={{ fontSize: "1rem" }}>
              Chủ nhật, ngày 28 tháng 12 năm 2025
            </p>
          </div>
        </div>
      </div>
      {/* Smartphone mode */}
      <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-0 p-0">
        {/* Main Content */}
        <main
          data-bs-spy="scroll"
          data-bs-target="#navbar-menu"
          data-bs-root-margin="25% 0% 0% 0%"
          data-bs-smooth-scroll="true"
          tabIndex={0}
        >
          {/* Home */}
          <section id="home" className="bg-light-dark position-relative overflow-hidden p-0 m-0">
            <img
              src="./assets/images/vvvv.jpg"
              data-src="./assets/images/vvvv.jpg"
              alt="bg"
              className="position-absolute opacity-25 top-50 start-50 translate-middle bg-cover-home"
            />
            <div className="position-relative text-center bg-overlay-auto" style={{ backgroundColor: "unset" }}>
              <h1 className="pt-5 pb-4 fw-medium font-esthetic" style={{ fontSize: "2.25rem" }}>
                Thiệp Mời
              </h1>
              <img
                src="./assets/images/vvvv.jpg"
                data-src="./assets/images/vvvv.jpg"
                alt="bg"
                onClick={openImageModal}
                className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer object-top"
              />
              <h2 className="font-esthetic my-4" style={{ fontSize: "2.25rem" }}>
                Việt Thái &amp; Thu Thảo
              </h2>
              <p className="my-2" style={{ fontSize: "1.25rem" }}>
                Chủ nhật, ngày 28 tháng 12 năm 2025
              </p>
              <button
                className="btn btn-outline-auto btn-sm shadow rounded-pill px-3 py-1"
                style={{ fontSize: "0.825rem" }}
              >
                <i className="fa-solid fa-calendar-check me-2" />
                Save Google Calendar
              </button>
              <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
                <div className="mouse-animation border border-secondary border-2 rounded-5 px-2 py-1 opacity-50">
                  <div className="scroll-animation rounded-4 bg-secondary" />
                </div>
              </div>
              <p className="pb-4 m-0 text-secondary" style={{ fontSize: "0.825rem" }}>
                Scroll Down
              </p>
            </div>
          </section>
          {/* Wave Separator */}
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="color-theme-svg no-gap-bottom">
              <path
                fill="currentColor"
                fillOpacity={1}
                d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          {/* Bride */}
          <section className="bg-white-black text-center" id="bride">
            <h2 className="font-esthetic py-4 m-0 flex gap-2.5 justify-center" style={{ fontSize: "2rem" }}>
              <span>Dear</span>
              {upperFirstLetter(name)},
            </h2>
            {/* <h2 className="font-esthetic py-4 m-0" style={{ fontSize: "2rem" }}>
              Assalamualaikum Warahmatullahi Wabarakatuh
            </h2> */}
            <p className="pb-4 px-2 m-0">
              Chúng mình xin gửi lời mời trân trọng và thân thương đến bạn. Rất mong bạn có thể đến chung vui cùng chúng
              mình trong ngày trọng đại này. Sự hiện diện của bạn sẽ làm đám cưới trở nên ý nghĩa và trọn vẹn hơn, khi
              chúng mình bắt đầu bước sang một hành trình mới bên nhau. Hy vọng thật nhiều rằng bạn sẽ đến và cùng chúng
              mình lưu lại những khoảnh khắc hạnh phúc, đáng nhớ nhất.
            </p>
            <div className="overflow-x-hidden pb-4">
              <div className="position-relative">
                {/* Love animation */}
                <div className="position-absolute" style={{ top: "0%", right: "5%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="opacity-50"
                    data-time={500}
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
                <div data-aos="fade-right" data-aos-duration={2000} className="pb-1">
                  <img
                    src="./assets/images/placeholder.webp"
                    data-src="./assets/images/groom.jpg"
                    alt="cowo"
                    onClick={openImageModal}
                    className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
                  />
                  <h2 className="font-esthetic m-0" style={{ fontSize: "2.125rem" }}>
                    Việt Thái
                  </h2>
                  <p className="mt-3 mb-1" style={{ fontSize: "1.25rem" }}>
                    Chú Rể
                  </p>
                </div>
                {/* Love animation */}
                <div className="position-absolute" style={{ top: "90%", left: "5%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="opacity-50"
                    data-time={2000}
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
              <h2 className="font-esthetic mt-4" style={{ fontSize: "4.5rem" }}>
                &amp;
              </h2>
              <div className="position-relative">
                {/* Love animation */}
                <div className="position-absolute" style={{ top: "0%", right: "5%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="opacity-50"
                    data-time={3000}
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
                <div data-aos="fade-left" data-aos-duration={2000} className="pb-1">
                  <img
                    src="./assets/images/placeholder.webp"
                    data-src="./assets/images/bride.jpg"
                    alt="cewe"
                    onClick={openImageModal}
                    className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
                    style={{
                      objectPosition: "0px -10px",
                    }}
                  />
                  <h2 className="font-esthetic m-0" style={{ fontSize: "2.125rem" }}>
                    Thu Thảo
                  </h2>
                  <p className="mt-3 mb-1" style={{ fontSize: "1.25rem" }}>
                    Cô Dâu
                  </p>
                </div>
                {/* Love animation */}
                <div className="position-absolute" style={{ top: "90%", left: "5%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="opacity-50"
                    data-time={2500}
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
          {/* Wave Separator */}
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="color-theme-svg no-gap-bottom">
              <path
                fill="currentColor"
                fillOpacity={1}
                d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              />
            </svg>
          </div>
          {/* Firman Allah Subhanahu Wa Ta&apos;ala */}
          {/* Wedding Date */}
          <section className="bg-light-dark pb-2" id="wedding-date">
            <div className="container text-center">
              <h2 className="font-esthetic py-4 m-0" style={{ fontSize: "2.25rem" }}>
                Joyful Moments
              </h2>
              <div className="border rounded-pill shadow py-2 px-4 mt-2 mb-4">
                <div className="row justify-content-center">
                  <div className="col-3 p-1">
                    <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }} id="day">
                      0
                    </p>
                    <small className="ms-1 me-0 my-0 p-0 d-inline">Days</small>
                  </div>
                  <div className="col-3 p-1">
                    <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }} id="hour">
                      0
                    </p>
                    <small className="ms-1 me-0 my-0 p-0 d-inline">Hours</small>
                  </div>
                  <div className="col-3 p-1">
                    <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }} id="minute">
                      0
                    </p>
                    <small className="ms-1 me-0 my-0 p-0 d-inline">Minutes</small>
                  </div>
                  <div className="col-3 p-1">
                    <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }} id="second">
                      0
                    </p>
                    <small className="ms-1 me-0 my-0 p-0 d-inline">Seconds</small>
                  </div>
                </div>
              </div>
              <p className="py-2 m-0" style={{ fontSize: "0.95rem" }}>
                Với niềm vui và sự trân trọng, chúng mình xin gửi đến bạn thông tin về buổi lễ đặc biệt của chúng mình
                <br /> vào ngày 28 tháng 12 năm 2025:
              </p>
              {/* Love animation */}
              <div className="position-relative">
                <div className="position-absolute" style={{ top: "0%", right: "5%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="opacity-50"
                    data-time={3000}
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
              <div className="overflow-x-hidden">
                <div className="py-2" data-aos="fade-right" data-aos-duration={1500}>
                  <h2 className="font-esthetic m-0 py-2" style={{ fontSize: "2rem" }}>
                    Celebration Meal
                  </h2>
                  <p style={{ fontSize: "0.95rem" }}>10:00 AM</p>
                </div>
                <div className="py-2" data-aos="fade-left" data-aos-duration={1500}>
                  <h2 className="font-esthetic m-0 py-2" style={{ fontSize: "2rem" }}>
                    Wedding Ceremony
                  </h2>
                  <p style={{ fontSize: "0.95rem" }}>11:00 AM</p>
                </div>
              </div>
              {/* Love animation */}
              <div className="position-relative">
                <div className="position-absolute" style={{ top: "0%", left: "5%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="opacity-50"
                    data-time={2000}
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
              <div className="py-2" data-aos="fade-down" data-aos-duration={1500}>
                <a
                  href="https://maps.app.goo.gl/tdxFaUdeErroZW9e7"
                  target="_blank"
                  className="btn btn-outline-auto btn-sm rounded-pill shadow mb-2 px-3"
                >
                  <i className="fa-solid fa-map-location-dot me-2" />
                  View on Google Maps
                </a>
                <small className="d-block my-1">Dong Bang, Hung Yen</small>
              </div>
            </div>
          </section>
          {/* Wave Separator */}
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="color-theme-svg no-gap-bottom">
              <path
                fill="currentColor"
                fillOpacity={1}
                d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              />
            </svg>
          </div>

          {/* Gallery */}
          <section className="bg-white-black pb-5 pt-3" id="gallery">
            <div className="container">
              <div className="border rounded-5 shadow p-3">
                <h2 className="font-esthetic text-center py-2 m-0" style={{ fontSize: "2.25rem" }}>
                  Gallery
                </h2>
                <div
                  id="carousel-image-one"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  className="carousel slide mt-4"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    {weddingImages.map((_, index) => {
                      return (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carousel-image-one"
                          data-bs-slide-to={index}
                          className="active"
                          aria-current="true"
                          aria-label={`Slide ${index + 1}`}
                        />
                      );
                    })}
                  </div>
                  <div className="carousel-inner rounded-4">
                    {weddingImages.map((src, index) => {
                      return (
                        <div className="carousel-item active" key={index}>
                          <img
                            src="./assets/images/placeholder.webp"
                            data-src={src}
                            alt={`image ${index + 1}`}
                            className="d-block img-fluid cursor-pointer"
                            onClick={openImageModal}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-image-one"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-image-one"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div
                  id="carousel-image-two"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  className="carousel slide mt-4"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    {traditionalImages.map((_, index) => {
                      return (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carousel-image-two"
                          data-bs-slide-to={index}
                          className="active"
                          aria-current="true"
                          aria-label={`Slide ${index + 1}`}
                        />
                      );
                    })}
                  </div>
                  <div className="carousel-inner rounded-4">
                    {traditionalImages.map((src, index) => {
                      return (
                        <div className="carousel-item active" key={index}>
                          <img
                            src="./assets/images/placeholder.webp"
                            data-src={src}
                            alt={`image ${index + 1}`}
                            className="d-block img-fluid cursor-pointer"
                            onClick={openImageModal}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-image-two"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-image-two"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* End Of Invitation */}
          <section className="bg-white-black py-2 no-gap-bottom">
            <div className="container text-center">
              <h2 className="" style={{ fontSize: "1rem" }}>
                Chúng mình rất mong bạn có thể đến chung vui trong ngày đặc biệt này.
              </h2>
              <h2 className="pt-1" style={{ fontSize: "1rem" }}>
                Sự hiện diện của bạn sẽ là niềm vinh hạnh lớn nhất đối với gia đình chúng mình.
              </h2>
              <hr className="my-3" />
              <div className="row align-items-center justify-content-between flex-column pb-3">
                <div className="col-auto">
                  <small>
                    Build with
                    <i className="fa-solid fa-heart mx-1" />
                    from chungchamchi19
                  </small>
                </div>
                <div className="col-auto">
                  <small>
                    <i className="fa-brands fa-github me-1" />
                    <a target="_blank" href="https://github.com/chungchamchi19/wedding-invitation.git">
                      github
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Navbar Bottom */}
        <nav className="navbar navbar-expand sticky-bottom rounded-top-4 border-top p-0" id="navbar-menu">
          <ul className="navbar-nav nav-justified w-100 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <i className="fa-solid fa-house" />
                <span className="d-block" style={{ fontSize: "0.7rem" }}>
                  Home
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bride">
                <i className="fa-solid fa-user-group" />
                <span className="d-block" style={{ fontSize: "0.7rem" }}>
                  Invitation
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#wedding-date">
                <i className="fa-solid fa-calendar-check" />
                <span className="d-block" style={{ fontSize: "0.7rem" }}>
                  Schedule
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                <i className="fa-solid fa-images" />
                <span className="d-block" style={{ fontSize: "0.7rem" }}>
                  Gallery
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Content;
