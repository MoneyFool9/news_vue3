import getNewsForPath from "./getNewsForPath";

async function getSportNews(){
    return await getNewsForPath('/sport-news')
}

export default getSportNews