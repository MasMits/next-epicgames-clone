import * as React from 'react';
import {styled, alpha, useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import {Drawer, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import {FC, useState} from "react";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './header.module.scss'

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const SearchAppBar: FC = () => {
    const theme = useTheme();
    const matches2 = useMediaQuery(theme.breakpoints.down('sm'));
    const [openFilterWindow, setOpenFilterWindow] = useState(false);

    return (
        <Box sx={{flexGrow: 1, zIndex: 100}}>
            <AppBar position="fixed">
                <Toolbar sx={{display: "flex", zIndex: 15000000, gap: 4}}>
                    {/*<SvgIcon component={StarIcon} inheritViewBox />*/}

                    {/*<SvgIcon paddingLeft="30px" viewBox="0 0 36 36">*/}
                    {/*    <path d="../img/epic-games.svg" />*/}
                    {/*</SvgIcon>*/}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    noWrap*/}
                    {/*    component="div"*/}
                    {/*    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}*/}
                    {/*>*/}
                    {/*</Typography>*/}

                    {matches2 ?
                        <>
                            <Box>
                                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}} onClick={() => {
                                    setOpenFilterWindow(true)}}>
                                    <MenuIcon/>
                                </IconButton>

                            </Box>
                            <Drawer
                                anchor={'bottom'}
                                open={openFilterWindow}
                                onClose={() => {
                                    setOpenFilterWindow(false)
                                }}
                            >
                                <Button><Link href={'/'}>Discover</Link></Button>
                                <Button><Link href={'/browse'}>Browse</Link></Button>
                                <Button><Link href={'/news'}>News</Link></Button>
                            </Drawer>
                        </>
                        :
                        <div className={styles.flex}>
                            <Button><Link href={'/'}>Discover</Link></Button>
                            <Button><Link href={'/browse'}>Browse</Link></Button>
                            <Button><Link href={'/news'}>News</Link></Button>
                        </div>
                    }

                    {/*<Chip avatar={<Avatar>M</Avatar>} label="Avatar"/>*/}
                    {/*<SettingsIcon/>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SearchAppBar