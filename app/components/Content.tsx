"use client";

import { useEffect } from "react";
import { upperFirstLetter } from "../utils/string";

const Content = ({ name = "my friend" }: { name: string }) => {
  const openImageModal = (e: React.MouseEvent<HTMLImageElement>) => {
    window.undangan.guest.modal(e.target);
  };

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
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU03745.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/placeholder.webp"
                  data-src="./assets/images/GAU02070.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU02236.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU02976.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU03649.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU03899.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%", objectPosition: "0px 75%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU04059.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "50%", objectPosition: "0px 60%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU04072.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "50%", objectPosition: "0px 70%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/xe-dap-1.png"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "30%", objectPosition: "0px 70%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU04494.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "50%", objectPosition: "0px 70%" }}
                />
              </div>
              <div className="position-absolute h-100 w-100 slide-desktop" style={{ opacity: 0 }}>
                <img
                  src="./assets/images/GAU03745.jpg"
                  data-src="./assets/images/GAU04565.jpg"
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: "none", opacity: "50%", objectPosition: "0px 90%" }}
                />
              </div>
            </div>
          </div>
          <div className="text-center p-4 bg-overlay-auto rounded-5">
            <h2 className="font-esthetic mb-4" style={{ fontSize: "2rem" }}>
              Đinh Chung &amp; Phạm Vui
            </h2>
            <p className="m-0" style={{ fontSize: "1rem" }}>
              Sunday, November 30th 2025
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
              src="./assets/images/GAU02042-2.jpg"
              data-src="./assets/images/GAU02042-2.jpg"
              alt="bg"
              className="position-absolute opacity-25 top-50 start-50 translate-middle bg-cover-home"
            />
            <div className="position-relative text-center bg-overlay-auto" style={{ backgroundColor: "unset" }}>
              <h1 className="pt-5 pb-4 fw-medium" style={{ fontSize: "2.25rem" }}>
                Wedding Invitation
              </h1>
              <img
                src="./assets/images/GAU02042-2.jpg"
                data-src="./assets/images/GAU02042-2.jpg"
                alt="bg"
                onClick={openImageModal}
                className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer object-top"
              />
              <h2 className="font-esthetic my-4" style={{ fontSize: "2.25rem" }}>
                Đinh Chung &amp; Phạm Vui
              </h2>
              <p className="my-2" style={{ fontSize: "1.25rem" }}>
                Sunday, November 30th 2025
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
              With heartfelt respect, we invite you to join us as we celebrate our marriage. Your presence would bring
              us great joy on this special day, as we begin a new chapter of our lives together. We truly hope you can
              come and share in the happiness and unforgettable moments of our wedding.
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
                    data-src="./assets/images/groom.png"
                    alt="cowo"
                    onClick={openImageModal}
                    className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
                  />
                  <h2 className="font-esthetic m-0" style={{ fontSize: "2.125rem" }}>
                    Đinh Chung
                  </h2>
                  <p className="mt-3 mb-1" style={{ fontSize: "1.25rem" }}>
                    Groom
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
                    data-src="./assets/images/bride-4.png"
                    alt="cewe"
                    onClick={openImageModal}
                    className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
                    style={{
                      objectPosition: "0px -40px",
                    }}
                  />
                  <h2 className="font-esthetic m-0" style={{ fontSize: "2.125rem" }}>
                    Phạm Vui
                  </h2>
                  <p className="mt-3 mb-1" style={{ fontSize: "1.25rem" }}>
                    Bride
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
          {/* Love Story */}
          <section className="bg-light-dark pt-2 pb-4">
            <div className="container">
              <div className="bg-theme-auto rounded-5 shadow p-3">
                <h2 className="font-esthetic text-center py-2 mb-2" style={{ fontSize: "2.125rem" }}>
                  Our Love Story
                </h2>
                {/* Jika tidak ingin menggunakan video, hapus seluruh tag dengan id="video-love-story" di bawah ini. */}
                {/* If you don't want to use the video, remove the entire tag with id="video-love-story" below. */}
                <iframe
                  style={{
                    width: "100%",
                  }}
                  width="560"
                  height="306"
                  src="https://www.youtube.com/embed/NKwYBZqX_w4?si=ZPtEUojCNcEbM428&mute=1&modestbranding=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="position-relative">
                  <div
                    className="position-absolute d-flex justify-content-center align-items-center top-50 start-50 translate-middle w-100 h-100 bg-overlay-auto z-3"
                    style={{ opacity: "100%", backgroundColor: "unset" }}
                  >
                    <button className="btn btn-outline-auto btn-sm rounded-4 shadow-sm" onClick={showStory}>
                      <i className="fa-solid fa-heart fa-bounce me-2" />
                      Read Story
                    </button>
                  </div>
                  <div className="overflow-y-scroll overflow-x-hidden p-2 with-scrollbar" style={{ height: "15rem" }}>
                    <div className="row">
                      <div className="col-auto position-relative">
                        <p
                          className="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1"
                          style={{ width: "2rem", height: "2rem" }}
                        >
                          1
                        </p>
                        <hr className="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none" />
                      </div>
                      <div className="col mt-1 mb-3 ps-0">
                        <p className="fw-bold mb-2">💼 A Simple First Meeting</p>
                        <p className="small mb-0">
                          Our story began back in secondary school, a time when life was simple and full of curiosity.
                          It was there, among the classrooms and playgrounds, that we first met. What started as
                          friendship slowly blossomed into the tender, innocent love of youth — the kind of love that
                          makes your heart race at a glance and turns ordinary school days into something unforgettable.
                          Those early years were full of shy smiles, secret notes, and the excitement of discovering
                          each other in a world that still felt so big.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-auto position-relative">
                        <p
                          className="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1"
                          style={{ width: "2rem", height: "2rem" }}
                        >
                          2
                        </p>
                        <hr className="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none" />
                      </div>
                      <div className="col mt-1 mb-3 ps-0">
                        <p className="fw-bold mb-2">💞 Affection Tested by Challenges</p>
                        <p className="small mb-0">
                          As we grew older, our journey continued through university. Five years of shared lectures,
                          study sessions, laughter, and tears brought us closer than we could have imagined. We
                          celebrated Christmas together, exchanged silly gifts, and created countless inside jokes that
                          only we could understand. There were moments of joy, moments of frustration, and even moments
                          of sadness, but every experience deepened our bond and shaped the love that had begun so long
                          ago in the corridors of secondary school.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-auto position-relative">
                        <p
                          className="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1"
                          style={{ width: "2rem", height: "2rem" }}
                        >
                          3
                        </p>
                        <hr className="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none" />
                      </div>
                      <div className="col mt-1 mb-3 ps-0">
                        <p className="fw-bold mb-2">🛵 Our Vietnam Memories</p>
                        <p className="small mb-0">
                          After graduation, our adventures expanded beyond the campus. Together, we explored Vietnam not
                          once, but twice, embracing the freedom of travel and the joy of discovering new places. We
                          journeyed from Hue to Da Nang, Quang Nam to Quy Nhon, and onward to Phu Yen, Nha Trang, Da
                          Lat, Ninh Thuan, Binh Thuan, and even the remote Phu Quy Island. Along the way, we met new
                          friends, shared laughter around campfires, tried every local dish we could find, and collected
                          countless memories in every town and city. Those trips were some of the happiest times of our
                          lives — spontaneous, full of energy, and filled with stories we still laugh about to this day.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-auto position-relative">
                          <p
                            className="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            4
                          </p>
                          <hr className="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none" />
                        </div>
                        <div className="col mt-1 mb-3 ps-0">
                          <p className="fw-bold mb-2">💍 Journeying Toward Love and Happiness</p>
                          <p className="small mb-0">
                            Every step of our journey, from the innocence of secondary school to the excitement of
                            university and the thrill of traveling across our beautiful country, has been a chapter in
                            our shared story. It’s a story of growth, adventure, and unwavering love, a story that
                            continues to unfold with every day we spend together.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              />
            </svg>
          </div>
          {/* Wedding Date */}
          <section className="bg-white-black pb-2" id="wedding-date">
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
                With joy and gratitude, we are pleased to announce and share the details of our upcoming celebrations{" "}
                <br /> on November 30th 2025:
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
                  <p style={{ fontSize: "0.95rem" }}>08:00 AM</p>
                </div>
                <div className="py-2" data-aos="fade-left" data-aos-duration={1500}>
                  <h2 className="font-esthetic m-0 py-2" style={{ fontSize: "2rem" }}>
                    Wedding Ceremony
                  </h2>
                  <p style={{ fontSize: "0.95rem" }}>10:00 AM</p>
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
                    <button
                      type="button"
                      data-bs-target="#carousel-image-one"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-one"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-one"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-one"
                      data-bs-slide-to={3}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-one"
                      data-bs-slide-to={4}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-one"
                      data-bs-slide-to={5}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner rounded-4">
                    <div className="carousel-item active">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU03745.jpg"
                        alt="image 1"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item active">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU02042-2.jpg"
                        alt="image 1"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU02070.jpg"
                        alt="image 2"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU02236.jpg"
                        alt="image 3"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU03649.jpg"
                        alt="image 3"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU03765.jpg"
                        alt="image 3"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
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
                    <button
                      type="button"
                      data-bs-target="#carousel-image-two"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-two"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-two"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-two"
                      data-bs-slide-to={3}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-two"
                      data-bs-slide-to={4}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carousel-image-two"
                      data-bs-slide-to={5}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner rounded-4">
                    <div className="carousel-item active">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU03899.jpg"
                        alt="image 4"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU04059.jpg"
                        alt="image 5"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU04072.jpg"
                        alt="image 6"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU04565.jpg"
                        alt="image 6"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU03972.jpg"
                        alt="image 6"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/images/placeholder.webp"
                        data-src="./assets/images/GAU04123.jpg"
                        alt="image 6"
                        className="d-block img-fluid cursor-pointer"
                        onClick={openImageModal}
                      />
                    </div>
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
                We hope you can join us on this special day.
              </h2>
              <h2 className="pt-1" style={{ fontSize: "1rem" }}>
                Your presence would be the greatest honor for our family.
              </h2>
              <hr className="my-3" />
              <div className="row align-items-center justify-content-between flex-column pb-3">
                <div className="col-auto">
                  <small>
                    Build with
                    <i className="fa-solid fa-heart mx-1" />
                    chungchamchi19
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
