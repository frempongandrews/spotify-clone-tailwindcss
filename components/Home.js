import { useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useWindowSize from "../hooks/useWindowSize";

const content = {
  yourPlaylists: [
    {
      title: "#64 Always In Process",
      img: "/images/nkki.jpeg",
    },
    {
      title: "Mornings",
      img: "/images/mornings.jpeg",
    },
    {
      title: "best hip hop 2013",
      img: "/images/best-hip-hop.jpeg",
    },
    {
      title: "Ep 59: Gin Gimlets",
      img: "/images/we-might-be-drunk.jpeg",
    },
    {
      title: "bachata",
      img: "/images/bachata.jpeg",
    },
  ],

  yourShows: [],

  recentlyPlayed: [],
};

const Home = () => {
  const size = useWindowSize();
  const renderYourPlaylists = () => {
    return content.yourPlaylists.map((p) => {
      return (
        <div
          className="flex items-center h-[80px] w-[95%]  bg-white/[.1] hover:bg-white/[.2] transition ease-in-out 
          md:w-[45%] lg:w-[47%] xl:w-[31%] cursor-pointer rounded-lg"
          key={p.title}
        >
          <div className="w-[80px]">
            <img src={p.img} className="rounded-l-lg" width="100%" />
          </div>
          <div className="flex items-center p-[20px] text-white font-bold">
            <p>{p.title}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="py-[20px] px-[20px] bg-spotify-darkest min-h-[100vh]">
      {/* header and sub header container */}
      <div className="">
        <header className="flex items-center">
          <div className="flex flex-1">
            <button className="flex items-center justify-center text-white bg-spotify-light w-[35px] h-[35px] rounded-full mr-[20px]">
              <AiOutlineLeft />
            </button>
            <button className="flex items-center justify-center text-white bg-spotify-light/75 w-[35px] h-[35px] rounded-full cursor-not-allowed">
              <AiOutlineRight />
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="mr-[40px] py-[5px]
            px-[40px] border-[1px] border-white 
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
        <div className="">
          <h1 className="mt-[40px] text-white text-3xl font-bold">
            Good morning: {JSON.stringify(size, null, 3)}
          </h1>
          {/*playlists container */}
          <div className="flex overflow-hidden h-[200px] md:flex-row flex-wrap gap-[20px] mt-[20px]">
            {renderYourPlaylists()}
          </div>
          {/* End playlists container */}
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
