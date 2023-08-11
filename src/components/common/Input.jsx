import React , {useState} from "react";

const Input = ({ value, handler,id, type , handleBlur , text , placeholder , error }) => {
  return (
    <>
    <div className={`border-[2px] transition-colors ease-in duration-300 dark:border-zinc-600  relative mt-5 rounded-lg h-9 ${error && 'border-red-400 dark:border-red-400'}`}>
      <label className="absolute top-[-8px] left-[20px] bg-white dark:bg-zinc-950 px-2 text-xs">
        {text}
      </label>
      <input
      id={id}
      onBlur={handleBlur}
        value={value}
        onChange={handler}
        placeholder={placeholder}
        type={type}
        className="border-none text-sm p-2 pt-3 outline-none h-[100%] dark:bg-zinc-950 w-full rounded-lg focus:outline-1 transition-all ease-in "
      />
    </div>
    {error && <span className="text-xs mt-1 text-red-400">{error}</span>}
    </>
  );
};

export default Input;
