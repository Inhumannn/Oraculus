import { Link } from "react-router-dom";
import Arrow from "./arrow";

function Header() {
  return (
    <header className="fixed flex flex-col items-center border-r border-[#BFBFBF] h-[100%] justify-between w-[16%]">
        <a href="index.html"><img src="/logo-oraculus.png" alt="Logo Oraculus" className="w-[100%]"/></a>
        <nav className="h-[135px]">
            <ul className="flex flex-col items-center justify-between h-[100%]">
                <li><Link to="/" className="text-[16px] text-[#909090]">Horoscope</Link></li>
                <li><Link to="/apropos" className="text-[16px] text-[#909090]">A propos</Link></li>
                <li><Link to="/contact" className="text-[16px] text-[#909090]">Contact</Link></li>
            </ul>
        </nav>
        <Arrow />
    </header>
  );
}
export default Header