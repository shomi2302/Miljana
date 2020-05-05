import React from 'react';
import './inputblock.css'

const InputBlock = ({type,labelName,labelConent,required, value, handleFields}) => (
  <div className="input-block">
    <input onChange={handleFields} value={value} type={type} name={labelName} required={required} autoComplete="off" />
    <label className="form-label">
      <span className="label-content">{labelConent}</span>
    </label>
  </div>
);

export default InputBlock;
