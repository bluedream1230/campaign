// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    type: 'group',
    children: [
        {
            title: 'Dashboard',
            type: 'collapse',
            url: '',
            icon: icons.IconTypography,
            breadcrumbs: false,
            children: [
                {
                    title: 'Single Report View',
                    type: 'item',
                    url: '/dashboard/single-report',
                    breadcrumbs: false
                },
                {
                    title: 'Export Report',
                    type: 'item',
                    url: '/dashboard/export-report',
                    breadcrumbs: false
                },
                {
                    title: 'Generate Custom Report',
                    type: 'item',
                    url: '/dashboard/generate-report',
                    breadcrumbs: false
                }
            ]
        },
        {
            title: 'Launch',
            type: 'item',
            url: '/launch',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            title: 'Campaigns',
            type: 'collapse',
            url: '',
            icon: icons.IconTypography,
            breadcrumbs: false,
            children: [
                {
                    title: 'Single Campaign',
                    type: 'item',
                    url: '/dashboard/single-campaign',
                    breadcrumbs: false
                },
                {
                    title: 'View Performance',
                    type: 'item',
                    url: '/dashboard/view-performance',
                    breadcrumbs: false
                }
            ]
        },
        {
            title: 'Prizes',
            type: 'item',
            url: '/prizes',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            title: 'Games',
            type: 'item',
            url: '/games',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            title: 'Setting',
            type: 'item',
            url: '/setting',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            title: 'Logout',
            type: 'item',
            url: '/logout',
            icon: icons.IconPalette,
            breadcrumbs: false
        }
    ]
};

export default utilities;
