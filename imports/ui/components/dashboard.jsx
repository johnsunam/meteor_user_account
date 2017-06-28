import React,{Component} from 'react';

export default function  Dashboard(props, context){
    return (<div>dashboard<button type="button" onClick={()=>{
        Meteor.logout();
    }}>logout</button></div>)
}