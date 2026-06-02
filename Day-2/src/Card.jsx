import twefeimage from './assets/twefe.jpeg'
function Card(){
    return(
        <div className="Card">
            <img src={twefeimage} alt="image" />
            <h2 className='Name'>Soyuz Dangol</h2>
            <p className='description'>Currently learning React</p>
        </div>
    );
}

export default Card;