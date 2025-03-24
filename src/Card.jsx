import profilepic from './assets/react.svg'
function Card(){

    return(

        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"></img>
            <h2 className="card-title">Bro code</h2>
            <p className="card-text">Anil Tutorial</p>

        </div>
    );
}

export default Card