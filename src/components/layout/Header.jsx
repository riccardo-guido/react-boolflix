export default function Header() {
    return <header>
        <div id="page-header" className="container">

            <img src="/dc-logo.png" alt="" />
            <nav>
                
                <ul>
                <li><a href="#">Characters</a></li>
                <li className="active"><a href="#">Comics</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Collectibles</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Fans</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Shop</a></li>
                </ul>
            </nav>

        </div>
         </header>;
}