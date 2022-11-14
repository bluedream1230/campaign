// material-ui
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
// project imports
import NavGroup from './NavGroup';
import { menuItems, logoutItem } from 'menu-items';

// assets
import { IconMenu2 } from '@tabler/icons';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = menuItems.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    const theme = useTheme();
    return <>{navItems}</>;
};

const LogoutComponent = () => {
    const logoutItems = logoutItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    const theme = useTheme();
    return <>{logoutItems}</>;
};

export { MenuList, LogoutComponent };
