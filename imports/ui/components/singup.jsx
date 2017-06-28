import React,{Component} from 'react';
import { Accounts } from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default function Register(props, context) {
        return (<div class="content overflow-hidden">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                    <div class="block block-themed animated fadeIn">
                        <div class="block-header bg-success">
                            <ul class="block-options">
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
                                </li>
                                <li>
                                    <a href="base_pages_login.html" data-toggle="tooltip" data-placement="left" title="" data-original-title="Log In"><i class="si si-login"></i></a>
                                </li>
                            </ul>
                            <h3 class="block-title">Register</h3>
                        </div>
                        <div class="block-content block-content-full block-content-narrow">
                           
                            <h1 class="h2 font-w600 push-30-t push-5">OneUI</h1>
                            <p>Please fill the following details to create a new account.</p>
                                 <form class="js-validation-register form-horizontal push-50-t push-50" action="base_pages_register.html" method="post" novalidate="novalidate">
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-success">
                                            <input class="form-control" type="text" id="register-username"  name="register-username" placeholder="Please enter a username"/>
                                            <label for="register-username">Username</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-success">
                                            <input class="form-control" type="email" id="register-email"  name="register-email" placeholder="Please provide your email"/>
                                            <label for="register-email">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-success">
                                            <input class="form-control" type="password"  id="register-password" name="register-password" placeholder="Choose a strong password.."/>
                                            <label for="register-password">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-success">
                                            <input class="form-control" type="password" id="register-password2"  name="register-password2" placeholder="..and confirm it"/>
                                            <label for="register-password2">Confirm Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <label class="css-input switch switch-sm switch-success">
                                            <input type="checkbox" id="register-terms" name="register-terms"/><span></span> I agree with terms &amp; conditions
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12 col-sm-6 col-md-5">
                                        <button class="btn btn-block btn-success" type="button" onClick={(context)=>{
                                            console.log(context);
                                             let username =$("#register-username").val();
                                             let email =$("#register-email").val();
                                             let password = $("#register-password").val();
                                             let password2 = $("#register-password").val();
                                             Accounts.createUser({
                                                email: email,
                                                username: username,
                                                password: password,
                                             });

                                             FlowRouter.go('/');

                                        }}><i class="fa fa-plus pull-right"></i> Sign Up</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>)
    }
