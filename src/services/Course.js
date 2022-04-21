export const getCourses = async () => {
    try{
        const resp = await fetch(`${process.env.REACT_APP_BACKEND}/course`, {
             headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
        });
        const respJson = await resp.json();
        return respJson
    }catch(e){
        console.log(e.message);
    }
    return null;
}