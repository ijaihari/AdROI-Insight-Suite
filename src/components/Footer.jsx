function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__column">
                    <div className="logo-footer-container"><img className="footer-logo" src="public/logo/ROAS.svg" alt="" /><h4  className="footer__title">Insight Suite</h4></div>
                    <p className="footer__description">
                        A powerful analytics suite built to drive growth, optimize ad spend, and deliver actionable marketing insights.
                    </p>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">Product</h4>
                    <ul className="footer__list">
                        <li><a href="#" className="footer__link">Dashboard</a></li>
                        <li><a href="#" className="footer__link">Campaigns</a></li>
                        <li><a href="#" className="footer__link">Insights</a></li>
                        <li><a href="#" className="footer__link">Pricing</a></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">Resources</h4>
                    <ul className="footer__list">
                        <li><a href="#" className="footer__link">Documentation</a></li>
                        <li><a href="#" className="footer__link">API Reference</a></li>
                        <li><a href="#" className="footer__link">Help Center</a></li>
                        <li><a href="#" className="footer__link">Blog</a></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">Stay in the loop</h4>
                    <p className="footer__description">
                        Join our newsletter to stay updated with analytics tips, product updates, and more.
                    </p>
                    <form className="footer__form">
                        <input type="email" placeholder="Your email" className="footer__input" />
                        <button type="submit" className="footer__button">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; {new Date().getFullYear()} ROAS Insight Suite. All rights reserved. A project by <a href="https://www.linkedin.com/in/ijaihari/">Jai Hari Nataraj</a>
                </p>
                <div className="footer__bottom-links">
                    <a href="#" className="footer__link">Privacy Policy</a>
                    <a href="#" className="footer__link">Terms of Service</a>
                    <a href="mailto:support@roasinsight.com" className="footer__link">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
