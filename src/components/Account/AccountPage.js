import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';

import PasswordChangeForm from '../PasswordForget/PasswordForgetPage';
 
const AccountPage = () => (
  <AuthUserContext.Consumer>
    
    {authUser  => (
      <div>
        <h1>Account: {authUser.email}</h1>
     {  console.log(authUser)}
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);