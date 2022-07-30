import React, {Component} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class FormPersonalDetails extends Component{
	continue = (e) =>{
		e.preventDefault();
		this.props.nextStep();
	}

	back = (e) =>{
		e.preventDefault();
		this.props.prevStep();
	}

	render(){
		const { classes } = this.props;
		const { values, handleChange } = this.props;
		return(
			<MuiThemeProvider>
				<React.Fragment>
					<h1>Please Enter Your Personal Details</h1>
					<TextField 
					id="standard-basic"
					label="Occupation"
					onChange = {handleChange('occupation')}
					defaultValue = {values.occupation}
					/>
					<br/><br/>
					<TextField 
					id="standard-basic"
					label="City"
					onChange = {handleChange('city')}
					defaultValue = {values.city}
					/>
					<br/><br/>
					<TextField 
					id="standard-basic"
					label="Bio"
					onChange = {handleChange('bio')}
					defaultValue = {values.bio}
					/>
					<br/><br/>
					<Button variant="contained" color="primary" onClick={this.continue}>
  					continue
					</Button>
					<Button variant="contained" color="secondary" onClick={this.back}>
  					Back
					</Button>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormPersonalDetails;