import React, {Component} from 'react';
import '../App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class Success extends Component{
	render(){
		return(
				<React.Fragment>
					<h1>Thank you for Your Submission</h1>
					<p>You will get an email for further instruction</p> 
				</React.Fragment>
		);
	}
}

export default Success;