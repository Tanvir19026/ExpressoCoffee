
import cup1 from '../assets/images/cups/Rectangle 10.png';
import cup2 from '../assets/images/cups/Rectangle 11.png';
import cup3 from '../assets/images/cups/Rectangle 12.png';
import cup4 from '../assets/images/cups/Rectangle 13.png';
import cup5 from '../assets/images/cups/Rectangle 14.png';
import cup6 from '../assets/images/cups/Rectangle 15.png';
import cup7 from '../assets/images/cups/Rectangle 16.png';
import cup8 from '../assets/images/cups/Rectangle 9.png';

const CoffeesFrame = () => {
    return (
        <div className="bg-white container pt-4 pb-5">
            <div>
                <p className="text-xl font-[Raleway] text-center">Follow Us Now</p>
                <p className="title text-center">Follow on Instagram</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <div>
                        <img src={cup8} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                     <div>
                        <img src={cup1} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                     <div>
                        <img src={cup2} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                     <div>
                        <img src={cup3} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                      <div>
                        <img src={cup4} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                      <div>
                        <img src={cup5} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                      <div>
                        <img src={cup6} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                       <div>
                        <img src={cup7} alt="cup8" className='w-[19.5rem] h-[22rem] rounded-2' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeesFrame;