import { type ReactNode } from "react"
import { Outlet } from "react-router"

type Props = {
    navbarSlot?: ReactNode
    headerSlot?: ReactNode
    bottomSlot?: ReactNode
    announcementSlot?: ReactNode
    sidebarSlot?: ReactNode
    children?: ReactNode
}

export const Layout = (props: Props) => {
    return (
        <div className="flex flex-col h-screen">
            {props.announcementSlot}
            {props.navbarSlot}
            {props.headerSlot}
            <div className="flex flex-1 overflow-hidden">
                {props.sidebarSlot}
                {props.children || <Outlet />}
            </div>
            {props.bottomSlot && (
                <div className="flex flex-col">{props.bottomSlot}</div>
            )}
        </div>
    )
}
