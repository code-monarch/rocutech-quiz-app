import React from 'react'
import WelcomeIcon from '../atoms/icons/welcome-icon'

const WelcomeWidget = () => {
    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='flex items-center gap-1'>
                <h3 className='text-3xl text-primary font-bold'>Welcome</h3>
                <WelcomeIcon />
            </div>
            <p className='text-sm text-muted-foreground font-medium'>To your Personalized quiz dashboard</p>
        </div>
    )
}

export default WelcomeWidget