"use client";

import React, { FC, useState } from 'react'

interface IProps {
    handleClick: (isChecked: any) => void
}

const SelectParticipantHeaderCheckbox: FC<IProps> = ({ handleClick }) => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <div role="button" tabIndex={0} onClick={() => { 
            const newToggleState = !isToggled;
            setIsToggled(newToggleState);
            handleClick(newToggleState);
        }}>
            {
                isToggled ?
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="4" fill="#1FA1E0" />
                            <path d="M15.9227 5.71436L8.06557 13.5715L4.49414 10.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                    :
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#666666" strokeOpacity="0.24" />
                        </svg>
                    </span>

            }

        </div>
    )
}

export default SelectParticipantHeaderCheckbox