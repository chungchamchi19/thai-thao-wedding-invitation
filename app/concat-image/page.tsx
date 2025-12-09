const ConcatImage = () => {
  const images = [
    "./assets/images/concat/GAU02042-2.jpg",
    "./assets/images/concat/GAU02042-2.jpg",
    "./assets/images/concat/GAU02042-2.jpg",
  ];

  return (
    <div className="">
      <div className="m-auto w-[1365px] h-[2048px] flex flex-column">
        <img src={images[0]} className="h-1/3 object-cover object-top"></img>
        <img src={images[1]} className="h-1/3 object-cover object-top"></img>
        <img src={images[2]} className="h-1/3 object-cover object-top"></img>
      </div>
    </div>
  );
};

export default ConcatImage;
