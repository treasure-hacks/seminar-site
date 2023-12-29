'use client';
import moment, { unitOfTime } from "moment";
import React, { useEffect, useState } from "react";

const COUNTDOWN_DATE = moment('2024-02-17T10:00:00-08:00');
const UNITS = ['Days', 'Hours', 'Minutes', 'Seconds']

interface DigitDisplayProps {
  unit: string,
  value: number,
  time: number,
  state: string
}

function DigitDisplay(props: DigitDisplayProps) {
  const intermediate = !props.state.endsWith('-ready')
  return <div className='text-center' data-time={props.time} suppressHydrationWarning>
    <div className='w-[100px] h-[112px] bg-gradient-to-b from-[#FFE259] to-[#FFA751] text-black text-[56px]
      flex justify-center items-center rounded-xl mb-1' suppressHydrationWarning> {/* Timestamps will be different */}
      {intermediate ? '' : props.value.toString().padStart(2, '0')}
    </div>
    <span className='text-2xl font-bold'>{props.unit}</span>
  </div>
}

function updateTimes(dict: { [k: string]: number }) {
  if (Date.now() > COUNTDOWN_DATE.unix() * 1000) return
  UNITS.forEach((unit, i) => {
    const value = COUNTDOWN_DATE.diff(Date.now(), unit.toLowerCase() as unitOfTime.Diff) % [365, 24, 60, 60][i];
    dict[unit] = value;
  });
}

let rendered = false;
export function CountdownTimer() {
  const unitsLeft: { [k: string]: number } = Object.fromEntries(UNITS.map(u => [u, 0]));
  updateTimes(unitsLeft);

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const key = 'countdown' + (rendered ? '-ready' : '')
  
  useEffect(() => {
    setTimeout(() => setLastUpdate(Date.now()), rendered ? 1000 : 0);
    rendered = true;
  }, [lastUpdate]);

  return <div key={key} className='flex relative justify-center gap-5 mt-12 max-[480px]:scale-[80%] max-[480px]:mt-4 max-[400px]:scale-[70%] max-[400px]:mt-0'>
    {UNITS.map(unit => <DigitDisplay key={unit} state={key} value={unitsLeft[unit]} unit={unit} time={lastUpdate}/>)}
  </div>
}
