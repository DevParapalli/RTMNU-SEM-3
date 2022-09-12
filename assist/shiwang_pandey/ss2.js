function nS(a, r = 0) {
    let t = 3735928559 ^ r;
    let s = 1103547991 ^ r;
    for (let o = 0, l; o < a.length; o++) {
        l = a.charCodeAt(o);
        t = Math.imul(t ^ l, 2654435761);
        s = Math.imul(s ^ l, 1597334677);
    }
    return (
        (t =
            Math.imul(t ^ (t >>> 16), 2246822507) ^
            Math.imul(s ^ (s >>> 13), 3266489909)),
        (s =
            Math.imul(s ^ (s >>> 16), 2246822507) ^
            Math.imul(t ^ (t >>> 13), 3266489909)),
        4294967296 * (2097151 & s) + (t >>> 0)
    );
}

//8206183026185355
for (let num_letters = 0; num_letters < 7; num_letters++) {
    for (let str = ""; str.length < num_letters; str += "a") {
        let num_letters_hash = nS(num_letters_str);
        if (num_letters_hash == 8206183026185355) {
            console.log(num_letters);
            break;
        }
    }
}
