import header from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";

function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${header})` }}
      className="w-full py-4 overflow-hidden flex items-center justify-center"
    >
      <img className="w-12" src={logo} />
      <h1 className="text-white text-3xl">Espresso Emporium</h1>
    </div>
  );
}

export default Header;
