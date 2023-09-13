
import { ReactNode } from "react"
import { SidebarNavLink } from "../components";

// icon
import { AiFillHome } from "react-icons/ai"
import { PiBrowsersThin } from "react-icons/pi"
import { CiSearch } from "react-icons/ci"
import { BsCameraVideo, BsCloudDownload, BsFileEarmarkMusic, BsFillHeartFill, BsMusicNote } from "react-icons/bs"
import { HiOutlineMicrophone } from "react-icons/hi"


interface Props {
    children: ReactNode;
}

function BaseLayout({ children }: Props) {
    return (
        <div className="w-full h-full grid grid-cols-[3fr_10fr] overflow-hidden">

            {/* sidebar */}
            <div className="bg-zinc-950 grid grid-cols-1 grid-rows-[4rem_1fr] overflow-hidden">

                <div className="border-b border-b-white/10">

                </div>

                <div className="overflow-y-auto p-2 flex flex-col gap-y-0.5">
                    <SidebarNavLink
                        href="/"
                        icon={<AiFillHome className="w-6 h-6 fill-inherit" />}
                        text="Home"
                    />

                    <SidebarNavLink
                        href="/browse"
                        icon={<PiBrowsersThin className="w-6 h-6 fill-inherit" />}
                        text="Browse"
                    />

                    <SidebarNavLink
                        href="/search"
                        icon={<CiSearch className="w-6 h-6 fill-inherit" />}
                        text="Search"
                    />


                    <p className="text-sm text-white/50 font-normal mt-4 mb-2">My Musics</p>

                    <SidebarNavLink
                        href="/songs"
                        icon={<BsMusicNote className="w-5 h-5 fill-inherit" />}
                        text="Songs"
                    />

                    <SidebarNavLink
                        href="/liked-songs"
                        icon={<BsFillHeartFill className="w-5 h-5 fill-inherit" />}
                        text="Liked Songs"
                    />

                    <SidebarNavLink
                        href="/videos"
                        icon={<BsCameraVideo className="w-5 h-5 fill-inherit" />}
                        text="Videos"
                    />

                    <SidebarNavLink
                        href="/artists"
                        icon={<HiOutlineMicrophone className="w-5 h-5 fill-inherit" />}
                        text="Artists"
                    />

                    <SidebarNavLink
                        href="/albums"
                        icon={<BsFileEarmarkMusic className="w-5 h-5 fill-inherit" />}
                        text="Albums"
                    />

                    <SidebarNavLink
                        href="/download-app"
                        icon={<BsCloudDownload className="w-5 h-5 fill-inherit" />}
                        text="Download App"
                    />
                </div>

            </div>

            {/* main section */}
            <div className="overflow-y-auto">
                {children}
            </div>

        </div>
    )
}

export default BaseLayout