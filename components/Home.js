import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import PropTypes from "prop-types";
import { VscAccount } from "react-icons/vsc";
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import useWindowSize from "../hooks/useWindowSize";

const content = {
  yourPlaylists: [
    {
      title: "#64 Always In Process",
      img: "/images/nkki.jpeg",
      bgColor: "from-red-300",
    },
    {
      title: "Mornings",
      img: "/images/mornings.jpeg",
      bgColor: "from-Emerald-100",
    },
    {
      title: "best hip hop 2013",
      img: "/images/best-hip-hop.jpeg",
      bgColor: "from-indigo-500",
    },
    {
      title: "Ep 59: Gin Gimlets",
      img: "/images/we-might-be-drunk.jpeg",
      bgColor: "from-red-900",
    },
    {
      title: "bachata",
      img: "/images/bachata.jpeg",
      bgColor: "from-orange-700",
    },
    {
      title: "afro",
      img: "/images/afro.jpeg",
      bgColor: "from-violet-700",
    },
    {
      title: "best italian",
      img: "/images/best-italian.jpeg",
      bgColor: "from-pink-500",
    },
    {
      title: "This past weekend",
      img: "/images/this-past-weekend.jpeg",
      bgColor: "from-sky-800",
    },
  ],

  yourShows: [
    {
      title: "The Nikki Glaser Podcast",
      producer: "Big Money Players Network and iHeartPodcasts",
      img: "/images/nkki.jpeg",
    },
    {
      title: "The Courtney Show",
      producer: "106.5 The ARCH | Hubbard Radio",
      img: "/images/courtney.jpeg",
    },
    {
      title: "Sex With Emily",
      producer: "Dr. Emily Morse",
      img: "/images/emily.jpeg",
    },
    {
      title: "Netflix Is A Daily Joke",
      producer: "Netflix",
      img: "/images/netflix.jpeg",
    },
    {
      title: "We Might Be Drunk",
      producer: "Sam Morril and Mark Normand",
      img: "/images/we-might-be-drunk.jpeg",
    },
    {
      title: "This Past Weekend",
      producer: "Theo Von",
      img: "/images/this-past-weekend.jpeg",
    },
  ],

  recentlyPlayed: [],
};

