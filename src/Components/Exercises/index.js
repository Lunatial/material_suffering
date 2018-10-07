import React, {Fragment} from 'react'
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core'

import {Edit, Delete} from '@material-ui/icons';

import Form from './Form';
import uuidv1 from "uuid/v1";

const style = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 700,
        overflowY: 'auto'
    }
};

export default ({
                    muscles,
                    exercises,
                    category,
                    onEdit,
                    editMode,
                    onSelect,
                    exercise,
                    exercise: {
                        id,
                        title = 'Welcome!',
                        description = 'Please select an exercise from the list on the left.'
                    },
                    onDelete,
                    onSelectEdit
                }) =>
    <Grid container>
        <Grid item sm>
            <Paper style={style.Paper}>
                {exercises.map(([group, exercise]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                            <Typography
                                variant={"headline"}
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercise.map(({id, title}) =>
                                    <ListItem
                                        key={id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title}/>
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => onSelectEdit(id)}>
                                                <Edit/>
                                            </IconButton>
                                            <IconButton onClick={() => onDelete(id)}>
                                                <Delete/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper}>
                {editMode
                    ? <Form
                        key={uuidv1()}
                        exercise={exercise}
                        muscles={muscles}
                        onSubmit={onEdit}
                    />
                    : <Fragment>
                        <Typography
                            variant="display1"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        < Typography
                            variant="subheading"
                        >
                            {description}
                        </Typography>
                    </Fragment>
                }
            </Paper>
        </Grid>
    </Grid>
