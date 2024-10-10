import getNewsForPath from "./getNewsForPath";

async function getCarNews(){
    return await getNewsForPath('/car-news')
}

export default getCarNews