import Image from "next/image"

const schedule=[
    {
        title:"Opening Ceremony",
        time:"10:00 AM",
        duration:"20 min",
        description:"Check in starting at 9:00 AM"
    },
    {
        title:"Networking",
        time:"10:20 AM",
        duration:"75 min",
        description:"Learn and practice the whole shabang of networking!"
    },
    {
        title:"Lunch",
        time:"11:35 AM",
        duration:"30 min",
        description:"Eat food - pizza."
    },
    {
        title:"Presenting",
        time:"12:10 PM",
        duration:"75 min",
        description:"Learn to deliver gnarly presentations"
    },
    {
        title:"Pitch Competition",
        time:"1:35 PM",
        duration:"150 min",
        description:"Pitch to judges, get the prizes"
    },
    {
        title:"Dinner",
        time:"4:10 PM",
        duration:"30 min",
        description:"Get filled with Chick Fil A"
    },
    {
        title:"Financial Literacy",
        time:"4:45 PM",
        duration:"30 min",
        description:"Learn to reduce losses"
    },
    {
        title:"Closing Ceremony",
        time:"5:20 PM",
        duration:"30 min",
        description:"Wind down, winners announced, and reflecting on the fun-filled day"
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
                <div className={"w-[50%] flex border-white-16 flex-row border-l-8 px-[2%]"}>
                    <div className={"flex flex-col font-normal w-[80%] text-left content-center"}>
                        <div className="flex flex-row">
                            <Image src="clock.png" width="24" height="24" alt="clock"></Image>
                            <p className="text-l">{props.duration}</p>
                        </div>
                        <p className="text-3xl my-[1%] font-bold">{props.title}</p>
                        <p className="text-l font-normal">{props.description}</p>
                    </div>
                </div>

                <div className={"flex flex-row items-center flex-auto justify-end"}>
                    <p className="text-3xl font-semibold mr-[3%]">{props.time}</p>
                    <div className="w-[5%] aspect-square rounded-full bg-white relative left-2"></div>
                    <div className="w-[15%] border border-solid border-t-8"></div>
                </div>

            </li>

            <li  key={props.keyName+"bottomspace"} className={"flex w-full h-[25px]"}>
                <div className="w-[50%] h-full"></div>
                <div className="w-[50%] h-full border-l-8"></div>
            </li>
        </>
    );
}
