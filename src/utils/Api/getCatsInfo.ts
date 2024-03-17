const baseUrl = 'https://catfact.ninja/fact';

export async function getCatsInfo() {
    try{
        let response = await fetch(baseUrl , {
            method:'GET'
        })
        if(response.ok) {
            let data = await response.json();
            return data;
        } else {
            throw new Error('Упс, что-то пошло не так')
        }
    } catch(err) {
        console.error(err);
    }
}