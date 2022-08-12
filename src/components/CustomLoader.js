import Skeleton  , { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CustomLoader = () => {
    return (
        <div className='loader'>
            <SkeletonTheme baseColor="red" highlightColor="white">
                <Skeleton count={5} height={20}/>
                <Skeleton count={5} height={20}/>
                <Skeleton count={5} height={20}/>
                <Skeleton count={5} height={20}/>
            </SkeletonTheme>
        </div>
    )
}
export default CustomLoader