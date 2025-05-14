function Header() {
    return (
        <header>
            <nav className="navbar">
                <h1 className="logo"><span>ROAS</span> Insight Suite</h1>
                <section className="nav-tabs">
                    <button>Home</button>
                    <button>Console</button>
                    <button>Document</button>
                    <button>About</button>
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