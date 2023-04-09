function BlogDetailsComponent(props) {
    //OBJET FINAL
    let [blogDetail,setBlogDetail] = React.useState("");

    //OBTENIR LES PARAMATRES DE l'URL
    const idPublication = props.idBlog;
    const adresseBlog = `http://localhost:3000/blogs?id=`+idPublication;

    //CREATION OBJET REVENVOYE
    React.useEffect(() => {
        //RECUPERATION DES DONNES
        fetch(adresseBlog)
        .then(reponse => reponse.json())
        .then(json =>{
            const details = json.map((element) => (<div className="row" id="contenuBlog" key={idPublication}>
                <div className="row d-flex">
                    <img src={element.image1}/>
                </div>
                <div className="row text-center">
                    <h1 className="mt-3 mb-3">{element.titre}</h1>
                </div>
                <div className="row text-left">
                    <p>
                        {element.paragraphe1}
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="card mb-3 col-sm-3 align-items-center border-light">
                        <img src={element.image2} className="card-img-top pb-2"/>
                        <div className="card-body pt-0 pb-2">
                            <h5 className="card-title">Image</h5>
                        </div>
                    </div>
                </div>
                <div className="row text-left mb-5">
                    <p>
                        {element.pargraphe2}
                    </p>
                </div>
            </div>
        ));
        setBlogDetail(details);
        });
    },[]);

    //RETURN LE TABLEAU
    return blogDetail;
}