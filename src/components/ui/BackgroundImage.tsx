const BackgroundImage = ({ backgroundImage }: { backgroundImage: string }) => {
    return (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center-z-20"
        style={{ backgroundImage: `${backgroundImage}` }}
      ></div>
    );
  };
  
  export default BackgroundImage;
  