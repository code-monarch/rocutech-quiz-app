import React, { FC } from 'react'

interface IProps {
    index: number;
    name: string
}

const ParticipantsSelectedTable: FC<IProps> = ({ index, name }) => {
    return (
        <div className='w-full flex flex-col gap-y-10'>
            <div className='w-full flex items-center justify-between'>
                <div className='w-[280px] text-base font-medium text-black'>{index}. {name}</div>
                {/* <div className='w-[305px] flex items-center justify-start text-left text-sm font-medium'>{school}</div> */}
            </div>
        </div>
    )
}

export default ParticipantsSelectedTable