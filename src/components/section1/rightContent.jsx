import RightCard from "./rightCard"

const RightContent = (props) => {

    if(!props.users) return <p>No Data!</p>

    return(
        <div className="p-4 h-full w-2/3 flex flex-nowrap gap-8">
            {props.users.map(function(elem, id){
                return <RightCard idx={id} img={elem.img} tag={elem.tag} desc={elem.intro} />
            })}
        </div>
    )
}

export default RightContent