import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const handleRefresh = () => {
    window.location.reload()
}

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h6"
                    className={classes.title}
                    onClick={handleRefresh}>
                    <Link
                        TypographyClasses="h6"
                        href=""
                        color="inherit">
                        Far From Home
                   </Link>
                </Typography>
                <Link
                    href="https://github.com/aviadbourla"
                    color="inherit">
                    <GitHubIcon
                        fontSize="large"
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/aviad-bourla/"
                    color="inherit">
                    <LinkedInIcon
                        fontSize="large"
                    />
                </Link>
            </Toolbar>
        </AppBar>

    );
}