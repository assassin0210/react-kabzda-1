export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {

    return items.map(u => {
        debugger;
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
