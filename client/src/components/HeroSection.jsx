import { use } from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full">
      {/* 🔳 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.backgroundImage})` }}
      />

      {/* 🔳 Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent z-10" />

      {/* 🔳 Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center gap-4 h-full px-6 md:px-16 lg:px-36 text-white">
        <img
          src={assets.DreamWorkLogo}
          alt="DreamWorks Logo"
          className="max-h-11 lg:h-11 mt-20"
        />
        <h1 className="text-5xl md:text-[50px] md:leading-[1.1] font-bold max-w-5xl
          text-[#f1f1f1] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.9)] 
          font-[Cinzel] animate-fade-in-up"
        >
          HOW TO TRAIN YOUR <br />DRAGON
        </h1>
        <div className="flex items-center gap-4 text-white text-base font-medium">
          <span>Action | Adventure | Fantasy</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-5 h-5" /> 2025
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-5 h-5" /> 2h 8m
          </div>
           </div>
           <div><p className="max-w-md text-gray-200">A Viking breaks all rules and befriends a dragon he is supposed to kill. He decides to call him Toothless .They join forces to put end to the terror that wreaks havoc in their respective worlds.</p>
           <div><br /></div>
           <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary
hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Explore Movies<ArrowRight className="w-5 h-5"/></button></div>
       
      </div>
    </div>
  );
};

export default HeroSection;
