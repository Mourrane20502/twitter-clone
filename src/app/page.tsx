"use client";
import { FollowersOptions, HomePageInfo, SideBarInfo } from "@/data/data";
import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";
import Link from "next/link";
import X_Logo from "../assets/logo.avif";
import user from "../assets/user.png";
import SidebarCard from "./_components/SidebarCard";

export default function HomePage() {
  const { isScrolling } = useScroll();
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="grid grid-cols-[280px_1.5fr_1fr]  max-md:grid-cols-1">
        <aside className="sticky top-0 h-screen border-r border-gray-800 p-4 flex-col gap-4 max-md:flex-row max-md:h-auto max-md:fixed max-md:top-10 max-md:w-full max-md:justify-evenly bg-black z-50 hidden md:flex px-6">
          <div className="flex items-center justify-center md:justify-start md:mb-6">
            <Link href="/">
              <Image src={X_Logo} width={40} height={40} alt="X Logo" />
            </Link>
          </div>
          <nav className="flex flex-col gap-2 w-full">
            {SideBarInfo.map((sidebar) => (
              <SidebarCard key={sidebar.href} {...sidebar} />
            ))}
          </nav>
        </aside>

        <main className="border-r border-gray-800 max-md:border-none">
          <div className="flex justify-around border-b border-gray-800 py-3 sticky top-0 bg-black z-40">
            <div className="text-lg font-semibold relative text-white">
              <span className="pb-2 border-b-4 border-blue-500">For You</span>
            </div>
            <div className="text-lg font-semibold text-gray-400 hover:text-white transition">
              Following
            </div>
          </div>

          <div className="p-4 border-b border-gray-800">
            <div className="flex items-start gap-3">
              <Image
                src={user}
                alt="User"
                className="rounded-full"
                width={48}
                height={48}
              />
              <div className="flex flex-col flex-1">
                <input
                  className="bg-transparent text-lg placeholder-gray-500 focus:outline-none w-full"
                  placeholder="What’s happening?"
                />
                <div className="flex justify-end mt-3">
                  <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-full font-semibold">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {HomePageInfo.map((post) => (
            <div key={post.id} className="p-4 border-b border-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={post.user.avatar}
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">{post.user.name}</h2>
                    <span className="text-gray-500">
                      @{post.user.username} · {post.publishedTime}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white text-md mb-2">{post.description}</p>
              {post.image && (
                <Image
                  src={post.image}
                  alt="Post"
                  className="rounded-2xl w-full max-h-[500px] object-cover"
                />
              )}
            </div>
          ))}
        </main>

        <aside
          className={`py-4 px-6 hidden lg:flex flex-col gap-4 sticky top-0 h-screen bg-black ${
            isScrolling ? "overflow-y-auto" : "overflow-hidden"
          } `}
        >
          <input
            className="bg-[#16181C] text-white placeholder-gray-500 px-4 py-2 rounded-full focus:outline-none"
            placeholder="Search"
          />

          <div className="bg-[#16181C] p-4 rounded-xl flex flex-col gap-2">
            <h2 className="text-lg font-bold">Subscribe to Premium</h2>
            <p className="text-sm text-gray-400">
              Unlock new features and get a share of ads revenue.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>

          <div className="bg-[#16181C] p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Who to follow</h2>
            {FollowersOptions.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={option.avatar}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{option.name}</span>
                    <span className="text-sm text-gray-500">
                      {option.username}
                    </span>
                  </div>
                </div>
                <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full">
                  Follow
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#16181C] p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4">What s happening</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="text-sm text-gray-500">Trending in Morocco</div>
                <div className="font-semibold">#TechNews</div>
                <div className="text-sm text-gray-500">12.3K posts</div>
              </li>
              <li>
                <div className="text-sm text-gray-500">Trending in Sports</div>
                <div className="font-semibold">#ChampionsLeague</div>
                <div className="text-sm text-gray-500">89.1K posts</div>
              </li>
              <li>
                <div className="text-sm text-gray-500">Trending</div>
                <div className="font-semibold">#ReactJS</div>
                <div className="text-sm text-gray-500">7,200 posts</div>
              </li>
            </ul>
          </div>

          <div className="bg-[#16181C] p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Topics to follow</h2>
            <div className="flex flex-col gap-3">
              {["Web Development", "AI & ML", "Design", "Crypto"].map(
                (topic) => (
                  <button
                    key={topic}
                    className="bg-[#1D1F23] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#2a2d32] transition"
                  >
                    {topic}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="text-sm text-gray-500 mt-auto">
            <div className="flex flex-wrap gap-2">
              <span className="hover:underline cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:underline cursor-pointer">
                Cookie Policy
              </span>
              <span className="hover:underline cursor-pointer">
                Accessibility
              </span>
              <span className="hover:underline cursor-pointer">Ads Info</span>
            </div>
            <div className="mt-2">&copy; 2025 X Corp</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
