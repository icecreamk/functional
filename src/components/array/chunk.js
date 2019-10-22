function chunk(arr, len) {
    const result = []
    let sub = []
    arr.forEach((item, idx) => {
        if (idx % len === 0) {
            sub.length > 0 && result.push(sub)
            sub = [item]
        } else {
            sub.push(item)
        }
    });
    sub.length > 0 && result.push(sub)
    return result
}

export {
    chunk
}