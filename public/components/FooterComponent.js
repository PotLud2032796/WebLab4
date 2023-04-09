function FooterComponent(props) {
    return <footer className="text-center text-white">
        <div className="container">
            {/* SECTION RESEAUX*/}
            <section className="mt-5">
            <div className="row text-center d-flex justify-content-center">
                {/* FACEBOOK */}
                <div className="col-2">
                    <a href="" className="list-group-item">
                        <i className="fa fa-facebook-square fa-3x"></i>
                    </a>
                </div>
                {/* TWITTER */}
                <div className="col-2">
                    <a href="" className="list-group-item">
                        <i className="fa fa-twitter-square fa-3x"></i>
                    </a>
                </div>
                {/* LINKEDIN */}
                <div className="col-2">
                    <a href="" className="list-group-item">
                        <i className="fa fa-linkedin-square fa-3x"></i>
                    </a>
                </div>
            </div>
            </section>
            {/* SEPARATION */}
            <hr className="mt-4"/>
            {/* SECTION CREDIT */}
            <section className="mb-5">
                {/* GROUPE */}
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <h3>Centre d'Expertise et de Perfectionnement en Informatique</h3>
                    </div>
                </div>
                {/* DATE */}
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <p style={{color:'white'}}>2022</p>
                    </div>
                </div>
            </section>
        </div>
    </footer>
}