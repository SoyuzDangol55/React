import twefeimage from './assets/twefe.jpeg'
function Card(){
    return(
        <div className="Card">
            <img src={twefeimage} alt="image" />
            <h2>Soyuz Dangol</h2>
            <p>Currently learning React</p>
        </div>
    );
}

export default Card;