export const checkDB = () => {
    if (!window.localStorage.getItem("DB"))
        window.localStorage.setItem("DB", JSON.stringify({}))
}

export const clearDB = () => {
    window.localStorage.setItem("DB", JSON.stringify({}))
}

export const getDB = () => {
    checkDB()
    return JSON.parse(window.localStorage.getItem("DB"))
}

export const saveDB = (DB) => {
    window.localStorage.setItem("DB", JSON.stringify(DB))
}