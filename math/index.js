const calculateArea = require('./calculateArea');
const calculatePerimeter = require('./calculatePerimeter');

const superCalculator = (shape, typeCalcul, parameters, answersChoiceTriangle = null) => {
    switch(typeCalcul){
        case 'périmètre':
            calculatePerimeter(shape, parameters, answersChoiceTriangle);
            break;
        case 'aire':
            calculateArea(shape, parameters, answersChoiceTriangle);
            break;
    }
}
module.exports = superCalculator;