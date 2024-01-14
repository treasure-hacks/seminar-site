import { Fragment } from "react";

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
        <div id="schedule" className="delimitationred xl:px-[180px] lg:px-[50px] md:px-[20px] relative flex lg:flex-row flex-col items-center   lg:justify-between lg:items-center">
            {schedule.map((element, index) => <Leaf key={element.title} title={element.title} time={element.time} duration={element.duration} description={element.description} index={index}/>)}
        </div>
    );
}

/*
export function TimeTree(){

    const leafs=schedule.map((element,index)=>{
        return (
            <Fragment key={element.title}> {}
                <Leaf keyName={element.title} title={element.title} time={element.time} description={element.description} duration={element.duration} index={index} />
            </Fragment>
        )
    });

    /*
    return (
        <ul className="delimitationgreen   md:w-[600px] w-[500px] max-w-[90%]">

            <LayoutLeaf keyName="topSpace" height="50px"/>

            {leafs}

            <LayoutLeaf keyName="bottomSpace" height="50px"/>
        </ul>
    );
    */
//}

export function Leaf(props: {key: string, title: string, time: string,  duration: string, description: string, index: number}){

    const textAlign=(props.index%2)==0?" text-right ": " text-left ";
    const flexAlign=(props.index%2)==0?" flex-row ": " flex-row-reverse ";
    const descriptionDefinedBorder=(props.index%2)==0?" border-r-8 ": " border-l-8 ";
    const timeDefinedBorder=(props.index%2)==0?" border-l-8 ": " border-r-8 ";
    

    return (
        <>
            <li  key={props.key+"topspace"} className={"delimitationpurple flex  w-full text-white "+flexAlign}>
                <div className={"delimitationblue w-[50%] flex border-white"+flexAlign+descriptionDefinedBorder}>

                    <div className={"delimitationyellow font-normal w-[80%]"+textAlign}>
                        <p className="font-normal mb-[2%]">{props.duration}</p>
                        <p className="text-[16px] mb-[2%]">{props.title}</p>
                        <p className="font-normal  ">{props.description}</p>
                    </div>

                    <div className={"delimitationred flex flex-row items-center flex-1 justify-end"+flexAlign}>
                        <div className="delimitationblue w-[30%] aspect-square rounded-full bg-white "></div>
                        <div className="delimitationyellow w-[50%] border border-solid border-t-8 border-white"></div>
                    </div>

                </div>

                <div className={"delimitationgreen  px-[6%] flex flex-col justify-center border-white"+timeDefinedBorder}>

                    <p className="text-[20px]">{props.time}</p>

                </div>
            </li>
            <LayoutLeaf keyName={props.key+"bottomspace"} height="20px"/>
        </>
    );
}

export function LayoutLeaf(props: {keyName: string, height: string}){

    const height=" h-["+props.height+"] ";
    return (
        <li  key={props.keyName} className={"delimitationpurple flex  w-full "+height}>
                <div className="w-[50%] h-full  border-white border-r-8"></div>
                <div className="w-[50%] h-full   border-white border-l-8"></div>
        </li>
    );
}