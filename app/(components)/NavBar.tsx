import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DiCode } from "react-icons/di";

export default function NavBar()
{
    return (
        <div>
            <div className="flex flex-row flex-auto justify-between space-x-10 px-10 py-2 h-20 items-center">
                <span className="flex flex-row flex-initial font-bold h-full items-center">
                    <DiCode className="text-4xl"/>
                    Darcy Shaw
                </span>
                <div className="flex flex-row flex-initial justify-around space-x-10 h-full items-center text-lg">
                    <Link href={"/"} className="px-1 flex h-full justify-center items-center text-white bg-black rounded-md hover:bg-gray-800 hover:rounded-xl hover:text-xl transition-all">Home</Link>
                    <Link href={"/resume"} className="px-1 flex h-full justify-center items-center text-white bg-black rounded-md hover:bg-gray-800 hover:rounded-xl hover:text-xl transition-all">Resume</Link>
                    <Link href={"/projects"} className="px-1 flex h-full justify-center items-center text-white bg-black rounded-md hover:bg-gray-800 hover:rounded-xl hover:text-xl transition-all">Projects</Link>
                </div>
                <div className="flex flex-row flex-initial space-x-1 h-full items-center">
                    <Link href={"https://github.com/darksyyy"} className="text-2xl hover:scale-125 transition-all">
                        <FaGithub />
                    </Link>
                    <Link href={"https://github.com/darksyyy"} className="text-2xl hover:scale-125 transition-all">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <hr className="h-px bg-gray-700 border-0"/>
        </div>
    );
}