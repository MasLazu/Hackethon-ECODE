import Image from "next/image";

export default function CardNews({ image, caption, desc }) {
  return (
    <div className="card-News p-3 mb-10 md:mb-0">
      <Image src={image} width={740} height={440} className="w-[100%] h-auto" />
      <h4 className="text-[#212529] text-2xl lg:text-2xl md:text-xl mb-4 mt-5">
        {caption}
      </h4>
      <p className="text-[#545454] text-xl lg:text-xl md:text-base">{desc}</p>
      <button className="text-accent font-semibold mt-4 active:brightness-90">
        Read More
      </button>
    </div>
  );
}
