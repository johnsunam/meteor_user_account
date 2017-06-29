import React,{Component} from 'react';

export default function  Dashboard(props, context){
    return (<div><h3>dashboard</h3><button className="btn btn-primary" type="button" onClick={()=>{
        Meteor.logout();
    }}>logout</button></div>)
}