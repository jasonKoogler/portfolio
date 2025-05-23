import React from 'react'
import ReactDOM from 'react-dom/client'

// import { Provider as ModalProvider } from '@ebay/nice-modal-react'
// import { Provider as ReduxProvider } from 'react-redux'
// import { store } from './appStore.js'
import { appRouter } from '@/app/appRouter'
import { RouterProvider } from 'react-router'
import './App.css'
// import { ThemeProvider } from '@/entities/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <ThemeProvider attribute="class"> */}
        {/* <ReduxProvider store={store}> */}
        {/* <ModalProvider> */}
        <RouterProvider router={appRouter()} />
        {/* </ModalProvider> */}
        {/* </ReduxProvider> */}
        {/* </ThemeProvider> */}
    </React.StrictMode>
)
