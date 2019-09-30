const objectToArray = (obj) => {
    const result = [];
    for (const key of Object.keys(obj)) {
        result.push({
            name: key,
            value: obj[key]
        })
    }
    return result;
}

export default objectToArray;