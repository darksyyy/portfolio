export default function ResumePage()
{
  return (
    <div className="grid grid-cols-4">
      <div className="col-start-2 col-span-2 space-y-2 mt-2 bg-background-800 px-5 py-5 rounded-t-xl">
        <div className="px-5 grid grid-cols-2">
          <div id="header" className="col-start-1 w-3/4 flex flex-col items-start">
              <span>3157 Hamlet Drive</span>
              <span>Tobyhanna, PA</span>
              <span>570-604-5093</span>
              <span>shaw.darcy.m@gmail.com</span>
          </div>
          <div className="flex justify-end col-start-2 items-center">
            <button className="text-2xl bg-primary-400 rounded-lg w-32 h-10 hover:scale-110 hover:bg-secondary-400 transition-all">Contact Me</button>
          </div>
        </div>
        <hr className="h-px text-background-800"/>
        <div className="justify-around space-y-2 bg-background-700 rounded-xl px-5 py-5">
          <span className="font-bold text-lg">Work Experience</span>
          <div className="flex flex-col justify-around space-y-2">
            <span className="">Software Engineer Co-op MDCAD</span>
            <span className="text-sm px-2">Susquehanna Intl. Group, Bala Cnywyd, PA</span>
            <ul className="list-disc px-5 text-sm space-y-2">
              <li>Developed user-friendly applications for Windows using C# and Microsoft WPF, making it easier for traders to access essential tools.</li>
              <li>Created a system using C++ that provided important market data to traders, helping them make informed decisions.</li>
              <li>Designed a website with visual graphics to present data in an easy-to-understand way, improving accessibility for users.</li>
              <li>Worked in a team to ensure timely completion of projects, collaborating with seven colleagues to meet deadlines.</li>
              <li>Engaged with users and different teams to understand what features they needed, ensuring the software met their requirements.</li>
              <li>Provided visual representations of early software ideas to help gather feedback and refine prototypes</li>
            </ul>
          </div>
          <hr className="h-px text-background-800"/>
          <div className="flex flex-col justify-around space-y-2">
            <span className="">Software Engineer Co-op MDX</span>
            <span className="text-sm px-2">Susquehanna Intl. Group, Bala Cnywyd, PA</span>     
            <ul className="list-disc px-5 text-sm space-y-2">
              <li>Developed Python scripts to generate comprehensive metrics by extracting Linux host statistics and data from internal databases.</li>  
              <li>Engineered a Python program that efficiently published error data, stored in a Postgres database, to the Operations team's Jira Service Desk for expedited resolution processes.</li>
              <li>Automated intricate tasks requiring substantial manual data inputs by creating user-friendly command-line tools utilizing Python and Bash scripting languages.</li>
              <li>Configured Kubernetes and Helm settings to facilitate seamless deployment of software across the internal Kubernetes infrastructure, ensuring optimal performance.</li>
              <li>Devised alert configurations for a Prometheus-based monitoring system, enhancing the system's responsiveness to potential issues and improving overall system reliability.</li>
              <li>Designed intuitive and visually engaging dashboards using Grafana for effective data visualization, aiding in the decision-making process.</li>
            </ul>       
          </div>
        </div>
      </div>
    </div>
  );
}