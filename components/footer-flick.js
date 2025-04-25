import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FooterFlick({ images }) {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const speed = 350;

    const i_id = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, speed);

    return () => clearInterval(i_id);
  }, [images.length]); // ✅ include image count as dependency

  return (
    <div className="w-full h-full">
      {images.map((e, i) => (
        <div
          key={i}
          ref={ref}
          className={`block w-full h-full ${
            i === 0 ? "relative" : "absolute inset-0"
          } ${i === currentImage ? "z-[10]" : "z-[1] opacity-0"}`}
        >
          <Image
            fill
            quality={80}
            src={e}
            alt={`Nottingham image ${i + 1}`} // ✅ now unique & informative
            className="w-full h-full absolute inset-0 object-cover object-center scale-[1.05]"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
