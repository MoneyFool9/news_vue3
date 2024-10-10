function setLocalStorage(key, data){
    window.localStorage.setItem(key, JSON.stringify(data))
}

function getLocalStorage(key){
    return JSON.parse(window.localStorage.getItem(key))
}

function appendLocalStorage(key, data){
    const dataArr = getLocalStorage(key)

    if(!dataArr){
        setLocalStorage(key, [data])
    }

    dataArr.push(data)
    setLocalStorage(key, dataArr)
}

export {
    getLocalStorage,
    setLocalStorage,
    appendLocalStorage
}