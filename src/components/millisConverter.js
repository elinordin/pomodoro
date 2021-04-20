const millisToReadable = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const millisToObject = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    let timeObject = {minutes: minutes, seconds: seconds}
    return timeObject;
}

const objectToMillis = (object) => {
    let minutes = Math.floor(object.minutes * 60000);
    let seconds = Math.floor(object.seconds * 1000);
    return minutes + seconds;
}

export {
    millisToReadable,
    millisToObject,
    objectToMillis,
}