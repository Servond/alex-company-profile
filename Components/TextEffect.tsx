import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Wearpack",
        1500, // wait 15s before replacing
        "Seaman Uniform",
        1500,
        "Seaman T-shirt",
        1500,
        "Custom",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#10ECCE] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
