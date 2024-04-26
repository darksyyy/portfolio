import Image from "next/image";
import HighlightedTechnologies from "@/app/(components)/HighlighedTechnologies";


export default function HomePage()
{
  const firstName = "Darcy"
  const welcomeMessage = `I am a software engineer dedicated to delivering excellence and innovation. Here, you'll find a meticulously curated showcase of my finest work and technical accomplishments. With a relentless commitment to pushing boundaries and solving complex problems, I invite you to explore my portfolio—a testament to my passion for mastering the craft of software engineering.`;
  
  return (
    <div className="">
      <div className="spacer wave-solid rotate-180 "></div>
      <div className="flex place-items-center bg-background-500 py-4">
          <div className="flex flex-col flex-initial items-center justify-around space-y-5">
            <p className="font-bold text-4xl text-center">
              Hello👋 I'm {firstName}
            </p> 
            <hr className="h-px text-background-800 w-64"/>
            <div className="flex flex-col items-center w-1/2 space-y-2">
              <p className="font-bold text-xl text-center h-full">
                About me
              </p>      
              <p className="text-center text-lg rounded-xl px-4 py-4">
                {welcomeMessage}
              </p>
            </div>
            <HighlightedTechnologies/>
          </div>
      </div>
      <div className="spacer wave"></div>
    </div>
  );
}