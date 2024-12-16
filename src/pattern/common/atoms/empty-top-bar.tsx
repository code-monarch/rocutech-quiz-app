import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const EmptyTopbar = () => {
  const { back } = useRouter();

  return (
    <div className='bg-primary w-full h-[100px] flex items-center justify-start px-9'>
      <Button variant="secondary" onClick={() => back()} className='font-medium text-lg'>
        <span><ChevronLeft /></span>  Back
      </Button>
    </div>
  )
}

export default EmptyTopbar