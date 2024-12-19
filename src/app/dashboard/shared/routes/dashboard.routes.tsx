import DashboardLayout from '../layout'
import { Navigate, RouteObject } from 'react-router-dom'
import BeehivesPage from '@dashboard/beehives'
import HistoryPage from '@dashboard/history'

export const dashboardRoutes: RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Navigate to='/dashboard/beehives' />
    },
    {
      path: '/dashboard/beehives',
      element: <BeehivesPage />
    },
    {
      path: '/dashboard/history',
      element: <HistoryPage />
    },
    {
      path: '*',
      element: <Navigate to='/dashboard/colmenas' />
    }
  ]
}
