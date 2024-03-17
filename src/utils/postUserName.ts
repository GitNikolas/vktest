const baseUrl = 'https://api.agify.io/';

export async function postUserName(name:string, signal:AbortSignal) {
    try{
        let response = await fetch(baseUrl + `?name=${name}` , {
            method:'GET',
            signal:signal,
        })
        if(response.ok) {
            let data = await response.json();
            return data;
        } else {
            throw new Error('Упс, что-то пошло не так')
        }
    } catch(err:any) {
        if (err.name == 'AbortError') {
            throw new Error('Операция прервана');
          } else {
            throw err;
          }
    }
}