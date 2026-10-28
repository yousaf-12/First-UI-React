import Navbar from './navbar'
import PageContent from './pageContent'

const Section1 = (props) =>{
    return <div className='h-screen w-full '>
        <Navbar />
        <PageContent users={props.users}/>
    </div>
}

export default Section1