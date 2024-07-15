const BackgroundImage = ({ backgroundImage }: { backgroundImage: string }) => {
    return (
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat -z-20"
        style={{ backgroundImage: `${backgroundImage}` }}
      ></div>
    );
  };
  
  export default BackgroundImage;
  