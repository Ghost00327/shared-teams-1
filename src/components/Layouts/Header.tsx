import logo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout-svg.svg";
import helpIcon from "../../assets/help-icon.svg";

const Header = () => {
  return (
    <div className="h-[97px] border-b-2 border-gray-300 shadow-md flex items-center justify-around">
      <img src={logo} alt="logo" className="h-[50px]" />
      <div className="flex items-center flex-row gap-[15px]">
        <button className="bg-[#26A9E0] rounded-lg text-[24px] text-white py-[11px] px-[34.5px]">
          Team Social Chat
        </button>
        <button className="bg-[#26A9E0] rounded-lg text-[24px] text-white py-[11px] px-[34.5px]">
          Create a New Project
        </button>
        <input type="text" placeholder="Member Search" className=" rounded-lg text-[24px] text-white py-[11px] px-[34.5px] border border-gray-300"/>
      </div>
      <div></div>
      <div className="flex items-center flex-row gap-[15px]">
        <img 
          src={helpIcon} 
          alt="help" 
          className="h-[38px] cursor-pointer hover:opacity-80 transition-opacity"
        />
        <div className="h-[60px] w-[1px] bg-[#DBDBDB]"></div>
        <img 
          src={logoutIcon} 
          alt="logout" 
          className="h-[60px] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            console.log("Logout clicked");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
