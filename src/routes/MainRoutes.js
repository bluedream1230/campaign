import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashbaordSingleReportView = Loadable(lazy(() => import('views/dashboard/SingleReport')));
const LaunchMainView = Loadable(lazy(() => import('views/launch')));
const LaunchGameView = Loadable(lazy(() => import('views/launch/games')));

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
                },
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
                },
                {
                    path: 'games/index',
                    element: <LaunchGameView />
                }
            ]
        }
    ]
};

export default MainRoutes;
