import {FlowRouter} from 'meteor/kadira:flow-router';
import Login from '../../ui/components/loginForm.jsx';
import {composeWithTracker} from 'react-komposer';

const composer = (props, onData) => {
    if (!Meteor.userId()) {
        onData(null, {});
    } else {
        FlowRouter.go('/');

    }

};

export default composeWithTracker(composer)(Login);
