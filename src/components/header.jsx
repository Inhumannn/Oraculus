import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Header() {
  return (
    <header className="fixed flex flex-col items-center border-r border-[#BFBFBF] h-[100%] justify-between w-[16%]">
        <a href="index.html"><img src="/logo-oraculus.png" alt="Logo Oraculus" className="w-[185px]"/></a>
        <nav className="h-[135px]">
            <ul className="flex flex-col items-center justify-between h-[100%]">
                <li><a className="active" href="index.html">Horoscope</a></li>
                <li><a href="apropos.html">A propos</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>

        <div className="">
            <button><AiFillCaretLeft /></button>
            <button><AiFillCaretRight /></button>
        </div>
    </header>
  );
}
export default Header