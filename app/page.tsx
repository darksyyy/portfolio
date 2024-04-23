import Image from "next/image";


export default function HomePage()
{
  const firstName = "Darcy"
  const welcomeMessage = `I am a seasoned software engineer dedicated to delivering excellence and innovation. Here, you'll find a meticulously curated showcase of my finest work and technical accomplishments. With a relentless commitment to pushing boundaries and solving complex problems, I invite you to explore my portfolio—a testament to my passion for mastering the craft of software engineering.`;
  
  return (
  <div>
    <div id="WelcomeHero" className="flex flex-col flex-auto mx-10 my-24 justify-center">
      <div className="flex flex-col flex-initial items-center justify-between">
        <p className="font-bold text-4xl text-center scale">
          Hello👋 I'm {firstName},
        </p> 
        <Image 
          src="/Images/Granny-chair.png"
          width={400}
          height={400}
          alt="Picture of the Grandmother from Celeste sitting in her chair."
          className="rounded-full outline-secondary outline scale-75"
        />       
        <p className="text-center">
          {welcomeMessage}
        </p>
      </div>
    </div>
  </div>
  );
}