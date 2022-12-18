import Image from "next/image";

export default function CardReason({ image, caption, desc, active }) {
  if (active) {
    return (
      <div className="mx-4 md:mx-2 lg:mx-4 my-3 various-menu rounded-2xl shadow-xl border-b-8 border-main flex flex-col items-center px-6 lg:px-6 md:px-3 py-14 lg:py-14 md:py-8">
        <Image
          src={image}
          width={80}
          height={80}
          className="h-20 w-auto lg:h-24"
        />
        <h4 className="text-center text-[1.6rem] lg:text-[1.6rem] md:text-xl my-3 lg:my-4">
          {caption}
        </h4>
        <p className="text-center lg:text-xl text-lg md:text-base text-[#636362]">
          {desc}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-2 lg:mx-4 my-3 various-menu rounded-2xl bg-remang flex flex-col items-center px-6 lg:px-6 md:px-3 py-14 lg:py-14 md:py-8">
      <Image
        src={image}
        width={80}
        height={80}
        className="h-20 w-auto lg:h-24"
      />
      <h4 className="text-center text-[1.6rem] lg:text-[1.6rem] md:text-xl my-3 lg:my-4">
        {caption}
      </h4>
      <p className="text-center lg:text-xl text-lg md:text-base text-[#636362]">
        {desc}
      </p>
    </div>
  );
}
