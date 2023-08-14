import React , {useState} from "react";

const Input = ({ value, theme2,handler,id, type , handleBlur , text , placeholder , error  ,disabled}) => {
  return (
    <>
    <div className={`border-[2px] w-full transition-colors ease-in duration-200 dark:border-zinc-600  relative mt-5 rounded-lg h-9 ${error && 'border-red-400 dark:border-red-400'}`}>
      <label className={`absolute top-[-8px] left-[20px]  ${theme2 ? 'bg-zinc-50 dark:bg-zinc-800' : 'bg-white  dark:bg-zinc-950'}  px-2 text-xs`}>
        {text}
      </label>
      <input
      disabled={disabled}
      id={id}
      onBlur={handleBlur}
        value={value}
        onChange={handler}
        placeholder={placeholder}
        type={type}
        className={`border-none    ${theme2 ? 'bg-zinc-50 dark:bg-zinc-800' : 'bg-white  dark:bg-zinc-950'} text-sm p-2 pt-3 outline-none h-[100%]  w-full rounded-lg focus:outline-1 transition-all ease-in ${disabled && 'text-zinc-500'} `}
      />
    </div>
    {error && <span className="text-xs mt-1 text-red-400">{error}</span>}
    </>
  );
};

export default Input;
