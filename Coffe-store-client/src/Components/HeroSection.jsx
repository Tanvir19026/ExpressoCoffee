import heroImg from "../assets/images/more/heroBG.jpeg";
const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})`, transform: "scaleX(-1)" }}
      className="w-full h-[30rem] md:h-[50rem] flex justify-start items-center gap-5 bg-cover bg-center bg-no-repeat"
    >
      <div className="w-2/12"></div>
      <div style={{ transform: "scaleX(-1)"}} className="sm:w-3/6 md:w-3/6 lg:w-2/6">
        <p
          className="title text-white "
          style={{ fontSize: "2.5rem", fontWeight: "400" }}
        >
          Would you like a Cup of Delicious Coffee?
        </p>

        <p
         className="title text-white "
          style={{ fontSize: "1rem", fontWeight: "400" }}>
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! <br /> Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] px-3 py-2 mt-2 title
        hover:bg-amber-100  transition-all duration-300 ease-linear
        " style={{fontSize:'1rem'}}>Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
