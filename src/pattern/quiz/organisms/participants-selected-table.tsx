import React from 'react'

const students = [
    {
        name: "Hilda Banks",
        school: "Rainbow International school",
        points: 1700,
    }, {
        name: "Emily Johnson",
        school: "Springfield High School",
        points: 1600,
    },
    {
        name: "Michael Brown",
        school: "Oakwood Academy",
        points: 1500,
    },
    {
        name: "Sarah Lee",
        school: "Maplewood Elementary",
        points: 1400,
    },
    {
        name: "Kevin White",
        school: "Riverview Middle School",
        points: 1300,
    },
    {
        name: "Jessica Davis",
        school: "Cedar Creek High School",
        points: 1200,
    },
    {
        name: "Lisa Martin",
        school: "Pineview Elementary",
        points: 1100,
    },
    {
        name: "Brian Taylor",
        school: "Willow Creek Middle School",
        points: 1000,
    },
    {
        name: "Karen Thompson",
        school: "Sunnydale High School",
        points: 900,
    },
    {
        name: "Ryan Hall",
        school: "Lakewood Elementary",
        points: 800,
    }
]

const ParticipantsSelectedTable = () => {
    return (
        <div className='w-full flex flex-col gap-y-10'>
            {students.map(({ name, school, points }, idx) => (
                <div className='w-full flex items-center justify-between' key={idx}>
                    <div className='w-[280px] text-sm font-medium'>{idx + 1}.{name}</div>
                    <div className='w-[305px] flex items-center justify-start text-left text-sm font-medium'>{school}</div>
                    <div className='text-sm font-bold'>{points} points</div>
                </div>
            ))
            }
        </div>
    )
}

export default ParticipantsSelectedTable