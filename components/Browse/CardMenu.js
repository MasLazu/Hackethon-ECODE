import star from "../../assets/Star.png";
import Image from "next/image";

export default function CardMenu({ image, caption, rating, active }) {
  if (active) {
    return (
      <div className="card-menu lg:mx-3 md:mx-2 mx-4 my-3 rounded-xl shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] lg:p-4 p-4 md:p-2 flex flex-col items-center border-b-8 border-main">
        <Image
          src={image}
          width={540}
          height={480}
          className="w-[100%] h-auto"
        />
        <h3 className="lg:text-2xl text-2xl md:text-lg mt-2 text-center">
          {caption}
        </h3>
        <div className="card-star my-2 flex">
          {Array.from({ length: rating }, () => "").map((nothing) => {
            return (
              <Image
                src={star}
                width={114}
                height={102}
                className="w-4 h-4 mr-1"
              />
            );
          })}
        </div>
        <div className="price flex items-center">
          <p className="text-main text-2xl lg:text-2xl md:text-lg">$100</p>
          <p className="line-through text-[#979797] mx-1">20</p>
        </div>
      </div>
    );
  }
  return (
    <div className="card-menu lg:mx-3 md:mx-2 mx-4 my-3 rounded-xl shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] lg:p-4 p-4 md:p-2 flex flex-col items-center">
      <Image src={image} width={540} height={480} className="w-[100%] h-auto" />
      <h3 className="lg:text-2xl text-2xl md:text-lg mt-2 text-center">
        {caption}
      </h3>
      <div className="card-star my-2 flex">
        {Array.from({ length: rating }, () => "").map((nothing) => {
          return (
            <Image
              src={star}
              width={114}
              height={102}
              className="w-4 h-4 mr-1"
            />
          );
        })}
      </div>
      <div className="price flex items-center">
        <p className="text-main text-2xl lg:text-2xl md:text-lg">$100</p>
        <p className="line-through text-[#979797] mx-1">20</p>
      </div>
    </div>
  );
}
