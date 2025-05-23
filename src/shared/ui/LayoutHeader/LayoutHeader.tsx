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
            className={`flex w-full sticky top-0 shrink-0  z-4 bg-background`}
        >


            {props.middleContentSlot}


        </header>
    )
}
