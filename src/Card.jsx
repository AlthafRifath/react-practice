import profilePic from './assets/Profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Avatar" style={{width: "60%"}} />
            <h2 className='card-title'>Althaf Rifath</h2>
            <p className='card-text'>Software Engineer and I play GhostRecon Breakpoint</p>
        </div>
    )
}

export default Card;