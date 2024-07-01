import './Homepage.css'

function Homepage(){
    return (
        <div className='homepage_container'>

            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi ,</span> my name is     </p>
                    <p className='homepage_left_h2'>Raj Chauhan</p>

                    <p className='homepage_left_h3'>Developer at<span className='red_color'>ABC pvt limited</span></p>

            </div>
            <p className='homepage_left_description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quos suscipit quo assumenda, ab consequuntur ipsum ex qui accusantium adipisci, optio nesciunt nisi dolores similique quae libero provident. Quo, exercitationem?
            </p>

            <div className='homepage_right'>
                <img src='https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif' alt='GIF'/>
            </div>
        </div>
    )
}
export default Homepage