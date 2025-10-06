

import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const Brand = () => {
    return (
        <div className="bg-[#ECEAE3] w-full h-full  pb-5 lg:h-[18rem] pt-5 ">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
                    <div>
                        <img src={icon1} alt="" className='w-20 h-20'/>
                        <p className='title mt-3'>Awsome Aroma</p>
                        <p className='text-[1.1rem] font-medium font-[Raleway]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                         <div>
                       <img src={icon2} alt="" className='w-18 h-18'/>
                        <p className='title mt-3'>High Quality</p>
                        <p className='text-[1.1rem] font-medium font-[Raleway]'>
                           We served the coffee to you maintaining the best quality</p>
                    </div>

                         <div>
                       <img src={icon1} alt="" className='w-18 h-18'/>
                        <p className='title mt-3'>Pure Grade</p>
                        <p className='text-[1.1rem] font-medium font-[Raleway]'>
                            The coffee is made of the green coffee beans which you will love</p>
                    </div>
                         <div>
                         <img src={icon4} alt="" className='w-18 h-18'/>
                        <p className='title mt-3'>Proper Roasting</p>
                        <p className='text-[1.1rem] font-medium font-[Raleway]'>
                            Your coffee is brewed by first roasting  the green coffee beans</p>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Brand;