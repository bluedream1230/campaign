import { ReactComponent as ToogleIcon } from '../assets/images/hamberg.svg';
import { ReactComponent as DashboardIcon } from '../assets/images/dashboad-icon.svg';
import { ReactComponent as LaunchIcon } from '../assets/images/Launch-icon.svg';
import { ReactComponent as CampaignIcon } from '../assets/images/Campaigns-icon.svg';
import { ReactComponent as PrizeIcon } from '../assets/images/Prizes-icon.svg';
import { ReactComponent as GameIcon } from '../assets/images/Games-icon.svg';
import { ReactComponent as UserIcon } from '../assets/images/Users-icon.svg';
import { ReactComponent as SettingIcon } from '../assets/images/setting-icon.svg';
import { ReactComponent as LogoutIcon } from '../assets/images/logout-icon.svg';

const menuItem = {
    id: 'menu',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'collapse',
            url: '',
            icon: DashboardIcon,
            breadcrumbs: false,
            children: [
                {
                    id: 'default',
                    title: 'Default',
                    type: 'item',
                    url: '/dashboard/default',
                    breadcrumbs: false
                },
                {
                    id: 'single-report-view',
                    title: 'Single Report View',
                    type: 'item',
                    url: '/dashboard/single-report',
                    breadcrumbs: false
                },
                {
                    id: 'export-view',
                    title: 'Export Report',
                    type: 'item',
                    url: '/dashboard/export-report',
                    breadcrumbs: false
                },
                {
                    id: 'generate-custom-report',
                    title: 'Generate Custom Report',
                    type: 'item',
                    url: '/dashboard/generate-report',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'launch',
            title: 'Launch',
            type: 'item',
            url: '/launch/index',
            icon: LaunchIcon,
            breadcrumbs: false
        },
        {
            id: 'campaigns',
            title: 'Campaigns',
            type: 'collapse',
            url: '',
            icon: CampaignIcon,
            breadcrumbs: false,
            children: [
                {
                    id: 'single-campaign',
                    title: 'Single Campaign',
                    type: 'item',
                    url: '/dashboard/single-campaign',
                    breadcrumbs: false
                },
                {
                    id: 'view-performance',
                    title: 'View Performance',
                    type: 'item',
                    url: '/dashboard/view-performance',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'prizes',
            title: 'Prizes',
            type: 'item',
            url: '/prizes',
            icon: PrizeIcon,
            breadcrumbs: false
        },
        {
            id: 'games',
            title: 'Games',
            type: 'item',
            url: '/games',
            icon: GameIcon,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: UserIcon,
            breadcrumbs: false
        },
        {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/setting',
            icon: SettingIcon,
            breadcrumbs: false
        }
    ]
};

const logout = {
    id: 'log',
    type: 'group',
    children: [
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/logout',
            icon: LogoutIcon,
            breadcrumbs: false
        }
    ]
};

const menuItems = {
    items: [menuItem]
};
const logoutItem = {
    items: [logout]
};

export { logoutItem, menuItems };
