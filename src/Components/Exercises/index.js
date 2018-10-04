import React, {Fragment} from 'react'
import {Grid, Paper, Typography, List, ListItem, ListItemText} from '@material-ui/core'


const style = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 700,
        overflow: 'auto'
    }
};

export default ({
                    exercises,
                    category,
                    onSelect,
                    exercise: {
                        id,
                        title = 'Welcome!',
                        description = 'Please select an exercise from the list on the left.'
                    }
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
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
                {/*{JSON.stringify(exercises.map(exercise => exercise[0]), null, 4)}*/}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper}>

                <Typography
                    variant="display1"
                >
                    {title}
                </Typography>
                <Typography
                    variant="display1"
                    style={{marginTop: 20}}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
