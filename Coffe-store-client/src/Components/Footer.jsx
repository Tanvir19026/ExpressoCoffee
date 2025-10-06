import footerBG from "../assets/images/more/footer_bg.png";
import logo from "../assets/images/more/logo1.png";
import animationFb from './Animation/s5QVRnDN2P.json'
import animationwhatsapp from './Animation/HNJZoq4cDV.json'
import animationinsta from './Animation/9Dq6k6o0j1.json'

import icon2 from './Animation/wired-outline-2625-logo-circle-messenger-hover-pinch.json'
import icon3 from './Animation/wired-outline-2720-logo-viber-hover-pinch.json'
import icon4 from './Animation/wired-outline-18-location-pin-hover-jump.json'

import Lottie from "lottie-react";
const Footer = () => {
  return (
      <>
    <div
      style={{ backgroundImage: `url(${footerBG})` }}
      className="w-full h-6 md:h-[35.5rem] 
          bg-cover bg-center bg-no-repeat"
    >
      <div className="grid grid-cols-12 container  ">
        <div
          className="col-span-12 md:col-span-6 flex flex-column justify-center items-center md:justify-start md:items-start"
          style={{ marginTop: "5rem" }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 md:w-[4.6rem] md:h-[4.6rem] object-contain "
            style={{ marginBottom: "1rem" }}
          />
          <p className="title">Expresso Emperium</p>
          <p className="text-xl " style={{fontFamily:"'Rancho', cursive",marginTop:'1rem',marginBottom:'1rem'}}>
            Always ready to be your friend. Come & Contact with us to share your <br />
            memorable moments, to share with your best companion.
          </p>
            <div className="flex gap-5" style={{marginTop:'1rem',marginBottom:'1rem'}}>
                <Lottie animationData={animationFb} loop={true} className="w-[3rem] h-[3rem]"/>
            <Lottie animationData={animationwhatsapp} loop={true} className="w-[3rem] h-[3rem]"/>
            <Lottie animationData={animationinsta} loop={true} className="w-[3rem] h-[3rem]"/>
            </div>
            <p className="title">Get in Touch</p>
            <div className="flex gap-3">
            <div className=" flex-col">
                <Lottie animationData={icon2} loop={true} className="w-[1.5rem] h-[1.5rem] "/>
                <Lottie animationData={icon4} loop={true} className="w-[1.5rem] h-[1.5rem] "/>
                <Lottie animationData={icon3} loop={true} className="w-[1.5rem] h-[1.5rem] "/>
                
            </div>
            <div className=" flex-col mb-4">
                <p className="m-0 p-0">+8801600180756</p>
                <p  className="m-0 p-0">tanvirrafi1999@gmail.com</p>
                <p  className="m-0 p-0">Mymensingh,Muktagacha</p>
            </div>
            </div>
        </div>
        <div className="col-span-12 md:col-span-6 gap-4 flex flex-col justify-center items-center container" >
        <p className="title">Contact With Us</p>
        <form>
            <input type="text" placeholder="Name" className="sm:w-100 md:w-[16rem] lg:w-[30rem] xl:w-[40rem]" style={{padding:'0.5rem',margin:'.5rem',backgroundColor:'white',filter:'brightness(90%)'}} />
            <br />
            <input type="text" placeholder="Email" className="sm:w-100 md:w-[16rem] lg:w-[30rem] xl:w-[40rem]" style={{padding:'0.5rem',margin:'.5rem',backgroundColor:'white',filter:'brightness(90%)'}} />
            <br />
            <textarea name="Messeges"  placeholder="Messesges" className="sm:w-100 md:w-[16rem] lg:h-[5rem] lg:w-[30rem] xl:w-[40rem]" style={{padding:'0.5rem',margin:'.5rem',backgroundColor:'white',filter:'brightness(90%)'}} ></textarea>
            <br />
            <div className="flex flex-column justify-center items-center md:justify-start md:items-start">
                <input type="button" value="Send Messeges" 
            className="title hover:bg-black text-center    
            transition-all duration-500 ease-linear hover:text-white"
             style={{padding:'.5rem 1.8rem',margin:'.5rem',
             borderRadius:'1.5rem',border:'1px solid black',fontSize:'18px'}} />
            </div>
        </form>
        </div>
      </div>
     
    </div>
     <div>
        <p className="title text-center bg-black text-white text-base d-none d-md-none d-lg-block" style={{fontSize:'1rem',padding:'1rem'}}>Copyright &copy; 2025 Expresso Emperium</p>
      </div>
</>
  );
};

export default Footer;
