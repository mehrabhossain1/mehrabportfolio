import Image from "next/image";
import "./MovingImage.css";
import Hero from "@/public/mehrab_munna_profile_pic.png";

const MovingImage = () => {
  return (
    <div className="swing">
      <Image src={Hero} alt="hero" width={300} height={300}></Image>
    </div>
  );
};

export default MovingImage;
