"use client";

import React from 'react'


const SelectParticipantsHeader = () => {
    return (
        <div className='w-full h-[58px] bg-transparent flex items-center justify-between text-foreground px-16 border-b'>
            <h5 className='font-medium text-base'>School Name</h5>
            <h5 className='font-medium text-base'>Ranking</h5>
        </div>
    )
}

export default SelectParticipantsHeader