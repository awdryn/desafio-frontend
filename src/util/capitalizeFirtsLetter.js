const capitalizeFirtsLetter = (textValue) => {
    return textValue.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

export default capitalizeFirtsLetter;