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
    <div className="bg-spotify-dark h-[100%] overflow-scroll">
      {/* container for bg color change on hover of playlist item */}
      <div className={`bg-gradient-to-b ${hoveredPlaylist.bgColor} to-black`}>
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
        </div>
        {/* End header and sub header outer container */}
      </div>
      {/* End container for bg color change on hover of playlist item */}

      {/* content*/}
      <div className="bg-spotify-dark z-10 overflow-scroll border-2 border-white">
        <div>
          <h1>Your shows</h1>
          {/*list */}
          <div className="flex gap-[20px] flex-wrap !overflow-hidden h-[400px] border-2 border-green-500">
            {/*list item */}
            <div className="xs:w-[47%] lg:w-[31%] xl:w-[23%] min-w-[230px] max-w-[338px] flex-1 border-2 border-red-500 flex justify-center mb-[100px]">
              <div className="border-2 border-green-200 p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="" />
                </div>
                <div className="text-white">
                  <p>The Nikki Glaser Podcast</p>
                  <p>Big Money Players Network and...</p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div className="xs:w-[47%] lg:w-[31%] xl:w-[23%] min-w-[230px] max-w-[338px] flex-1 border-2 border-red-500 flex justify-center mb-[100px]">
              <div className="border-2 border-green-200 p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="" />
                </div>
                <div className="text-white">
                  <p>The Nikki Glaser Podcast</p>
                  <p>Big Money Players Network and...</p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div className="xs:w-[47%] lg:w-[31%] xl:w-[23%] min-w-[230px] max-w-[338px] flex-1 border-2 border-red-500 flex justify-center mb-[100px]">
              <div className="border-2 border-green-200 p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="" />
                </div>
                <div className="text-white">
                  <p>The Nikki Glaser Podcast</p>
                  <p>Big Money Players Network and...</p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div className="xs:w-[47%] lg:w-[31%] xl:w-[23%] min-w-[230px] max-w-[338px] flex-1 border-2 border-red-500 flex justify-center mb-[100px]">
              <div className="border-2 border-green-200 p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="" />
                </div>
                <div className="text-white">
                  <p>The Nikki Glaser Podcast</p>
                  <p>Big Money Players Network and...</p>
                </div>
              </div>
            </div>
            {/*end list item */}

            {/*list item */}
            <div className="xs:w-[47%] lg:w-[31%] xl:w-[23%] min-w-[230px] max-w-[338px] flex-1 border-2 border-red-500 flex justify-center mb-[100px]">
              <div className="border-2 border-green-200 p-4">
                <div className="w-[100%] flex justify-center">
                  <img src="/images/nkki.jpeg" className="" />
                </div>
                <div className="text-white">
                  <p>The Nikki Glaser Podcast</p>
                  <p>Big Money Players Network and...</p>
                </div>
              </div>
            </div>
            {/*end list item */}
          </div>
          {/*end list */}
        </div>
        <h1>Content</h1>
        <p className="text-white">
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat." 1914 translation by H. Rackham "On the other hand, we
          denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire, that they cannot foresee the pain and trouble that
          are bound to ensue; and equal blame belongs to those who fail in their
          duty through weakness of will, which is the same as saying through
          shrinking from toil and pain. These cases are perfectly simple and
          easy to distinguish. In a free hour, when our power of choice is
          untrammelled and when nothing prevents our being able to do what we
          like best, every pleasure is to be welcomed and every pain avoided.
          But in certain circumstances and owing to the claims of duty or the
          obligations of business it will frequently occur that pleasures have
          to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
        </p>
      </div>
      {/* End content*/}
    </div>
  );
};

export default Home;
