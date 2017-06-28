import {FlowRouter} from 'meteor/kadira:flow-router';
import Signup from '../../ui/components/singup.jsx';
import {composeWithTracker} from 'react-komposer';

const composer = (props, onData) => {
    if (!Meteor.userId()) {
        onData(null, {});
    } else {
        FlowRouter.go('/');
    }

};

export default composeWithTracker(composer)(Signup);
