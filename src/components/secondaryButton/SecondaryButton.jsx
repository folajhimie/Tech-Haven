
// eslint-disable-next-line react/prop-types
const SecondaryButton = ({text}) => {
  return (
    <div
      className="cursor rounded-md bg-lime-500 font-medium px-8 py-2 text-slate-600 sm:text-xs xs:text-[14px] sm:py-3 sm:px-6 lg:text-[0.75rem] xl:text-[0.95rem] lg:w-fit xl:w-fit"
    >
      {text}
    </div>
  );
};

export default SecondaryButton;
