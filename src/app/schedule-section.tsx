import Image from "next/image"

const schedule=[
    {
        title:"Kickoff Meeting",
        time:"9:30 AM",
        duration:"15 min",
        description:"Here, we will go over details like timing, presentation requirements, and general advice."
    },
    {
        title:"Team Building",
        time:"9:45 AM",
        duration:"15 min",
        description:"In groups of 10 students, 5 nonprofits, and 5 for-profits, you will network and form your team."
    },
    {
        title:"Building Period 1",
        time:"10:00 AM",
        duration:"1 hr, 15 min",
        description:"This is the first block of time you will have to develop your framework and pitch"
    },
    {
        title:"Lunch",
        time:"11:15 AM",
        duration:"30 min",
        description:"Lunch break!"
    },
    {
        title:"Building Period 2",
        time:"11:45 AM",
        duration:"1 hr, 15 min",
        description:"This is the second block of time you will have to develop your framework and pitch"
    },
    {
        title:"Presentations",
        time:"1:00 PM",
        duration:"40 min",
        description:"Teams are split into two brackets, where the best one from each group presents again in front of everyone"
    },
    {
        title:"Additional Judging Time",
        time:"1:40 PM",
        duration:"10 min",
        description:"Judges finish scoring projects, add any last comments, and decide the top team"
    },
    {
        title:"Closing Ceremony",
        time:"1:50 PM",
        duration:"10 min",
        description:"The winners will be announced, and takeaways from the event will be presented!"
    },
    
];

export function ScheduleSection(){

    return (
        <div id="schedule" className="delimitationred xl:px-[180px] lg:px-[50px] md:px-[20px] relative flex flex-col items-center lg:justify-between lg:items-center">
            {schedule.map((element, index) => <Leaf key={element.title} keyName={element.title} title={element.title} time={element.time} duration={element.duration} description={element.description} index={index}/>)}
        </div>
    );
}

export function Leaf(props: {keyName: string, title: string, time: string,  duration: string, description: string, index: number}){
    return (
        <>
            <li  key={props.keyName+"topspace"} className={"flex  w-full text-white flex-row-reverse"}>
                <div className={"w-[50%] flex border-white-16 flex-row-reverse border-l-8"}>

                    <div className={"flex flex-col font-normal w-[80%] text-left content-center"}>
                        <div className="flex flex-row">
                            <Image src="clock.png" width="24" height="24" alt="clock"></Image>
                            <p className="font-medium">{props.duration}</p>
                        </div>
                        <p className="text-[24px] mb-[2%] font-bold">{props.title}</p>
                        <p className="text-[16px] font-normal">{props.description}</p>
                    </div>
                </div>

                <div className={"flex flex-row items-center flex-1 justify-end"}>
                    <div className="w-[10%] aspect-square rounded-full bg-white relative left-2"></div>
                    <div className="w-[20%] border border-solid border-t-8 border-white"></div>
                </div>

                <div className={"px-[6%] flex flex-col justify-center"}>
                    <p className="text-[32px] font-bold">{props.time}</p>
                </div>
            </li>
            <LayoutLeaf keyName={props.keyName+"bottomspace"} height="20px"/>
        </>
    );
}

export function LayoutLeaf(props: {keyName: string, height: string}){

    const height=" h-["+props.height+"] ";
    return (
        <li  key={props.keyName} className={"flex  w-full "+height}>
                <div className="w-[50%] h-full border-white border-r-8"></div>
                <div className="w-[50%] h-full border-white border-l-8"></div>
        </li>
    );
}