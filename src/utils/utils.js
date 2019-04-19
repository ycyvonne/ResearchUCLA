export function createDicts (area) {
    let arrayOfDict = []
    for (let i = 0 ; i < area.length ; i++) {
        arrayOfDict.push({category:area[i], selected: false});
    }
    return arrayOfDict;
}