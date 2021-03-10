import React, {Component} from 'react';
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomCode: "",
            error: ""
        };

        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.roomButtonPressed = this.roomButtonPressed.bind(this);
    }

    render() {
        const { roomCode, error } = this.state;

        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">Join a Room</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField 
                        error={error}
                        label="Code"
                        placeholder="Enter a Room Code"
                        value={roomCode} 
                        helperText={error}
                        variant="outlined"
                        onChange={this.handleTextFieldChange} />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="primary" onClick={this.roomButtonPressed}>Enter Room</Button>
                    <Button variant="contained" color="primary" to="/" component={Link}>Back</Button>
                </Grid>
            </Grid>
        );
    }

    handleTextFieldChange(evt) {
        this.setState({roomCode: evt.target.value})
    }

    roomButtonPressed() {
        const reqOpts = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: this.state.roomCode
            })
        };

        fetch("/api/join-room", reqOpts).then(res => {
            if (res.ok) this.props.history.push(`/room/${this.state.roomCode}`);
            else this.setState({error: "Room not found."});
        }).catch(err => console.log(err));
    }
}