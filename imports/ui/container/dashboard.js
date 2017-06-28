import {FlowRouter} from 'meteor/kadira:flow-router';
import Dashboard from '../../ui/container/dashboard';

const composer = (props, onData) => {
    if (Meteor.userId()) {
        let user = Meteor.userId()
        onData(null, {user})
    } else {
        FlowRouter.go('/login');
    }

};

export default composeWithTracker(composer)(Dashboard);
