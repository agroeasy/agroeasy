import React from 'react';
import { Button } from 'antd';
import { FormField, TextInputField } from 'evergreen-ui';
import './style.css';
import { Title, Have_Account, Required, Create_Account, Sign_in } from './constant';

export default class Signup extends React.Component {
    render() {
        return (
        
            <FormField       
                alignItems="center"
                justifyContent="center"
                className="form">
                <div>                  
                    <img src="./images/AgroeasyLogo.png" alt="logo" className="logo"/>
                    <div className="header">{Title}</div>
                    <div className="asterik">{Required}</div>
            
                    <TextInputField
                        tabIndex={0}
                        required
                        appearance="neutral"
                        type="name"
                        label="First name"
                        inputHeight={38}
                        inputWidth={300}
                    />         
                    <TextInputField
                        tabIndex={1}
                        required
                        appearance="neutral"
                        type="name"
                        label="Last name"
                        inputHeight={38}
                        inputWidth={300}
                    />  
                    <TextInputField
                        tabIndex={2}
                        required
                        appearance="neutral"
                        type="name"
                        label="Location"
                        inputHeight={38}
                        inputWidth={300}
                    />               
                    <TextInputField
                        tabIndex={3}
                        required
                        appearance="neutral"
                        type="email"
                        label="Email address"
                        inputHeight={38}
                        inputWidth={300}
                    />         
                    <TextInputField
                        tabIndex={4}
                        required
                        appearance="neutral"
                        type="password"
                        label="Password"
                        inputHeight={38}
                        inputWidth={300}
                    />              
                   
                    <Button
                        className="green-button">
                        {Create_Account}
                    </Button>
                
                    <div className="account">{Have_Account}</div>

                    <Button
                        className="default_button"
                        a href='../signin'>
                        {Sign_in}
                    </Button>
                
                </div>
          
            </FormField>

        );

    }
}
