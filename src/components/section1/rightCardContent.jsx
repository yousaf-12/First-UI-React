import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) =>{
    return(
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
                <h2 className='h-10 w-10 rounded-full flex justify-center items-center bg-white text-2xl font-semibold'>{props.id+1}</h2>
                <div>
                    <p className='text-lg leading-normal text-white mb-10 font-medium'> {props.desc} </p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-full'> {props.tag} </button>
                        <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-full cursor-pointer'><ArrowRight /></button>
                    </div>
                </div>
            </div>
    )
}

export default RightCardContent