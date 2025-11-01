
export type WithId = {
    id: number
}

/**
 * 
 * @param obj - The object where to get the ID from.
 * @returns - The next free id in the object, starting at one.
 */
export function getNextFreeId<Type extends WithId>(obj: Type[]) {
let hash: Record<number, boolean>= {};
    obj.forEach((element) => {
    hash[element.id] = true;
    })
    for (let i = 1; i < obj.length; i++) {
        if (hash[i] != true) {
            return i;
        }
    }
return obj.length + 1;
}
