import React, { useEffect, useState } from 'react';
import { postUserName } from '../../utils/postUserName';
import './UserAge.css';
const abortController = new AbortController();

function UserAge() {

const[ values,setValue ] = useState({name:''});
const [prevName, setPrevName] = useState('');
const [age, setAge] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');


    function inputHandleChange(event:any) {
        const value = event.target.value;
        const name = event.target.name;
        setValue({...values, [name]:value});
    }

    async function handleUpdateInfo(event:any) {
        try{
            setIsLoading(true);
            event.preventDefault();
            if(prevName === values.name) {
                throw new Error('Введите новое имя')
            }
            const uncludeNumber = /[0-9]/g.test(values.name);
            if(!uncludeNumber) {
              const data = await postUserName(values.name, abortController.signal);
              if(data.age === null) {
                setAge(0);
                throw new Error('Имя пользователя не найдено')
              }
              setPrevName(values.name);
              setAge(data.age);
            } else {
              throw new Error('Введите корректное имя');
            }
        }
        catch(err:any){
            setErrorMessage(err.message);
            setTimeout(() => {setErrorMessage('')}, 5000);
        }
        finally{
            setIsLoading(false); 
        }
    }
    
  return (
    <>
      <form className="user-age" onSubmit={handleUpdateInfo}>
        <input
          onChange={inputHandleChange}
          value={values.name}
          name="name"
        ></input>
        <button className="user-age_update-button" type="submit">
          Узнать возраст
        </button>
        {isLoading && <button className="user-age_update-button" onClick={() => {abortController.abort()}}>Остановить загрузку</button>}
        <p className="user-age_error-message">{errorMessage}</p>
      </form>
      <p className="user-age_age-field">{`Возраст: ${age}`}</p>
    </>
  );
}

export default UserAge;
