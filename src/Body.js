import "./Body.css"
function Body(){
    return(
        <>
        <div className="Logo"><a href="/"></a></div>
        <div className="navbar">
            <div className="nav-logo  ">
                <div className="logo"></div>
            </div>
            <div className="nav-address  ">
                <p className="add-first">Dliver to</p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="add-second">India</p>
                </div>
            </div>
            <div className="nav-search">
                <select className="search-select">
                <option>All</option>
                </select>
                <input placeholder="Search Amazon" className="search-input"/>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="nav-signin  ">
                <p><span style={{padding:'10px'}}>Hello,sign in</span></p>
                <p className="nav-second">Account & list</p>
            </div>
            <div className="nav-return  ">
                <p><span>Returns</span></p>
                <p className="nav-second">& Orders</p>
            </div>
            <div className="nav-cart  ">
                <i className="fa-solid fa-cart-shopping"></i>
                cart
            </div>
        </div>
        <div className="panel">
            <div className="panel-all">
                <i className="fa-solid fa-bars"></i>
                All
            </div>
            <div className="panel-ops">
                <p>Today's Deals</p>
                <p>Customer Service</p>
                <p>Registry</p>
                <p>Gift Cards</p>
                <p>Sell</p>
            </div>
            <div className="panel-deals">
                shop deals in electronics
            </div>
        </div>

    <div className="hero-section">
        <div className="hero-msg">
            <p>you are on amazon.com you can also shop on Amazon india for millions of products with fast delivery. <a href="https://www.amazon.in/">click here</a></p>
        </div>
    </div>
    <div className="shop-section">
        <div className="box1 box">
            <div className="box-content">
                <h2>Cloths</h2>
                <div className="box-img box-img1"></div>
                <a href="/Page1">see more</a>
            </div>
        </div>
        <div className="box2 box">
            <div className="box-content">
                <h2>Health and personal</h2>
                <div className="box-img box-img2"></div>
                <p><a href="/Page2">See more</a></p>
            </div>
        </div>
        <div className="box3 box">
            <div className="box-content">
                <h2>Furniture</h2>
                <div className="box-img box-img3"></div>
                <p><a href="/Page3">See more</a></p>
            </div>
        </div>
        <div className="box4 box">
            <div className="box-content">
            <h2>Electronice</h2>
            <div className="box-img box-img4"></div>
            <p><a href="/Page4">See more</a></p>
        </div>
    </div>
    <div className="box">
        <div className="box-content">
            <h2>Beauty products</h2>
            <div className="box-img box-img5"></div>
            <p><a href="/Page5">See more</a></p>
        </div>
    </div>
    <div className="box">
        <div className="box-content">
            <h2>Pet care</h2>
            <div className="box-img box-img6"></div>
            <p><a href="/Page6">See more</a></p>
        </div>
    </div>
    <div className="box">
        <div className="box-content">
            <h2>New Arivals in Toys</h2>
            <div className="box-img box-img7"></div>
            <p><a href="/Page7">See more</a></p>
        </div>
    </div>
    <div className="box">
        <div className="box-content">
        <h2>Discover Fasion Trends</h2>
        <div className="box-img box-img8"></div>
        <p><a href="/Page8">See more</a></p>
    </div>
    </div>
    </div>
    <footer>
        <div className="foot-panel1">
            <a href="/">Back to Top</a>
        </div>

        <div className="foot-panel2">
            <ul>
                <p>Get to Know</p>
                <a href="/About">Careers</a>
                <a href="/About">Blog</a>
                <a href="/About">About Amazon</a>
                <a href="/About">Investor Relations</a>
                <a href="/About">Amazon Devices</a>
                <a href="/About">Amazon Science</a>
            </ul>
            <ul>
                <p>Get to Know</p>
                <a href="/About">Careers</a>
                <a href="/About">Blog</a>
                <a href="/About">About Amazon</a>
                <a href="/About">Investor Relations</a>
                <a href="/About">Amazon Devices</a>
                <a href="/About">Amazon Science</a>
            </ul>
            <ul>
                <p>Get to Know</p>
                <a href="/About">Careers</a>
                <a href="/About">Blog</a>
                <a href="/About">About Amazon</a>
                <a href="/About">Investor Relations</a>
                <a href="/About">Amazon Devices</a>
                <a href="/About">Amazon Science</a>
            </ul>
            <ul>
                <p>Get to Know</p>
                <a href="/About">Careers</a>
                <a href="/About">Blog</a>
                <a href="/About">About Amazon</a>
                <a href="/About">Investor Relations</a>
                <a href="/About">Amazon Devices</a>
                <a href="/About">Amazon Science</a>
            </ul>
        </div>

        <div className="foot-panel3">
            <div className="logo"></div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <a href="/About">Conditions of Use</a>
                <a href="/About">Privacy Notice</a>
                <a href="/About">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
                © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    </footer>
        </>
    )
}

export default Body;