"use client";

import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/routes";
// import { Button } from "@/components/ui/button";
// import { APP_ROUTES } from "@/lib/routes";
import { AddParticipantsPageModal } from "@/pattern/participants/organisms/add-participants-page-dialog";
import { useRouter } from "next/navigation";


export default function AddPArticipantsPage() {
    const { push } = useRouter()

    return (
        <div className="container h-screen w-full flex items-center justify-center mx-auto py-10">
            <div className="flex flex-col justify-between items-center gap-8">
                <div className="space-y-2">
                    <h1 className="text-2xl text-white font-bold">Manage participating schools/students</h1>
                    <p className="text-sm text-center text-white">You can always update this later</p>
                </div>
                <div className="flex flex-col justify-between items-center gap-5">
                    <AddParticipantsPageModal />
                    <Button size="lg" variant="link" onClick={() => push(APP_ROUTES.dashboard)} className="tetx-lg" >Skip</Button>
                </div>
            </div>
        </div>
    )
}

