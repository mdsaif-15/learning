const userInput = () => {
    return React.createElement('div', { className: 'inputDiv' },
        React.createElement('input', { className: 'input', type: 'number', placeholder: 'Enter Input' })
    )
};

export default userInput;