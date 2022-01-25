import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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

  yourShows: [],

  recentlyPlayed: [],
};

// Todo: Add bg colors to plylist object
const Home = () => {
  const size = useWindowSize();
  const [hoveredPlaylist, setHoveredPlaylist] = useState(
    content.yourPlaylists[0] || null
  );
  useEffect(() => {
    console.log("********hoveredPlaylist", hoveredPlaylist);
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
          w-[95%] md:w-[45%] lg:w-[47%] xl:w-[31%] 2xl:w-[23%] cursor-pointer rounded-lg"
          key={p.title}
          onMouseEnter={() => onHoveredPlaylist(p)}
          onMouseLeave={() => onLeaveHoveredPlaylist(p)}
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
                Good morning:
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
        </div>
        {/* End header and sub header outer container */}
      </div>
      {/* End container for bg color change on hover of playlist item */}

      {/* content*/}
      <div className="bg-spotify-dark z-10 overflow-auto p-[20px]">
        <div>
          <div className="flex mb-[20px]">
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
          <div className="flex gap-[20px] flex-wrap !overflow-hidden xs:h-[380px] lg:h-[340px] 2xl:h-[360px]">
            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl " />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}
          </div>
          {/*end list */}
        </div>

        <div>
          <div className="flex mb-[20px]">
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
          <div className="flex gap-[20px] flex-wrap !overflow-hidden h-[400px]">
            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}
          </div>
          {/*end list */}
        </div>

        <div>
          <div className="flex mb-[20px]">
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
          <div className="flex gap-[20px] flex-wrap !overflow-hidden h-[400px]">
            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div
              className="xs:w-[47%] lg:w-[31%] xl:w-[23%] 2xl:w-[15%] min-w-[210px] max-w-[338px] 
            flex-1 flex justify-center mb-[100px] bg-spotify-black border-[1px] cursor-pointer
            border-spotify-black rounded-lg"
            >
              <div className=" p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="rounded-xl" />
                </div>
                <div className="text-white">
                  <p className="mt-[14px] mb-[4px]">The Nikki Glaser Podcast</p>
                  <p className="text-white/60 leading-tight text-sm">
                    Big Money Players Network and...
                  </p>
                </div>
              </div>
            </div>
            {/*end list item */}
          </div>
          {/*end list */}
        </div>
      </div>
      {/* End content*/}
    </div>
  );
};

export default Home;
