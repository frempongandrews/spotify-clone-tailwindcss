import { useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const size = useWindowSize();
  return (
    <div className="py-[10px] px-[20px]">
      {/* header and sub header container */}
      <div className="bg-red-300">
        <header className="flex items-center">
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
              {" "}
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
        {/* sub header*/}
        <div>
          <h1>Good morning: {JSON.stringify(size, null, 3)}</h1>
          <div className="flex overflow-hidden h-[200px] flec-col md:flex-row flex-wrap">
            {/* playlist item */}
            <div
              className="flex items-center h-[80px] bg-yellow-300 w-[100%] 
            md:w-[43%] md:mr-[20px] lg:w-[47%] xl:w-[31%] mb-[20px]"
            >
              <div>image</div>
              <div className="flex items-center">details</div>
            </div>
            {/* End playlist item */}

            {/* playlist item */}
            <div
              className="flex items-center h-[80px] bg-yellow-300 w-[100%] 
            md:w-[43%] md:mr-[20px] lg:w-[47%] xl:w-[31%] mb-[20px]"
            >
              <div>image</div>
              <div className="flex items-center">details</div>
            </div>
            {/* End playlist item */}

            {/* playlist item */}
            <div
              className="flex items-center h-[80px] bg-yellow-300 w-[100%] 
            md:w-[43%] md:mr-[20px] lg:w-[47%] xl:w-[31%] mb-[20px]"
            >
              <div>image</div>
              <div className="flex items-center">details</div>
            </div>
            {/* End playlist item */}

            {/* playlist item */}
            <div
              className="flex items-center h-[80px] bg-yellow-300 w-[100%] 
            md:w-[43%] md:mr-[20px] lg:w-[47%] xl:w-[31%] mb-[20px]"
            >
              <div>image</div>
              <div className="flex items-center">details</div>
            </div>
            {/* End playlist item */}
          </div>
        </div>
        {/* End sub header*/}
      </div>
      {/* End header and sub header container */}

      {/* content*/}
      <div>
        <h1>Content</h1>
      </div>
      {/* End content*/}
    </div>
  );
};

export default Home;
