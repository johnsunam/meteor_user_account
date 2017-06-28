import React from 'react';
import ReactDOM from 'react-dom'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactLayout} from 'meteor/kadira:react-layout'
import Login from '../imports/ui/components/loginForm.jsx';
import Register from '../imports/ui/components/singup.jsx';
import Dashboard from '../imports/ui/container/dashboard';

FlowRouter.route('/login', {
    name: 'login',
    action: function () {
        ReactLayout.render(Login);
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function () {
        ReactLayout.render(Register);
    }
});

FlowRouter.route('/', {
    name: 'dashboard',
    action: function () {
        ReactLayout.render(Dashboard);
    }
})