import React, {Component} from 'react'
import {TextField, Select, Button} from '@material-ui/core'
import {FormControl} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {MenuItem} from '@material-ui/core'
import {withStyles} from '@material-ui/core'
import uuidv1 from "uuid/v1";

const styles = theme => ({
    FormControl: {
        width: 300
    }
});

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitState()
    }
    state = this.getInitState();

    getInitState() {
        const {exercise} = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    componentWillReceiveProps({exercise}) {
        this.setState({
            ...exercise
        })
    }

    handleChange = name => ({target: {value}}) =>
        this.setState({
            [name]: value
        });

    handleSubmit = () => {
        // TODO: validate

        this.props.onSubmit({
            id: uuidv1(),
            ...this.state
        });

        this.setState(this.getInitState())
    };

    render() {
        const {title, description, muscles} = this.state;
        const {classes, exercise, muscles: categories} = this.props;

        return <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
            />
            <br/>
            <FormControl className={classes.FormControl}>
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
                className={classes.FormControl}
            />
            <br/>
            <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
            >
                {exercise ? 'Edit' : 'Create'}
            </Button>
        </form>
    }
}

export default withStyles(styles)(Form)