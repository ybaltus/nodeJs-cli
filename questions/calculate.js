const calculateQuestion = () => ({
    type: 'checkbox',
    message: 'Que voulez vous calculer ?',
    name: 'calculate',
    choices: ['Périmètre', 'Aire'],
    filter: (values) => {
        return values.map((value)=> value.toLowerCase());
    },
    default: ['Aire']
});

const inputLengthQuestion = (shape) => ({
    type: "input",
    name: "longueur",
    message: `Quelle est la longueur du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
});

const inputHeightQuestion = (shape) => ({
    type: "input",
    name: "hauteur",
    message: `Quelle est la hauteur du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
});
const inputSideQuestion = (shape) => ({
    type: "input",
    name: "side",
    message: `Quelle est la longueur du côté du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
});

const inputRadiusQuestion = (shape) => ({
    type: "input",
    name: "radius",
    message: `Quelle est le rayon du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
});

const inputBaseABHeightQuestion = (shape) => ([{
    type: "input",
    name: "baseA",
    message: `Quelle est la longueur de la base a du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
},
    {
        type: "input",
        name: "baseB",
        message: `Quelle est la longueur de la base B du ${shape}?`,
        validate: (value) => {
            return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
        },
        filter: Number,
    },
    {
        type: "input",
        name: "hauteur",
        message: `Quelle est la hauteur du ${shape}?`,
        validate: (value) => {
            return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
        },
        filter: Number,
    },
]);

const inputTriangleQuestion = (shape) => ([{
    type: "input",
    name: "sideA",
    message: `Quelle est la longueur du coté A du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
    },
    {
    type: "input",
    name: "sideB",
    message: `Quelle est la longueur du coté B du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
},
    {
    type: "input",
    name: "sideC",
    message: `Quelle est la longueur du coté C du ${shape}?`,
    validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
    },
    filter: Number,
},
]);

module.exports = {
    calculateQuestion,
    inputHeightQuestion,
    inputLengthQuestion,
    inputRadiusQuestion,
    inputBaseABHeightQuestion,
    inputSideQuestion,
    inputTriangleQuestion
};