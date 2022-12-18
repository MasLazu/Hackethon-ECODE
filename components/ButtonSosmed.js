import Image from "next/image";

export default function ButtonSosmed({ image }) {
  return (
    <button className="button-sosmed bg-main rounded-lg p-2 mr-4 active:brightness-90">
      <Image src={image} width={100} height={100} className="w-6 h-6" />
    </button>
  );
}
