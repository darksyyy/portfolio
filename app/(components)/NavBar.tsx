import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DiCode } from "react-icons/di";

export default function NavBar()
{
    return (
        <div className="sticky top-0 bg-background-900">
            <div className="flex flex-row flex-auto justify-between px-5 py-2 h-15 items-center">
                <span className="flex flex-row flex-initial font-bold h-full items-center group">
                    <DiCode className="text-4xl group-hover:text-primary-300 transition-all"/>
                    <Link href={"/"} className="px-1 flex h-full justify-center items-center rounded-md  group-hover:text-lg group-hover:text-primary-300  transition-all">Darcy Shaw</Link>
                </span>
                <div className="flex flex-row flex-initial justify-between space-x-2 h-full items-center text-lg">
                    <Link href={"/"} className="flex h-full justify-center items-center rounded-md  hover:text-xl hover:text-primary-300  transition-all">Home</Link>
                    <Link href={"/resume"} className="flex h-full justify-center items-center rounded-md  hover:text-xl hover:text-primary-300 transition-all">Resume</Link>
                    <Link href={"/projects"} className="flex h-full justify-center items-center rounded-md  hover:text-xl hover:text-primary-300 transition-all">Projects</Link>
                </div>
                <div className="flex flex-row flex-initial space-x-1 h-full items-center">
                    <Link href={"https://github.com/darksyyy"} className="text-2xl hover:scale-125 hover:text-primary-300 transition-all">
                        <FaGithub />
                    </Link>
                    <Link href={"https://github.com/darksyyy"} className="text-2xl hover:scale-125 hover:text-primary-300 transition-all">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <hr className="h-px text-background-800"/>
        </div>
    );
}s