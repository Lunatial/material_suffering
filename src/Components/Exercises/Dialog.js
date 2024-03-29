import React, {Component, Fragment} from 'react';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@material-ui/core';

import {Add} from '@material-ui/icons';

import Form from './Form'

class CreateDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open,
        })
    };

    handleFormSubmit = exercise => {
        this.handleToggle();

        this.props.onCreate(exercise)
    };

    render() {
        const {open} = this.state;
        const {muscles} = this.props;
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
                    fullWidth
                    maxWidth='xs'
                >
                    <DialogTitle>
                        Create a new Exercise
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                        </DialogContentText>
                        {<Form
                            muscles={muscles}
                            onSubmit={this.handleFormSubmit}
                        />}
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

export default CreateDialog;