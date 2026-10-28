import HeroContent from "./heroContent";
import ArrowContent from "./arrowContent";

const LeftContent = () =>{
    return (
        <div className="h-full w-1/3 flex flex-col justify-center">
            <HeroContent />
            < ArrowContent />
        </div>
    )
}

export default LeftContent