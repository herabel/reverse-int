module.exports = reverse = (number) =>
    +[...String(number)]
        .filter((char) => char !== "-")
        .reverse()
        .join("");
