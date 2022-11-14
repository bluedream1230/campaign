import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashbaordSingleReportView = Loadable(lazy(() => import('views/dashboard/SingleReport')));
const LaunchMainView = Loadable(lazy(() => import('views/launch')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'single-report',
                    element: <DashbaordSingleReportView />
                }
            ]
        },
        {
            path: 'launch',
            children: [
                {
                    path: 'index',
                    element: <LaunchMainView />
                }
            ]
        }
    ]
};

export default MainRoutes;
