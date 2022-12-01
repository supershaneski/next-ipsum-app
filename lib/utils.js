
export function shuffle(array) {

    let arr = array.slice(0)
    
    for(let i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}

export const getParagraph = (array, count) => {

    const safeCount = isNaN(count) || count.length === 0 ? 1 : parseInt(count)

    array = shuffle(array)

    return array.filter((_, i) => i < safeCount)
}
