import {FlowRouter} from 'meteor/kadira:flow-router';
import Dashboard from '../../ui/components/dashboard.jsx';
import {composeWithTracker} from 'react-komposer';

const composer = (props, onData) => {
    if (Meteor.userId()) {
        let user = Meteor.userId()
        onData(null, {user})
    } else {
        FlowRouter.go('/login');
    }

};

export default composeWithTracker(composer)(Dashboard);
