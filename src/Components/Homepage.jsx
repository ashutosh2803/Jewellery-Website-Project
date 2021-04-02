import React from "react";
import "./Styles/Homepage.css";

const Homepage = () => {
    return (
        <div>
        <div className="top-violet-block">Introducing most affordable Jewelleries, Flat 50% Off. T&C</div>
        <div className="Navbar-wrapper">
            <img className="navbar-logo" src="https://i.pinimg.com/originals/f6/59/af/f659af063bd993d262d6e341f517965a.png" alt="logo" />
            <p>RINGS</p>
            <p>EARRINGS</p>
            <p>BANGLES</p>
            <p>SOLITAIRES</p>
            <p>NECKLACES</p>
            <p>GIFTINGS</p>
            <p>OTHER JEWELLERIES</p>
            <img alt="pic" src="https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png" className="navbar-users"/>
            <img alt="pic" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_favorite_48px-512.png" className="navbar-favourites" />
            <img alt="pic" src="https://image.flaticon.com/icons/png/512/263/263142.png" className="navbar-cart" />
        </div>
        {/* <div>
            <img alt="pic" src="https://banner.caratlane.com/live-images/f67593fe2d7a47d1aa8c966357d05916.jpg" className="preview1-img" />
        </div> */}
        {/* <div className="preview2-wrapper">
                <img alt="pic" src="https://banner.caratlane.com/live-images/e89b5e21ce5045b09754f70655b071b9.jpg" className="preview2-left-img" />
            <div className="preview2-right-container">
                <img alt="pic" src="https://banner.caratlane.com/live-images/bbc5b61578884746bae40d81c1324044.jpg" className="preview2-right1-img" />
                <img alt="pic" src="https://banner.caratlane.com/live-images/03b99ee205934faca04d26040f3cfccd.jpg" className="preview2-right2-img" />
            </div>
        </div> */}
        <div className="preview3-wrapper">
            <h1 className="preview3-heading">The spirit of <span className="preview3-heading-span">CHRYSELLA</span></h1>
            <p className="preview3-description">The highest quality of craftmanship and innovation,<br/> that brings you mordern everyday, designs.</p>
            <button className="knowMore-btn">Know More</button>
        </div>
        <div className="catalog-heading-wrapper">
            <div className="catalog-heading-left">
                <p>Best of Chrysella</p>
                <p></p>
            </div>
            <div className="catalog-heading-right">
                <div>WOMEN</div>
                <div>MEN</div>
            </div>
        </div>
        <div className="catalog-items-wrapper">
            <div>
                <img alt="pic" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/E/JE05031-YGP9EB_13_pdtouch.png" className="jewellery1-img"/>
                <p>{'\u20A8'} 20,418 <strike>{'\u20A8'} 21,456</strike></p>
                <p>Petite Blue Butterfly Stud Earrings</p>
            </div>
            <div>
                <img alt="pic" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/E/JE05166-1RP900_13_pdtouch.png" className="jewellery2-img"/>
                <p>{'\u20A8'} 10,778 <strike>{'\u20A8'} 12,679</strike></p>
                <p>Daisy Floret Stud Earrings</p>
            </div>
            <div>
                <img alt="pic" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/S/JS00111-YGP900_13_pdtouch.png" className="jewellery3-img"/>
                <p>{'\u20A8'} 37,336 <strike>{'\u20A8'} 40,913</strike></p>
                <p>Advika Miracle Plate Diamond Mangalsutra</p>
            </div>
            <div>
                <img alt="pic" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/T/JT00292-YGP200_13_pdtouch.png" className="jewellery3-img"/>
                <p>{'\u20A8'} 18,486 <strike>{'\u20A8'} 22,172</strike></p>
                <p>Peacock Feather Bracelet</p>
            </div>
        </div>
        <div>
            <img alt="pic" src="https://i.ibb.co/fVgJsGL/stories.png" />
        </div>
        <div className="readMore-btn">READ MORE</div>
        <h1 className="developer-heading">Developer Team</h1>
        <div className="credits-wrapper">
            <div>
                <h2>ASHUTOSH KUMAR</h2>
                <h3>10300217063</h3>
            </div>
            <div>
                <h2>HARSHITA SINGH</h2>
                <h3>10300217046</h3>
            </div>
            <div>
                <h2>DIGVIJAY KUMAR</h2>
                <h3>10300217051</h3>
            </div>
        </div>
        <div className="footer">
            <img alt="footer" src="https://i.ibb.co/bX57mRW/footer.png" />
        </div>
    </div>
    )
}
export { Homepage };