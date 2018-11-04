import React from 'react';
import { FormField, TextInput, Label, InlineAlert, Button, Pane, Text } from 'evergreen-ui';
import Box from 'ui-box';
import logo from '../logo/AgroeasyLogo.png';
import '../home.css';

export default class Signup extends React.Component {
  render() {
    return (
        <FormField display="flex" alignItems="center" justifyContent="center" style={{marginTop:'70px'}}>
        <div>
            <span style={{fontWeight: 'bold', fontSize: '20pt', margin: '500px auto'}}>AgroEasy</span>
            <img src={logo} alt="logo"  style={{width: '60px', height: '30px'}}/>
            <p style={{fontSize: '20pt'}}>Sign in to your account</p>

            <div>
                <Text style={{fontSize: '10pt', marginBottom: '70px'}}>* required field</Text>
                <Box>
                    <Box marginBottom={15}>
                        <Label size={500} display="block" marginBottom={8}>
                            First name *
                        </Label>
                        <TextInput height={45} width={300} />
                    </Box>
                    <Box marginBottom={15}>
                        <Label size={500} display="block" marginBottom={8}>
                            Last name *
                        </Label>
                        <TextInput  height={45} width={300} />
                    </Box>
                    <Box marginBottom={15}>
                        <Label size={500} display="block" marginBottom={8}>
                            Location *
                        </Label>
                        <TextInput height={45} width={300} />
                    </Box>
                    <Box marginBottom={15}>
                        <Label size={500} display="block" marginBottom={8}>
                            Email address *
                        </Label>
                        <TextInput height={45} width={300} />
                    </Box>
                    <Box marginBottom={15}>
                        <Label size={500} display="block" marginBottom={8}>
                            Password *
                        </Label>
                        <TextInput height={45} width={300} marginBottom={2} />
                    </Box>
                </Box>
        
                <div> 
                    <Button marginRight={12} marginBottom={8} appearance="primary" intent="success">Create Account</Button>   
                    <p>Already have an account</p>
                    <Button marginRight={12} appearance="default">Sign in</Button>
                    
                </div>
            </div>
        </div>
      </FormField>
    );
  }
}