import React, {Component} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class FormUserDetails extends Component{
	continue = (e) =>{
		e.preventDefault();
		this.props.nextStep();
	}
	render(){
		const { classes } = this.props;
		const { values, handleChange } = this.props;
		return(
			<MuiThemeProvider>
				<React.Fragment>
					<h1>Please Enter Your Basic Details</h1>
					<TextField 
					id="standard-basic"
					label="First Name"
					onChange = {handleChange('firstName')}
					defaultValue = {values.firstName}
					/>
					<br/><br/>
					<TextField 
					id="standard-basic"
					label="Last Name"
					onChange = {handleChange('lastName')}
					defaultValue = {values.lastName}
					/>
					<br/><br/>
					<TextField 
					id="standard-basic"
					label="E-mail"
					onChange = {handleChange('email')}
					defaultValue = {values.email}
					/>
					<br/><br/>
					<Button variant="contained" color="primary" onClick={this.continue}>
  					continue
					</Button>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormUserDetails;