import getNewsForPath from "./getNewsForPath";

async function getEntertainmentNews() {
    return await getNewsForPath('/entertainment-news')
}

export default getEntertainmentNews