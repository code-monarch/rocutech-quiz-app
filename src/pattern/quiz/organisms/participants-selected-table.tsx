import React from 'react'

const students = [
    {
        school: "School 1",
        name: "Student one sc1",
        points: 0,
    }, {
        school: "School 1",
        name: "Student two sc1",
        points: 0,
    },
    {
        school: "School 1",
        name: "Student three sc1",
        points: 0,
    },
    {
        school: "School 1",
        name: "Student four sc1",
        points: 0,
    },
    {
        school: "School 1",
        name: "Student five sc1",
        points: 0,
    },
    {
        school: "School 2",
        name: "Student one sc2",
        points: 0,
    },
    {
        school: "School 2",
        name: "Student two sc2",
        points: 0,
    },
    {
        school: "School 2",
        name: "Student three sc2",
        points: 0,
    },
    {
        school: "School 2",
        name: "Student four sc2",
        points: 0,
    },
    {
        school: "School 2",
        name: "Student five sc2",
        points: 0,
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