const choiceTriangle = {
    type: 'expand',
    message: 'Est-ce un triangle simple ou un triangle rectangle ?',
    name: 'choiceTriangle',
    choices: [
        {
            key: 's',
            name: 'Simple',
            value: 'simple',
        },
        {
            key: 'r',
            name: 'Rectangle',
            value: 'rectangle',
        }
        ]
};

module.exports = choiceTriangle;