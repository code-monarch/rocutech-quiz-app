import React from 'react'
import brandLogo from "@/public/brand-logo.png"
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/lib/routes'

const FormSchema = z.object({
  passcode: z.string().refine((val) => val === "3030", {
    message: "Please enter the correct passcode"
  }),
});

const SignInTemp = () => {
  const { push } = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      passcode: "" as any,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Passcode accepted:", data.passcode);
    push(APP_ROUTES.addParticipants)
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[640px] h-fit flex flex-col items-center gap-y-5'>
        <Image src={brandLogo} alt="brand logo" />

        <div className='bg-card w-full h-[357px] p-14 border rounded-3xl'>
          <h3 className='w-full flex items-center justify-center text-card-foreground text-3xl font-medium mb-10'>Sign In</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full grid items-center gap-2 mb-6">
              <Label htmlFor="passcode" className='text-[#666666]'>Passcode</Label>
              <Input
                type="text"
                id="passcode"
                {...form.register("passcode")}
                placeholder="Enter passcode"
                className='h-[56px]'
              />
              {errors.passcode && <p className="text-red-500">{errors.passcode.message}</p>}
            </div>
            <Button size="lg" type="submit" className='w-full h-[64px]' disabled={!isValid}>
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInTemp