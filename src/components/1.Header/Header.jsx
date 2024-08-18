export const Header = () =>
{
    return(
        <div className='Header'>
            <div className="Left_Header">
                JW
            </div>

            <div className="Middle_Header">
                Header (Always stays at top of page)
            </div>

            <div className="Right_Header">
                <div className="Right_Header_Semi_Circle" />
                <div className="Right_Header_Rectangle">
                    <span className="text">JW</span>
                </div>
            </div>
        </div>
    )
}