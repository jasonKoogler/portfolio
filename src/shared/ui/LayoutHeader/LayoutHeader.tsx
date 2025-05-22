// import { useAppSelector } from '@/app/hooks'
// import { Logo } from './Logo'
// import { selectTheme } from '@/entities/theme'

type Props = {
    leftContentSlot?: React.ReactNode
    middleContentSlot?: React.ReactNode
    rightContentSlot?: React.ReactNode
    profileSlot?: React.ReactNode
}

export const LayoutHeader = (props: Props) => {
    // const theme = useAppSelector((state) => selectTheme(state))

    // const headerClasses =
    //     theme === 'dark'
    //         ? 'bg-stone-900 text-neutral-400'
    //         : 'bg-neutral-100 text-neutral-800'

    return (
        <header
            className={`bg-background flex sticky top-0 shrink-0 p-2 justify-between items-center shadow-md z-4`}
        >
            <div className="flex gap-6 pl-2 pr-5">
                {props.leftContentSlot}
                {/* <Logo /> */}
            </div>

            {props.middleContentSlot}

            <div className="flex gap-4 pl-5">
                {props.rightContentSlot}
                {props.profileSlot}
            </div>
        </header>
    )
}
