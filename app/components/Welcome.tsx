const Welcome = ({ name }: { name?: string }) => {
  const openInvitation = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.undangan.guest.open(e.target);
  };

  return (
    <div className="loading-page bg-white-black" id="welcome" style={{ opacity: 0 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column text-center">
          <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>
            The Wedding Of
          </h2>
          <img
            src="./assets/images/placeholder.webp"
            data-src="./assets/images/vvvv.jpg"
            alt="background"
            className="img-center-crop rounded-circle border border-3 border-light shadow mb-4 mx-auto object-top"
          />
          <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>
            Việt Thái &amp; Thu Thảo
          </h2>
          <div id="guest-name" data-message="Dear Mr./Mrs./Friends" />
          <button type="button" className="btn btn-light shadow rounded-4 mt-3 mx-auto" onClick={openInvitation}>
            <i className="fa-solid fa-envelope-open fa-bounce me-2" />
            Mở thiệp mời của bạn nhé!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
