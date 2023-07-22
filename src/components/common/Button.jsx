
const Button = ({text , w , h , dark}) => {
  const width = 'w-'+w
  return (
    <button className={`${width} rounded-lg dark:drop-shadow-none drop-shadow-lg text-white font-light text-sm dark:bg-zinc-800  ${dark ? 'bg-zinc-800' :  'bg-black'} p-2`}>
      {text}
    </button>
  );
};

export default Button;
