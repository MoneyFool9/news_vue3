async function getNewsForPath(url){
    try{
        const res = await fetch(url),
              data = await res.json();
            
        return data;
    } catch(err){
        throw new Error(err.message);
    }
}

export default getNewsForPath;


  