// material-ui
import { Grid, Typography, Box } from '@mui/material';

// project imports
import EarningCard from 'ui-component/cards/Skeleton/EarningCard';
import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';
import { gridSpacing } from 'store/constant';
// ==============================|| SAMPLE PAGE ||============================== //

const SelectGamePage = () => {
    const tempcard = [
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img1.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img2.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img3.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img4.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img5.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img6.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img7.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img8.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img9.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img10.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img11.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img12.jpg`)
        }
    ];
    return (
        <>
            <h2>Select Games</h2>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        {tempcard.map((item, index) => {
                            return (
                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                    <div style={{}}>
                                        <Box>
                                            <ImgMediaCard
                                                card_name={item.name}
                                                card_image={item.icon}
                                                key={index}
                                                href={item.href}
                                            ></ImgMediaCard>
                                        </Box>
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SelectGamePage;
