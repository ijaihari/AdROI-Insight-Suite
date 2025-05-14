import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar">
                <h1 className="logo"><span>ROAS</span> Insight Suite</h1>
                <section className="nav-tabs">
                    <Link to="/" ><button>Home</button></Link>
                    <Link to="/console" ><button>Console</button></Link>
                    <Link to="/doc" ><button>Document</button></Link>
                    <Link to="/about" ><button>About</button></Link>
                </section>
                <section className="login">
                    <button>Login</button>
                    <button>Sign Up</button>
                </section>
            </nav>
        </header>
    );
}

export default Header;