import { Profile } from '@/features/auth/ui/Profile'
import { SearchBar } from '@/features/search/ui/SearchBar'
import { SidebarToggle } from '@/features/sidebar/SidebarToggle'
import { DarkModeToggle } from '@/features/theme/ui/DarkModeToggle'
import { Layout } from '@/shared/ui/Layout/Layout'
import { LayoutHeader } from '@/shared/ui/LayoutHeader/LayoutHeader'
import { Sidebar } from '@/widgets/Sidebar'

export const baseLayout = (
    <Layout
        announcementSlot={
            <div className="bg-teal-400 dark:bg-teal-800">Announcement</div>
        }
        headerSlot={
            <LayoutHeader
                leftContentSlot={<SidebarToggle />}
                middleContentSlot={<SearchBar />}
                rightContentSlot={<DarkModeToggle />}
                profileSlot={<Profile />}
            />
        }
        // bottomSlot={<div>Bottom</div>}
        sidebarSlot={<Sidebar />}
    />
)
