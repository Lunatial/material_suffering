import uuidv1 from 'uuid/v1'

export const muscles = [
    'shoulders', 'chest', 'arms', 'back', 'butt', 'legs'
]

export const exercises = [
    {
        id: uuidv1(),
        title: 'Overhead Press',
        description: 'The press, overhead press or shoulder press is a weight training exercise with many variations, typically performed while standing, in which a weight is pressed straight upwards from racking position until the arms are locked out overhead, while the legs, lower back and abs maintain balance. The exercise helps build muscular shoulders with bigger arms.',
        muscles: 'shoulders'
    },
    {
        id: uuidv1(),
        title: 'Dips',
        description: 'Triceps exercise...',
        muscles: 'arms'
    },
    {
        id: uuidv1(),
        title: 'Barbell Curls',
        description: 'Biceps exercise...',
        muscles: 'arms'
    },
    {
        'id': 'bench-press',
        title: 'Bench Press',
        description: 'Chest exercise...',
        muscles: 'chest'
    },
    {
        id: uuidv1(),
        title: 'Pull Ups',
        description: 'Back and biceps exercise...',
        muscles: 'back'
    },
    {
        id: uuidv1(),
        title: 'Deadlifts',
        description: 'Back and leg exercise...',
        muscles: 'back'
    },
    {
        id: uuidv1(),
        title: 'Squats',
        description: 'Legs exercise...',
        muscles: 'legs'
    },
    {
        id: uuidv1(),
        title: 'Hydrants With Leg Extension',
        description: 'Hydrants With Leg Extension exercise...',
        muscles: 'butt'
    },
]