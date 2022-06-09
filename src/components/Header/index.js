import Topper from '../images/zapa-topper.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
           <header>
               <Link to="/">
                   <div className="logo">
                        <img src={Topper} alt="logo" width="150" />
                   </div>
               </Link>
               <ul>
                   <li>
                       <Link to="/">INICIO</Link>
                   </li>
                   <li>
                       <Link to="/productos">PRODUCTOS</Link>
                   </li>
               </ul>
               <div className="cart">
                   <box-icon name="cart"></box-icon>
                   <span className="item__total">0</span>
               </div>
           </header>
        </div>
    )
}

export default Header;