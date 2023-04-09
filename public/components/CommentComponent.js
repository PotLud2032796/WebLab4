function CommentComponent(props) {

    //OBJET RETOURNE
    return <div className="mt-4 border p-4">
        <h5 className="mb-1" style={{color:'black'}}>
            Anonyme
        </h5>
        <p className="small mb-0">
            {props.contenu}
        </p>
    </div>
}