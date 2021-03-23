const calculatePerimeter = (shape, parameters, answersChoiceTriangle=null) => {
    let perimeter = 0;
    switch(shape){
        case 'carré':
        case 'losange':
            perimeter = parameters.side * 4;
            break;
        case 'rectangle':
        case 'parallélogramme':
            perimeter = (parameters.longueur + parameters.hauteur)*2;
            break;
        case 'triangle':
            perimeter = parameters.sideA + parameters.sideB + parameters.sideC;
            break;
        case 'cercle':
            perimeter = (parameters.radius + parameters.radius) * Math.PI;
            break;
        case 'trapèze':
            perimeter = ((parameters.baseA*parameters.baseB)*parameters.hauteur)/2;
            break;
    }

    if(answersChoiceTriangle){
        console.log(`Le périmètre du ${shape} ${answersChoiceTriangle} est: ${perimeter}`);
    }else{
        console.log(`Le périmètre du ${shape} est: ${perimeter}`);
    }
};

module.exports = calculatePerimeter;