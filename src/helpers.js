export function formatContent (x){
    if(x.toString().length>400)
        return x.toString().trim().slice(0,400).concat("...")
    else
        return x.toString()
}

export function makeUppercase(x){
    return x.toString().toUpperCase()
}