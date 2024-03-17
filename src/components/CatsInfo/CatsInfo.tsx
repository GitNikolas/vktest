import React, { useState, useRef } from 'react';
import { getCatsInfo } from '../../utils/Api/getCatsInfo';
import './CatsInfo.css';

function CatsInfo() {

    const[ values,setValues ] = useState({inputValue:''});

    function inputHandleChange(event:any) {
      const value = event.target.value;
      const name = event.target.name;
      setValues({...values, [name]:value});
  }

    async function handleUpdateInfo(event:any) {
        event.preventDefault();
        const data = await getCatsInfo();
        setValues({...values, inputValue: data.fact});
    }
    
  return (
    <form className="cats-info" onSubmit={handleUpdateInfo}>
        <button className="cats-info_update-button" type='submit'>Узнать факт о кошках</button>
        <textarea name='inputValue' className="cats-info_textfield" value={values.inputValue} onChange={inputHandleChange}></textarea>
    </form>
  );
}

export default CatsInfo;
