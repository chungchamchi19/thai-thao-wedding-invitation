const Progress = ({ name }: { name?: string }) => {
  const upperFirstLetter = (str: string) => {
    if (!str) return "";
    return str
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="loading-page bg-white-black" id="loading" style={{ opacity: 1 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column width-loading text-center">
          <img
            src="./assets/images/placeholder.webp"
            data-src="./assets/images/thumbnail.jpg"
            fetchPriority="high"
            className="img-fluid mb-3 mx-auto object-fit-cover opacity-0"
            alt="icon"
            style={{ width: "200px", height: "200px", borderRadius: "50%", objectPosition: "top" }}
          />
          <div
            className="relative w-full progress p-1 flex items-center !h-auto !rounded-[25px] !border-red-400 border !bg-transparent"
            role="progressbar"
            aria-label="progress bar"
          >
            <div
              className="relative z-10 progress-bar !bg-red-400 rounded-[25px]"
              id="progress-bar"
              style={{ width: "0%", height: "1rem" }}
            />
            <div className="flex items-center mt-1 absolute right-2">❤️</div>
          </div>
          <p className="z-0 d-none mt-4 text-theme-auto text-2xl" id="progress-info">
            Gửi {name || "bạn"} thân mến!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
