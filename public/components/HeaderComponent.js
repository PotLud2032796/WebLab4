function HeaderComponent(props) {
    return <div>
    {/* TOP PART */}
    <div className="row align-items-center w-100" id="header">
    {/* IMAGE LOGO */}
    <img src="..\Ressources\Logo.jpg" className="img-fluid col-lg-2 col-8"/>
    {/* MENU NAVIGATION SITE */}
    <nav className="navbar navbar-expand-lg navbar-light col-4 col-lg-8 justify-content-center">
        {/* BUTTON TOGGLE ON/OFF SMALL SITE */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse d-lg-block w-100" id="navbarToggleExternalContent">
        {/* LIST LIENS */}
        <ul className="navbar-nav d-flex justify-content-around w-100">
            <li className="nav-item">
                <a className="nav-link" href="page_principal.html">Menu1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Menu2</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Menu3</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Menu4</a>
            </li>
        </ul>
        </div>
    </nav>
    {/* IMAGE PERSONNAGE */}
    <img src="Ressources\Personnage.png" className="img-fluid col-lg-2 col-0 d-none d-lg-block"/>
    </div>
    </div>
}