const {calculateQuestion} = require('./calculate');
const shapeQuestions = require('./shapes');

const step1Questions = [
    calculateQuestion(),
    shapeQuestions
];

module.exports = step1Questions;