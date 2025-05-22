import { AuthGuard, GuestGuard } from '@/features/auth/guards'
import { LoginPage } from '@/pages/Login'
import { Main } from '@/pages/Main'
import { RegisterPage } from '@/pages/Register'
import { createBrowserRouter } from 'react-router'
import { baseLayout } from './layouts/baseLayout'
import { baseLayoutEmpty } from './layouts/baseLayoutEmpty'

export const appRouter = () =>
    createBrowserRouter([
        {
            element: baseLayout,
            errorElement: <div>error</div>,
            children: [
                {
                    path: '/',
                    element: (
                        <GuestGuard>
                            <Main />
                        </GuestGuard>
                    ),
                },
            ],
        },
        {
            element: baseLayoutEmpty,
            errorElement: <div>error</div>,
            children: [
                {
                    path: '/login',
                    element: (
                        <AuthGuard>
                            <LoginPage />
                        </AuthGuard>
                    ),
                },
                {
                    path: '/register',
                    element: (
                        <AuthGuard>
                            <RegisterPage />
                        </AuthGuard>
                    ),
                },
            ],
        },
    ])
