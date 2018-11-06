import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import LoginForm from "./LoginForm";

// import Notification from '../layout/Notification';
// import DefaultLoginForm from './LoginForm';

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        height: 80,
        marginTop: '2em',
        alignItems: 'center',
        fontSize: 38,
        color: '#fff',
    },
    icon: {
        backgroundColor: theme.palette.secondary[500],
    },
});

const sanitizeRestProps = ({
                               classes,
                               className,
                               location,
                               title,
                               array,
                               theme,
                               staticContext,
                               ...rest
                           }) => rest;

/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider` using the AUTH_LOGIN verb. Redirects to the root page
 * (/) upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
const Login = ({ classes, className, loginForm, ...rest }) => (
    <div
        className={classnames(classes.main, className)}
        {...sanitizeRestProps(rest)}
    >

        <div className={classes.title}>
            <p>我是通信兵-数据管理系统</p>
        </div>
        <Card className={classes.card}>
            <div className={classes.avatar}>
                <Avatar className={classes.icon}>
                    <LockIcon />
                </Avatar>
            </div>
            {loginForm}
        </Card>
        {/*<Notification />*/}
    </div>
);

Login.propTypes = {
    className: PropTypes.string,
    authProvider: PropTypes.func,
    classes: PropTypes.object,
    input: PropTypes.object,
    meta: PropTypes.object,
    previousRoute: PropTypes.string,
    loginForm: PropTypes.element,
};

Login.defaultProps = {
    loginForm: <LoginForm />,
};

export default withStyles(styles)(Login);