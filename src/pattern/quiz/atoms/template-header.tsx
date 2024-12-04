import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const TemplateHeader: FC<IProps> = ({ children, className }) => {
  return (
    <h3 className={cn('w-full text-lg font-medium pb-4 border-b', className)}>{children}</h3>
  )
}

export default TemplateHeader