
import RightCardContent from './rightCardContent'
const RightCard = (props) => {
    return(
        <div className="h-full w-80 overflow-hidden bg-gray-300 relative rounded-3xl">
            <img className="h-full w-full object-cover" src={props.img} alt="" />
            
            <RightCardContent tag={props.tag} desc={props.desc} id={props.idx} />
        </div>
    )
}

export default RightCard