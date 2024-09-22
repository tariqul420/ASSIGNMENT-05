function inputValue(id) {
    const value = document.getElementById(id).value;
    return parseFloat(value.toFixed(2));
};