function BlogCardComponent(props) {
    let [reference, setReference] = React.useState(0);

    //CREATION LIEN
    React.useEffect(()=>{
        setReference("page_blog.html?id="+props.id);
    },[])
    
    //OBJET RETOURNE
    return <div className="col">
        <a href={reference} style={{textDecoration:'none'}}>
            <div className="card">
                <img src="https://via.placeholder.com/150x90" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.titre}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </a>
    </div>
}