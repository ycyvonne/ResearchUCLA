export function formatContent (x){
    if(x.toString().length>350)
        return x.toString().trim().slice(0,350).concat("...")
    else
        return x.toString()
}

export function makeUppercase(x){
    return x.toString().toUpperCase()
}

export function makeCourseList(x){
    if(x.length>3)
        return x.slice(0,3);
    else
        return x;
}