import { type ReactNode } from "react"
import { Outlet } from "react-router"

type Props = {

    headerSlot?: ReactNode
    bottomSlot?: ReactNode
    children?: ReactNode
}

export const Layout = (props: Props) => {
    return (
        <div className="flex flex-col h-screen w-screen overflow-y-auto  bg-background">
            {props.headerSlot}
            <div className="flex flex-1 pt-10">
                {props.children || <Outlet />}
            </div>
            {props.bottomSlot && (
                <div className="flex flex-col">{props.bottomSlot}</div>
            )}
        </div>
    )
}
