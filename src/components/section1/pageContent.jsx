import LeftContent from './leftContent'
import RightContent from './rightContent'


const PageContent = (props) => {
    return(
        <div className='flex gap-4 py-8 px-6 h-[90vh] items-center'>
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default PageContent