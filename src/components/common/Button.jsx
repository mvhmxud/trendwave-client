
const Button = ({text , w , h , dark , handler , type , loading , disabled}) => {
  const width = 'w-'+w
  return (
    <button type={type} disabled={disabled || loading? 1 : 0} onClick={handler} className={`${width} ${loading &&'disabled:cursor-wait'} disabled:bg-zinc-600 disabled:text-zinc-400 rounded-lg dark:drop-shadow-none drop-shadow-lg text-white font-light text-sm dark:bg-zinc-800  ${dark ? 'bg-zinc-900' :  'bg-black'} p-2`}>
      {text}
    </button>
  );
};

export default Button;
