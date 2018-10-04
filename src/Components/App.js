import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import {muscles, exercises} from '../store'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exercises,
            exercise: {}
        };

    }

    getExerciseByMuscles() {
        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
            const {muscles} = exercise;

            exercises[muscles] = exercises[muscles]
                ? [...exercises[muscles], exercise]
                : [exercise]

            return exercises
        }, {}))
    }

    handleCategorySelected = category => {
        this.setState({
            category
        })
    }

    handleExerciseSelect = id =>
        this.setState(({exercises}) => ({
            exercise: exercises.find(ex => ex.id === id)
        }))

    render() {
        console.log(this.getExerciseByMuscles())
        const exercises = this.getExerciseByMuscles();
        const {category, exercise} = this.state;
        return (
            <Fragment>
                <Header/>

                <Exercises
                    exercise={exercise}
                    category={category}
                    exercises={exercises}
                    onSelect={this.handleExerciseSelect}
                />

                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelected}
                />
            </Fragment>
        );
    }
}

export default App;
