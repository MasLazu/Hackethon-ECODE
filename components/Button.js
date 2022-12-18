export default function Button({ caption }) {
  return (
    <button className="bg-main lg:py-4 py-3 text-[#fff] active:brightness-90 xl:px-9 lg:px-6 px-3 rounded-lg shadow-lg font-semibold lg:text-lg text-sm leading-[1.5rem] lg:leading-[1.75rem]">
      {caption}
    </button>
  );
}
