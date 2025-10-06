

import HeroSection from './HeroSection';
import Brand from './Brand';
import CoffeesFrame from './CoffeesFrame';
import CoffeeCollection from './CoffeeCollection';
import { useContext } from 'react';
import { CoffeContext } from '../Context/CoffeeContext';
import { DNA } from 'react-loader-spinner';



const Home = () => {
    const {coffees,loading}=useContext(CoffeContext);
    if(loading)
    {
        <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    }
    return (
        <div>
            <HeroSection></HeroSection>
            <Brand></Brand>
            <CoffeeCollection coffees={coffees}></CoffeeCollection>
           
            {/* <Link to="/updatecoffee/1">UpdateCoffe</Link> */}
           <CoffeesFrame></CoffeesFrame>
     
        </div>
    );
};

export default Home;