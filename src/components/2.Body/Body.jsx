export const Body = () =>
{
    const vapourImage = require('../../Assets/Images/retrowave_background.jpg')

    return(
        <div className='Body'>
            The Body of the page
            <div>
                <img src={ vapourImage } alt='VapourWave logo' className='VapourImage'/>
            </div>
        </div>
    )
}