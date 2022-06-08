import Topper from '../images/zapa-topper.jpg';

const Header = () => {
    return(
        <div>
           <header>
               <a href='#'>
                   <div className="logo">
                        <img src={Topper} alt="logo" width="150" />
                   </div>
               </a>
               <ul>
                   <li>
                       <a href="#">INICIO</a>
                   </li>
                   <li>
                       <a href="#">PRODUCTOS</a>
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