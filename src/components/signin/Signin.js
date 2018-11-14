import React from 'react';
import { Button } from 'antd';
import { FormField, TextInputField } from 'evergreen-ui';
import './style.css';
import { Title, Create_Account, Sign_in, No_Account } from './constant';

export default class Signin extends React.Component {
    render() {
        return (
        
            <FormField       
                alignItems="center"
                justifyContent="center"
                className="form">
                <div>            
            
                    <img src="./images/AgroeasyLogo.png" alt="logo" className="logo"/>
                    
                    <div className="header">{Title}</div>
                            
                    <TextInputField
                        tabIndex={0}              
                        appearance="neutral"
                        type="email"
                        label="Your email-address"
                        inputHeight={38}
                        inputWidth={300}
                    />

                    <TextInputField
                        tabIndex={1}              
                        appearance="neutral"
                        type="password"
                        label="Your password"
                        inputHeight={38}
                        inputWidth={300}
                        hint="Forgot Password?"
                    />                 
                    <Button
                        className="default_button">
                        {Sign_in}
                    </Button>
                    
                    <div className="account">{No_Account}</div>
                    
                    <Button
                        className="green-button"
                        a href='../signup'>
                        {Create_Account}
                        
                    </Button>
            
                </div>
            </FormField>
     
        );
    }
  
}
