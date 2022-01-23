import { useState } from "react";
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillHeart,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import Home from "../components/Home";
const SpotifyIcon = () => {
  return (
    <svg className="spotify-logo--text h-[40px]" viewBox="0 0 1134 340">
      <path
        fill="currentColor"
        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
      ></path>
    </svg>
  );
};

const sidebarNav = {
  topNav: [
    {
      name: "Home",
    },
    {
      name: "Search",
    },
    {
      name: "Your Library",
    },
  ],
  midNav: [
    {
      name: "Create Playlist",
    },
    {
      name: "Liked Songs",
    },
    {
      name: "Your Episodes",
    },
  ],
  playlists: [
    {
      id: "1",
      title: "mornings",
    },
    {
      id: "2",
      title: "great stuff",
    },
    {
      id: "3",
      title: "sex fun talk",
    },
    {
      id: "4",
      title: "kizomba slow",
    },
    {
      id: "5",
      title: "best t.i",
    },
    {
      id: "6",
      title: "afro hard",
    },
    {
      id: "7",
      title: "bachata",
    },
    {
      id: "8",
      title: "workout",
    },
    {
      id: "9",
      title: "best bachata 2021",
    },
    {
      id: "10",
      title: "best hiphop 2013",
    },
    {
      id: "11",
      title: "You up - Nikki Glaser",
    },
    {
      id: "12",
      title: "Best italian",
    },
    {
      id: "13",
      title: "various",
    },
    {
      id: "14",
      title: "afro",
    },
    {
      id: "15",
      title: "African Heat",
    },
    {
      id: "16",
      title: "Funny stuff",
    },
    {
      id: "17",
      title: "bachata",
    },
    {
      id: "18",
      title: "Starred",
    },
    {
      id: "19",
      title: "Best Linkin",
    },
    {
      id: "20",
      title: "best Dj Khaled",
    },
  ],
};

export default function HomePage() {
  const [selectedSidebarNavItem, setSelectedSidebarNavItem] = useState("Home");
  const [selectedSidebarPlaylist, setSelectedSidebarPlaylist] = useState("");

  const renderTopSidebarNav = () => {
    return sidebarNav.topNav.map((navItem) => {
      let icon;
      switch (navItem.name) {
        case "Home":
          icon =
            selectedSidebarNavItem === "Home" ? (
              <AiFillHome />
            ) : (
              <AiOutlineHome />
            );
          break;

        case "Search":
          icon = <AiOutlineSearch />;
          break;

        case "Your Library":
          icon = <BiLibrary />;
          break;

        default:
          console.log("default");
      }

      return (
        <li
          key={navItem.name}
          className={`flex items-center mb-4 cursor-pointer hover:text-white ${
            selectedSidebarNavItem === navItem.name
              ? "text-white font-bold"
              : "text-white/75"
          }`}
          onClick={() => selectSidebarNavMenuItem(navItem)}
        >
          {/* <span className="mr-4 text-lg">
                  <AiFillHome />{" "}
                </span> */}
          <span className="mr-4 text-[25px]">{icon}</span>
          <span className="text-sm">{navItem.name}</span>
        </li>
      );
    });
  };

  const renderMidSidebarNav = () => {
    const renderMidSidebarNavIcon = (title) => {
      let icon;
      switch (title) {
        case "Create Playlist":
          icon = <AiOutlinePlus />;
          break;

        case "Liked Songs":
          icon = <AiFillHeart />;
          break;

        case "Your Episodes":
          icon = <MdHomeFilled />;
          break;

        default:
          icon = <MdHomeFilled />;
      }

      if (title === "Create Playlist") {
        return (
          <span className="flex items-center justify-center border-1 bg-gray-300 text-black text-sm w-[25px] h-[25px]">
            {icon}
          </span>
        );
      }

      if (title === "Liked Songs") {
        return (
          <span className="flex items-center justify-center border-1 bg-blue-400 text-white text-xs w-[25px] h-[25px]">
            {icon}
          </span>
        );
      }
      return (
        <span className="flex items-center justify-center border-1 bg-green-700 text-gray-300 text-sm w-[25px] h-[25px]">
          {icon}
        </span>
      );
    };

    return sidebarNav.midNav.map((navItem) => {
      let icon;
      switch (navItem.name) {
        case "Create Playlist":
          icon = renderMidSidebarNavIcon("Create Playlist");
          break;

        case "Liked Songs":
          icon = renderMidSidebarNavIcon("Liked Songs");
          break;

        case "Your Episodes":
          icon = renderMidSidebarNavIcon("Your Episodes");
          break;

        default:
          console.log("default");
      }

      return (
        <li
          key={navItem.name}
          className={`flex items-center mb-4 cursor-pointer hover:opacity-100 font-bold ${
            selectedSidebarNavItem === navItem.name
              ? "text-white"
              : "opacity-75"
          }`}
          onClick={() => selectSidebarNavMenuItem(navItem)}
        >
          {/* <span className="mr-4 text-lg">
                  <AiFillHome />{" "}
                </span> */}
          <span className="mr-4">{icon}</span>
          <span className="text-sm">{navItem.name}</span>
        </li>
      );
    });
  };

  const renderSidebarNavPlaylists = () => {
    return sidebarNav.playlists.map((p) => {
      return (
        <li
          className={`py-[5px] hover:text-white cursor-default px-8 ${
            selectedSidebarPlaylist === p.title ? "text-white" : "text-white/75"
          }`}
          key={p.id}
          onClick={() => onSelectSidebarPlaylist(p)}
        >
          {p.title}
        </li>
      );
    });
  };

  const selectSidebarNavMenuItem = (navItem) => {
    setSelectedSidebarNavItem(navItem.name);
  };

  const onSelectSidebarPlaylist = (playlistItem) => {
    setSelectedSidebarNavItem("");
    setSelectedSidebarPlaylist(playlistItem.title);
  };

  return (
    <div className="flex flex-col flex-1">
      {/*inner container: sidebar + content */}
      <div className="flex h-[calc(100vh-100px)]">
        <aside className="bg-black w-[232px] flex-none text-white pt-6 pb-3">
          <nav className="h-[300px]">
            <div className="px-8">
              <SpotifyIcon />
            </div>

            <ul className="mt-[40px] mb-[40px] px-8">
              {renderTopSidebarNav()}
            </ul>

            <ul className="px-8">{renderMidSidebarNav()}</ul>
          </nav>

          <ul className="border-t-[1px] border-gray-700 mt-[60px] pt-[15px] text-white/75 text-sm overflow-y-scroll max-h-[calc(100vh-545px)]">
            {renderSidebarNavPlaylists()}
          </ul>
          <button className="flex items-center mt-[25px] cursor-pointer text-white/75 hover:text-white px-8">
            <span className="w-[20px] h-[20px] flex items-center justify-center mr-4 rounded-full border-[1px] border-gray-300 ">
              <AiOutlineArrowDown />
            </span>
            <p className="text-sm">Install App</p>
          </button>
        </aside>

        <section className="bg-green-300 flex-1">
          <Home />
        </section>
      </div>
      {/* End inner container: sidebar + content */}
      {/* Player */}
      <div className="relative h-[100px] bg-spotify-dark text-white">
        player
      </div>
      {/*End Player */}
    </div>
  );
}