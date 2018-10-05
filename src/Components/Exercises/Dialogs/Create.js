import React, {Component, Fragment} from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    withStyles
} from '@material-ui/core';

import {Add} from '@material-ui/icons';

import uuidv1 from 'uuid/v1';

const styles = theme => ({
    formControl: {
        width: 500
    },
});


class CreateDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open,
        })
    };


    handleChange = name => event => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: event.target.value,
            }

        });
    };

    handleSubmit = () => {
        const {exercise} = this.state;

        this.props.onCreate({
            ...exercise,
            id: uuidv1()
        });

        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    };

    render() {
        const {open, exercise: {title, description, muscles}} = this.state;
        const {classes, muscles: categories} = this.props;

        return (
            <Fragment>
                <Button
                    variant="fab"
                    onClick={this.handleToggle}
                    mini
                    style={{fontSize: 30}}
                >
                    <Add/>
                </Button>

                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle>
                        Create a new Exercise
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                        </DialogContentText>
                        <form>

                            <TextField
                                label="Title"
                                value={title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                                className={classes.formControl}
                            />
                            <br/>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="muscles">
                                    Muscles
                                </InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                >
                                    {categories.map(category =>
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <br/>
                            <TextField
                                multiline
                                rows="4"
                                label="Description"
                                value={description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                                className={classes.formControl}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="primary"
                            variant="raised"
                            onClick={this.handleSubmit}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>

            </Fragment>
        )
    }
}

export default withStyles(styles)(CreateDialog);