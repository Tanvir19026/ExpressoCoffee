
import { Link } from 'react-router-dom';
import errorImg from '../assets/images/404/404.gif'
const Erro = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
         
  <Link to="/" className='title text-center text-black text-decoration-none mt-5'>Back to Home</Link>  
     <img src={errorImg} alt="" />
       
        </div>
    );
};

export default Erro;