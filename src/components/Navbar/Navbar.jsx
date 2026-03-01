import tayuLogo from "../../assets/tayu-logo.png";
import currency from "../../assets/Currency.png";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="text-xl"><img className='w-37.5' src={tayuLogo} alt="logo image here" /></a>
            </div>
            <div className="flex gap-2">
                <span>00000000</span>
                <span>Coin</span>
                <img src={currency} alt="currency is here" />
            </div>
        </div>
    );
};

export default Navbar;