import React from 'react';
import { FormField, TextInput, Label, InlineAlert, Button } from 'evergreen-ui';
import Box from 'ui-box';
import logo from '../logo/AgroeasyLogo.png';

export default class Signin extends React.Component {
  render() {
    return (
       
      <FormField display="flex" alignItems="center" justifyContent="center" style={{marginTop:'70px'}}>
        <div>
            <span style={{fontWeight: 'bold', fontSize: '20pt', margin: '500px auto'}}>AgroEasy</span>
            <img src={logo} alt="logo"  style={{width: '60px', height: '30px'}}/>
            <p style={{fontSize: '20pt'}}>Sign in to your account</p>
               
                     
            <Box>
                <Box marginBottom={15}>
                    <Label size={500} display="block" marginBottom={8}>
                        Email address (required)
                    </Label>
                    <TextInput  height={45} width={300}/>
                </Box>
                <Box marginBottom={5}>
                    <Label size={500} display="block" marginBottom={8}>
                        Password (required)
                    </Label>
                    <TextInput height={45} width={300}/>
                </Box>
                <InlineAlert type="question" marginBottom={8} marginTop={0} style={{fontSize: '15pt'}}>
                    Forgot Password
                </InlineAlert>
            </Box>
        
            <div>    
                <Button marginBottom={8} appearance="primary" intent='success'>Sign in</Button>
                <p>Don't have an account</p>
                <Button appearance="default">Create Account</Button>
            </div>
            
        </div>
      </FormField>
      
    );
  }
}