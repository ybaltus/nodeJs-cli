const inquirer = require('inquirer');
const step1Questions = require('./questions/step1');
const selectStep2Questions = require('./questions/step2');
const choiceTriangleQuestion = require('./questions/choiceTriangle');
const superCalculator = require('./math');

console.log('Bienvenu dans le calculateur !');

inquirer
    .prompt(step1Questions)
    .then(answersStep1 => {
        const shapeSelect = answersStep1.shape;
        const typesCalculs = answersStep1.calculate;

        if(shapeSelect === 'triangle'){
            inquirer
                .prompt(choiceTriangleQuestion)
                .then(answersChoiceTriangle => {
                    typesCalculs.forEach((typeCalc) => {
                        inquirer
                            .prompt(selectStep2Questions(shapeSelect, typeCalc))
                            .then(answersStep2 => {
                                superCalculator(shapeSelect, typeCalc, answersStep2, answersChoiceTriangle.choiceTriangle);
                            })
                    });
                })
        }else{
            typesCalculs.forEach((typeCalc) => {
            inquirer
                .prompt(selectStep2Questions(shapeSelect, typeCalc))
                .then(answersStep2 => {
                        superCalculator(shapeSelect, typeCalc, answersStep2);
                })
            })
        }
    })
    .catch(error => {
        if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        } else {
            // Something else went wrong
        }
    });