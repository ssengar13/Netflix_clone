const Banner = () => {
    return(
      <div className="banner">
        <div className="banner__contents">
          <h1 className="banner__title mx-2">Avatar(2009) </h1>
          <div className="banner__buttons">
            <button className="banner__button mx-2">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description mx-2">
          In the 22nd century, a paraplegic Marine is dispatched to 
          the moon Pandora on a unique mission, but becomes torn between 
          following orders and protecting an alien civilization....
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    )
  }
  
  export default Banner;