// TODO: transition gradient on hover playlist
const Home = ({
  openAccountDropdown,
  closeAccountDropdown,
  isAccountDropdownOpened,
}) => {
  const size = useWindowSize();

  const [hoveredPlaylist, setHoveredPlaylist] = useState(
    content.yourPlaylists[0] || null
  );

  const ref = useDetectClickOutside({
    onTriggered: closeAccountDropdown,
  });

  const onHoveredPlaylist = (playlist) => {
    setHoveredPlaylist(playlist);
  };

  const onLeaveHoveredPlaylist = () => {
    setHoveredPlaylist(content.yourPlaylists[0]);
  };
  const renderYourPlaylists = () => {
    return content.yourPlaylists.map((p) => {
      return (
        <div
          className="flex items-center h-[80px] bg-white/[.1] hover:bg-white/[.2] transition ease-in-out 
          w-[98%] md:w-[46%] lg:w-[47%] xl:w-[31%] 2xl:w-[23%] cursor-pointer rounded-lg group"
          key={p.title}
          onMouseEnter={() => onHoveredPlaylist(p)}
          onMouseLeave={() => onLeaveHoveredPlaylist(p)}
        >
          <div className="w-[80px]">
            <img src={p.img} className="rounded-l-lg" width="100%" />
          </div>
          <div className="flex items-center p-[20px] text-white font-bold flex-1 ">
            <p className="line-clamp-2">{p.title}</p>
          </div>

          <div
            className=" flex items-center justify-center opacity-0 
                            group-hover:opacity-100 w-[44px] h-[44px] bg-spotify-green-base 
                            rounded-full mr-[10px] transition-all duration-300"
          >
            <IoMdPlay />
          </div>
        </div>
      );
    });
  };

  const renderYourShows = () => {
    return content.yourShows.map((s) => {
      return (
        <div
          className="xs:min-w-[180px] max-w-[300px] md:min-w-[200px] lg:max-w-[320px]
          flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
          border-spotify-black rounded-lg hover:bg-white/[.06] transition-all duration-300"
          key={s.title}
        >
          <div className=" p-4">
            <div className="w-[100%] flex justify-center">
              <img src={s.img} className="rounded-xl " />
            </div>
            <div className="text-white">
              <p className="mt-[14px] mb-[4px]">{s.title}</p>
              <p className="text-white/60 leading-tight text-sm">
                {s.producer}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-spotify-dark h-[100%] overflow-auto">
      {/* container for bg color change on hover of playlist item */}
      <div
        className={`bg-gradient-to-b ${hoveredPlaylist.bgColor} to-spotify-darkest`}
      >
        {/* header and sub header outer container */}
        <div className="py-[20px] px-[20px]">
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

              {/* account btns container */}
              <div className="flex items-center relative">
                <button
                  className="hidden lg:flex mr-[40px] py-[8px]
            px-[35px] border-[1px] border-white 
            rounded-full uppercase text-sm font-medium 
            tracking-wider text-white bg-spotify-light hover:scale-[1.05]"
                >
                  {" "}
                  upgrade
                </button>
                <button
                  className="flex relative items-center text-white 
                  px-[10px] py-[5px] rounded-full hover:bg-opacity-80 
                  lg:bg-spotify-light"
                  onClick={
                    isAccountDropdownOpened
                      ? closeAccountDropdown
                      : openAccountDropdown
                  }
                  ref={ref}
                >
                  <span className="flex justify-center items-center ml-[-6px] mr-[8px] text-3xl lg:text-xl ">
                    <VscAccount />
                  </span>
                  <span className="mr-[5px] text-sm text-center hidden lg:flex">
                    Andrews
                  </span>
                  <span className="text-xs mr-[0px] hidden lg:flex">
                    <AiFillCaretDown />
                  </span>
                </button>
                {/* account dropdown */}
                {isAccountDropdownOpened && (
                  <div className="absolute right-0 top-[42px] bg-spotify-medium-gray z-50 w-[200px] text-white/75 p-[5px] rounded-md">
                    <ul className="text-[0.87em]">
                      <li className="py-[9px] px-[10px] hover:bg-white/[0.2] cursor-default flex items-center hover:text-white">
                        <span className="flex-1">Account</span>
                        <span className="text-[1.2em]">
                          {" "}
                          <FiExternalLink />
                        </span>
                      </li>
                      <li className="py-[9px] px-[10px] hover:bg-white/[0.2] cursor-default hover:text-white">
                        <span>Profile</span>
                      </li>
                      <li className="py-[9px] px-[10px] hover:bg-white/[0.2] cursor-default flex items-center hover:text-white">
                        <span className="flex-1">Upgrade to Premium</span>
                        <span className="text-[1.2em]">
                          {" "}
                          <FiExternalLink />
                        </span>
                      </li>
                      <li className="py-[9px] px-[10px] hover:bg-white/[0.2] cursor-default hover:text-white">
                        <span>Log out</span>
                      </li>
                    </ul>
                  </div>
                )}
                {/* End account dropdown */}
              </div>
              {/* End account btns container */}
            </header>
            {/* sub header*/}
            <div className="">
              <h1 className="mt-[40px] text-white text-3xl font-bold relative">
                <span className="absolute right-[0%]">
                  {JSON.stringify(size, null, 3)}
                </span>
                Good morning:
              </h1>
              {/*playlists container */}
              <div className="flex overflow-hidden h-[180px] flex-col md:flex-row flex-wrap gap-[10px] mt-[20px]">
                {renderYourPlaylists()}
              </div>
              {/* End playlists container */}
            </div>
            {/* End sub header*/}
          </div>
          {/* End header and sub header container */}
        </div>
        {/* End header and sub header outer container */}
      </div>
      {/* End container for bg color change on hover of playlist item */}

      {/* content*/}
      <div className="bg-spotify-dark z-10 overflow-auto p-[20px]">
        {/* inner content */}
        <div>
          <div className="flex mt-[-10px]">
            <h1 className="flex-1 text-white text-2xl">
              <a href="#" className="hover:underline">
                Your shows
              </a>
            </h1>
            <h3 className="text-white/75 text-xs uppercase">
              <a href="#" className="hover:underline">
                See all
              </a>
            </h3>
          </div>

          {/*list */}
          <div className="flex gap-[20px] flex-wrap !overflow-hidden min-h-[350px] max-h-[360px]">
            {renderYourShows()}
          </div>
        </div>
        {/* End inner content */}

        {/* inner content */}
        <div>
          <div className="flex mt-[-10px]">
            <h1 className="flex-1 text-white text-2xl">
              <a href="#" className="hover:underline">
                Recently played
              </a>
            </h1>
            <h3 className="text-white/75 text-xs uppercase">
              <a href="#" className="hover:underline">
                See all
              </a>
            </h3>
          </div>

          {/*list */}
          <div className="flex gap-[20px] flex-wrap !overflow-hidden min-h-[350px] max-h-[360px]">
            {renderYourShows()}
          </div>
        </div>
        {/* End inner content */}
      </div>
      {/* End content*/}
    </div>
  );
};

Home.propTypes = {
  openAccountDropdown: PropTypes.func.isRequired,
  closeAccountDropdown: PropTypes.func.isRequired,
  isAccountDropdownOpened: PropTypes.bool.isRequired,
};

export default Home;
