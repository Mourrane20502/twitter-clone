import { FollowersOptions, HomePageInfo, SideBarInfo } from "@/data/data";
import Image from "next/image";
import X_Logo from "../assets/logo.avif";
import user from "../assets/user.png";
import SidebarCard from "./_components/SidebarCard";
export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="grid grid-cols-[400px_1.5fr_1fr] max-md:grid-cols-1">
        <aside className="flex sticky top-0 max-md:flex-row max-md:h-auto max-md:bg-black max-md:flex max-md:items-center max-md:justify-center max-md:px-6 max-md:top-[93%] max-md:fixed h-screen items-start mx-auto overflow-hidden flex-col border-r border-gray-100/20 gap-3 px-14 py-2">
          <Image src={X_Logo} width={60} height={60} alt="Twitter Logo" />
          {SideBarInfo.map((sidebar) => (
            <SidebarCard key={sidebar.href} {...sidebar} />
          ))}
        </aside>
        <main className="border-r border-gray-100/20 py-2">
          <div className="grid grid-cols-1 py-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-48 border-b py-3 border-gray-100/20">
              <div className="text-lg font-semibold relative">
                <div className="absolute top-full bg-blue-600 w-14 h-1"></div>
                <span>For You</span>
              </div>
              <div className="text-lg font-semibold">
                {" "}
                <span>Following</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-b  border-gray-100/20 px-3 mt-3">
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src={user}
                  alt="logo"
                  width={50}
                  height={50}
                />
                <input
                  className="py-3 px-1 text-lg border-none focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="What's happening?"
                />
              </div>

              <div className="flex justify-end mb-2">
                <button className="bg-gray-400  text-black px-6 py-3 rounded-full">
                  Post
                </button>
              </div>
            </div>

            {HomePageInfo.map((post) => (
              <div
                key={post.id}
                className="border-b border-gray-100/20 p-3 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={post.user.avatar}
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h2 className="text-xl font-normal">{post.user.name}</h2>
                  <p className="text-gray-400 font-normal">
                    {post.user.username} .
                  </p>
                  <p className="text-gray-400 text-md font-normal">
                    {post.publishedTime}
                  </p>
                </div>
                <h2 className="text-lg font-semibold">{post.description}</h2>
                <div className="px-1">
                  <Image
                    src={post.image}
                    alt="post description "
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
        <div className="flex flex-col max-md:hidden  items-start py-2 sticky top-0 h-screen">
          <div className="w-full px-6 mb-3">
            <input
              className="px-2 w-full border-2 py-2 border-gray-100/20 rounded-3xl"
              placeholder="Search"
            />
          </div>
          <div className="mx-auto border-gray-100/20 border-2 p-4 rounded-lg flex flex-col items-start gap-2.5">
            <h2 className="text-lg font-extrabold">Subscribe to Premium</h2>
            <p className="max-w-sm">
              Subscribe to unlock new features and if eligible, receive a share
              of revenue.
            </p>
            <button className="bg-blue-500  px-6 py-2 hover:bg-blue-600 transition-all duration-200 text-white rounded-3xl">
              Subscribe
            </button>
          </div>
          <div className="mx-auto w-[420px] mt-4 border-gray-100/20 border-2 p-4 rounded-lg flex flex-col items-start gap-2.5">
            <h2 className="text-2xl font-extrabold">Who to follow </h2>
            <div className="flex flex-col items-start gap-6">
              {FollowersOptions.map((option) => (
                <div
                  key={option.name}
                  className="flex items-center justify-center"
                >
                  <div className="flex gap-2 items-center ">
                    <Image
                      src={option.avatar}
                      alt="logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold">{option.name}</h2>
                      <p className="text-gray-500">{option.username}</p>
                    </div>
                    <button className="bg-gray-100 cursor-pointer  text-black px-6 py-2 rounded-3xl">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
