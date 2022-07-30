import React, {Component} from 'react';
import '../App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class Confirm extends Component{
	continue = (e) =>{
		e.preventDefault();
		this.props.nextStep();
	}
	render(){
		const { classes } = this.props;
		const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
		return(
			<MuiThemeProvider>
				<React.Fragment>
					<h1>Your Data</h1>
					<List className="Confirm">
					 	<ListItem>
							 <ListItemText
							 primary="First Name"
							 secondary={firstName}
							 />
					 	</ListItem>
					 	<ListItem>
							 <ListItemText
							 primary="Last Name"
							 secondary={lastName}
							 />
					 	</ListItem>
					 	<ListItem>
							 <ListItemText
							 primary="E-mail"
							 secondary={email}
							 />
					 	</ListItem>
					 	<ListItem>
							 <ListItemText
							 primary="Occupation"
							 secondary={occupation}
							 />
					 	</ListItem>
					 	<ListItem>
							 <ListItemText
							 primary="City"
							 secondary={city}
							 />
					 	</ListItem>
					 	<ListItem>
							 <ListItemText
							 primary="Bio"
							 secondary={bio}
							 />
					 	</ListItem>
					 </List>
					<br/><br/>
					<Button variant="contained" color="primary" onClick={this.continue}>
  					confirm & continue
					</Button>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Confirm;