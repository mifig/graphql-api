import React from 'react';

function FormInput({id, name, type, label, error, hidden, inputValue}: {type: "tel" | "email" | "button" | "checkbox" | "date" | "text" | "number" | "password", label: string, error: string, id?: string, name?: string, hidden?: boolean, inputValue?: any}) {
  return (
    <div className={`flex flex-col ${hidden ? "hidden": undefined}`}>
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} type={type} className={`p-2 ${error ? "border-red-400 border-2 rounded-md" : undefined}`} value={inputValue ? inputValue : undefined}/>
    </div>
  )
}

export default FormInput;
