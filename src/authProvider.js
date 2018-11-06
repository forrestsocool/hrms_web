import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import request from "superagent";

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        console.log("AUTH_LOGIN");
        const { username, password } = params;
        request.post('/api/login')
                .send('username=' + username)
                .send('password=' + password)
                //.buffer(true)
                .end((err, res) => {
                    if(err) {
                        return Promise.reject(err.toString());

                    }
                    else {
                        if(res.text.indexOf("bearer") > -1)
                        {
                            console.log("auth success..");
                            localStorage.setItem('token', res.text);
                            return Promise.resolve();
                        }
                        else {
                            //alert('yay got ' + JSON.stringify(res.text));
                            return Promise.reject("Login failed");
                        }
                    }
                });
    }
    // called when the user clicks on the logout button
    else if (type === AUTH_LOGOUT) {
        console.log("AUTH_LOGOUT");
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    // called when the API returns an error
    else if (type === AUTH_ERROR) {
        console.log("AUTH_ERROR)");

        const { status } = params;
        if (status === 401 || status === 403) {
            //localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    else if (type === AUTH_CHECK) {
        console.log("AUTH_CHECK");
        // if(localStorage.getItem('token') === null){
        //     return Promise.reject({ redirectTo: '/login' });
        // }
        // else{
        //     return Promise.resolve();
        // }
        //return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });

        //return Promise.resolve();

        // else if (type === AUTH_CHECK) {
        //     console.log("AUTH_CHECK)");
        //
        //     return localStorage.getItem('token')
        //         ? Promise.resolve()
        //         : Promise.reject();
        // }
    }



    //console.log("auth end..");

    //return Promise.resolve();
    //return Promise.reject('Unknown method');
};