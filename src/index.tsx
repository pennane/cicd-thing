import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Root } from './layouts/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DevOps } from './views/DevOps'
import { Cd } from './views/Cd'
import { Ci } from './views/Ci'
import { Demo } from './views/Demo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <DevOps />
      },
      {
        path: 'ci-page',
        element: <Ci />
      },
      {
        path: 'cd-page',
        element: <Cd />
      },
      {
        path: 'demo',
        element: <Demo />
      }
    ]
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
