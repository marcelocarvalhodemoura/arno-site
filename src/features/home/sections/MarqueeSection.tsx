import { FaLeaf } from "react-icons/fa";
import { marqueeWords } from "@/content/group";

export function MarqueeSection() {
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <FaLeaf /> {word}
          </span>
        ))}
      </div>
    </div>
  );
}
