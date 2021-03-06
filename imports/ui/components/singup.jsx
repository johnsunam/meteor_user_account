import React,{Component} from 'react';
import { Accounts } from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default function Register(props, context) {
        return (<div className="content overflow-hidden">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                    <div className="block block-themed animated fadeIn">
                        <div className="block-header bg-success">
                            <ul className="block-options">
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
                                </li>
                                <li>
                                    <a href="base_pages_login.html" data-toggle="tooltip" data-placement="left" title="" data-original-title="Log In"><i className="si si-login"></i></a>
                                </li>
                            </ul>
                            <h3 className="block-title">Register</h3>
                        </div>
                        <div className="block-content block-content-full block-content-narrow">
                           
                            <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                            <p>Please fill the following details to create a new account.</p>
                                 <form className="js-validation-register form-horizontal push-50-t push-50" action="base_pages_register.html" method="post" novalidate="novalidate">
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-success">
                                            <input className="form-control" type="text" id="register-username"  name="register-username" placeholder="Please enter a username"/>
                                            <label for="register-username">Username</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-success">
                                            <input className="form-control" type="email" id="register-email"  name="register-email" placeholder="Please provide your email"/>
                                            <label for="register-email">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-success">
                                            <input className="form-control" type="password"  id="register-password" name="register-password" placeholder="Choose a strong password.."/>
                                            <label for="register-password">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-success">
                                            <input className="form-control" type="password" id="register-password2"  name="register-password2" placeholder="..and confirm it"/>
                                            <label for="register-password2">Confirm Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <label className="css-input switch switch-sm switch-success">
                                            <input type="checkbox" id="register-terms" name="register-terms"/><span></span> I agree with terms &amp; conditions
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12 col-sm-6 col-md-5">
                                        <button className="btn btn-block btn-success" type="button" onClick={(context)=>{
                                            
                                             let username =$("#register-username").val();
                                             let email =$("#register-email").val();
                                             let password = $("#register-password").val();
                                             let password2 = $("#register-password2").val();
                                             if(password == password2){
                                                Accounts.createUser({
                                                    email: email,
                                                    username: username,
                                                    password: password,
                                                },error=>{
                                                    if(!error)
                                                        FlowRouter.go('/');
                                                    else   
                                                    alert(error.message);                                              
                                                });
                                                }else{
                                                    alert('password not matched');
                                             }
                                            

                                             

                                        }}><i className="fa fa-plus pull-right"></i> Sign Up</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>)
    }
