const ProgramImage = ({ ImageUrl }: { ImageUrl: string }) => {
    return (
      <div
        className="relative h-full w-full bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${ImageUrl})` }}
      ></div>
    );
  };
  
  export default ProgramImage;
  