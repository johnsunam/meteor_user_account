import React, {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default function Login(props, context) {
        return(<div className="content overflow-hidden">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                    <div className="block block-themed animated fadeIn">
                        <div className="block-header bg-primary">
                            <ul className="block-options">
                                <li>
                                    <a href="base_pages_reminder.html">Forgot Password?</a>
                                </li>
                                <li>
                                    <a href="base_pages_register.html" data-toggle="tooltip" data-placement="left" title="" data-original-title="New Account"><i className="si si-plus"></i></a>
                                </li>
                            </ul>
                            <h3 className="block-title">Login</h3>
                        </div>
                        <div className="block-content block-content-full block-content-narrow">
                            <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                            <p>Welcome, please login.</p>
                            <form className="js-validation-login form-horizontal push-30-t push-50" action="base_pages_dashboard.html" method="post" novalidate="novalidate">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-primary floating">
                                            <input className="form-control" type="text" id="username" name="username"/>
                                            <label for="login-username">Username</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-primary floating">
                                            <input className="form-control" type="password" id="password" name="password"/>
                                            <label for="login-password">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="css-input switch switch-sm switch-primary">
                                            <input type="checkbox" id="login-remember-me" name="login-remember-me"/><span></span> Remember Me?
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <button className="btn btn-block btn-primary" type="button" onClick={()=>{
                                            let username = $('#username').val();
                                            let password = $('#password').val();
                                            Meteor.loginWithPassword(username,password,()=>{
                                               if(Meteor.userId()){
                                                FlowRouter.go('/');
                                               }
                                               else{
                                                   console.log('register');
                                                   FlowRouter.go('/register');
                                               }
                                            })
                                        }}>
                                        <i class="si si-login pull-right"></i> Log in</button>
                                        <a href="#" onClick={()=>{
                                            FlowRouter.go('/register');
                                        }}>Register user</a>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    
} 
