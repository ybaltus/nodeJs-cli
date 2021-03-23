const {
    inputLengthQuestion, inputHeightQuestion, inputRadiusQuestion, inputBaseABHeightQuestion,
    inputSideQuestion, inputTriangleQuestion
} = require('./calculate');

const step2HeightLengthQuestions = (shape) => ([
    inputLengthQuestion(shape),
    inputHeightQuestion(shape)
]);

const step2RadiusQuestions = (shape) => (
    inputRadiusQuestion(shape)
);

const step2BaseABHeightQuestions = (shape) => (
    inputBaseABHeightQuestion(shape)
);

const step2SideQuestions = (shape) => (
    inputSideQuestion(shape)
);

const step2TrianglePerimeterQuestions = (shape) => (
    inputTriangleQuestion(shape)
);

const selectStep2Questions = (shape, typeCalc) => {
    if (typeCalc === "aire") {
        switch (shape) {
            case 'cercle':
                return step2RadiusQuestions(shape);
                break;
            case 'trapèze':
                return step2BaseABHeightQuestions(shape);
                break;
            default:
                return step2HeightLengthQuestions(shape);
        }
    } else if(typeCalc === "périmètre"){
        switch (shape) {
            case 'carré':
            case 'losange':
                return step2SideQuestions(shape);
                break;
            case 'triangle':
                return step2TrianglePerimeterQuestions(shape);
                break;
            case 'cercle':
                return step2RadiusQuestions(shape);
                break;
            case 'trapèze':
                return step2BaseABHeightQuestions(shape);
                break;
            default:
                return step2HeightLengthQuestions(shape);
        }
    }
}

module.exports = selectStep2Questions;