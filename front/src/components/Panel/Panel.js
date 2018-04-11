import React, { Component } from 'react';

// MATERIAL
import Grid from 'material-ui/Grid';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableDiv: false
        };
    }

    componentWillMount = () => {
        this.props.getConfig();
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };
    

    render() {

        const states = this.props.mappedConfigState;
        console.log(states);

        var divStyle = {
            display: this.state.disableDiv ? 'block':'none'
        };

        return (
            <Grid container>
                <Grid item>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="true" control={<Radio color="primary" />} label="Obtaine an IP address automatically (DHCP/BootP)" />
                        <FormControlLabel value="false" control={<Radio color="primary" />} label="Use the following IP address:" />
                    </RadioGroup>

                    <FormGroup>
                        
                        <FormControl aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Name</InputLabel>
                            <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
                            <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                        </FormControl>

                        <FormControl aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Name</InputLabel>
                            <Input required id="name-helper" value={this.state.name} onChange={this.handleChange} />
                            <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                        </FormControl>
                        
                        <FormControl aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Name</InputLabel>
                            <Input required id="name-helper" value={this.state.name} onChange={this.handleChange} />
                            <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                        </FormControl>
                    </FormGroup>

                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="true" control={<Radio color="primary" />} label="Obtaine DNS automatically" />
                        <FormControlLabel value="false" control={<Radio color="primary" />} label="Use the following DS server address:" />
                    </RadioGroup>
                    <FormGroup>

                        <FormControl aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Name</InputLabel>
                            <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
                            <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                        </FormControl>

                        <FormControl aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Name</InputLabel>
                            <Input required id="name-helper" value={this.state.name} onChange={this.handleChange} />
                            <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
                        </FormControl>
                    </FormGroup>

                </Grid>
                <Grid item>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="true" control={<Radio color="primary" />} label="Obtaine an IP address automatically (DHCP/BootP)" />
                        <FormControlLabel value="false" control={<Radio color="primary" />} label="Use the following IP address:" />
                    </RadioGroup>

                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="true" control={<Radio color="primary" />} label="Obtaine DNS automatically" />
                        <FormControlLabel value="false" control={<Radio color="primary" />} label="Use the following DS server address:" />
                    </RadioGroup>
                </Grid>

            </Grid>
        );
    }
}