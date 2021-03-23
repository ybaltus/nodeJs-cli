const calculateArea = (shape, parameters, answersChoiceTriangle=null) => {
    let area = 0;
    switch(shape){
        case 'carré':
        case 'rectangle':
        case 'losange':
        case 'parallélogramme':
            area = parameters.longueur * parameters.hauteur;
            break;
        case 'triangle':
            area = (parameters.longueur * parameters.hauteur) / 2;
            break;
        case 'cercle':
            area = (parameters.radius*parameters.radius) * Math.PI;
            break;
        case 'trapèze':
            area = ((parameters.baseA*parameters.baseB)*parameters.hauteur)/2;
            break;
    }

    if(answersChoiceTriangle){
        console.log(`L'air du ${shape} ${answersChoiceTriangle} est: ${area}`);
    }else{
        console.log(`L'air du ${shape} est: ${area}`);
    }
};

module.exports = calculateArea;