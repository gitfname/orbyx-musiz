
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

function BaseLayout({ children }: Props) {
    return (
        <div className="w-full h-full grid grid-cols-[3fr_10fr] overflow-hidden">

            {/* sidebar */}
            <div className="bg-zinc-950 grid grid-cols-1 grid-rows-[4rem_1fr] overflow-hidden">

                <div className="border-b border-b-white/10">

                </div>

                <div className="space-y-3 overflow-y-auto p-2">
                </div>

            </div>

            {/* main section */}
            <div className="overflow-y-auto">
                {children}
            </div>

        </div>
    )
}

export default BaseLayout