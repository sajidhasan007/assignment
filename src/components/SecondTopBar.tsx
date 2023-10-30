const SecondTopBar = () => {
  return (
    <div className="px-4 py-8  md:px-32 flex justify-between w-full">
      <div>
        <img
          src="/brandIcon.svg"
          alt="icon"
          //   width={192}
          //   height={36}
          className="brand-image-height-width"
        />
      </div>
      <div>
        <img
          src="/sideIcon.svg"
          alt="icon"
          className="side-image-height-gwidth"
        />
      </div>
    </div>
  );
};

export default SecondTopBar;
