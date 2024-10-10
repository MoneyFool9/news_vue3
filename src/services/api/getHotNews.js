import getNewsForPath from "./getNewsForPath";

async function getHotNews(){
    return await getNewsForPath('/hot-news')
}

export default getHotNews