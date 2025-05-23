// import { AuthGuard, GuestGuard } from '@/features/auth/guards'
// import { LoginPage } from '@/pages/Login'
// import { Main } from '@/pages/Main'
// import { RegisterPage } from '@/pages/Register'
import BlogListPage from '@/pages/BlogListPage'
import BlogPostPage from '@/pages/BlogPostPage'
import ContactPage from '@/pages/ContactPage'
import HomePage from '@/pages/HomePage'
import ProjectPage from '@/pages/ProjectPage'
import ProjectsListPage from '@/pages/ProjectsListPage'
import { createBrowserRouter } from 'react-router'
import MainLayout from './layouts/MainLayout'

export const appRouter = () => {
    return createBrowserRouter([
        {
            Component: MainLayout,
            children: [
                {
                    path: "/",
                    children: [
                        {
                            index: true,
                            Component: HomePage,
                        },
                        {
                            // Layout route, so no path for the parent
                            // Component: BlogLayout,
                            path: "blog",
                            children: [
                                { index: true, Component: BlogListPage },
                                { path: ":post", Component: BlogPostPage },
                            ],
                        },
                        {
                            // Layout route, so no path for the parent
                            // Component: ProjectLayout,
                            path: "projects",
                            children: [
                                { index: true, Component: ProjectsListPage },
                                { path: ":pid", Component: ProjectPage },
                            ]
                        },
                        {
                            path: "contact",
                            Component: ContactPage,
                        }

                    ]
                }

            ]
        }
    ])
} 