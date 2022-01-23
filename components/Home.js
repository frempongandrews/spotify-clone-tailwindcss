import { VscAccount } from "react-icons/vsc";
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <header className="flex py-[10px] px-[20px] items-center">
        <div className="flex flex-1">
          <button className="flex items-center justify-center text-white bg-spotify-light w-[35px] h-[35px] rounded-full mr-[20px]">
            <AiOutlineLeft />
          </button>
          <button className="flex items-center justify-center text-white bg-spotify-light/80 w-[35px] h-[35px] rounded-full cursor-not-allowed">
            <AiOutlineRight />
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="mr-[40px] py-[5px]
            px-[40px] border-[2px] border-red-300 
            rounded-full uppercase text-sm text-bold 
            text-white bg-spotify-light"
          >
            upgrade
          </button>
          <button
            className="flex relative items-center 
          bg-spotify-light text-white
            px-[10px] py-[5px] rounded-full"
          >
            <span className="flex justify-center items-center ml-[-6px] mr-[8px] text-xl">
              <VscAccount />
            </span>
            <span className="mr-[5px] text-sm text-center">Andrews</span>
            <span className="text-xs flex mr-[0px]">
              <AiFillCaretDown />
            </span>
          </button>
        </div>
      </header>
      <div>Home</div>
    </div>
  );
};

export default Home;
