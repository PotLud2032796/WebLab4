function AddCommentComponent(props) {
    //Etat Input
    let publication = props.idBlog;
    let date = "";
    let [contenu, setContenu] = React.useState("");

    //Syncro Etat
    function handleContenu(event){
        setContenu(event.target.value);
    }

    //HandleSubmit
    function handleSubmit(event){
        event.preventDefault(); //Prevent Levent

        //Recuperation date
        var d = new Date();
        var date = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;

        //Envoi information
        fetch('http://localhost:3000/commentaires', {
            method: 'POST',
            body: JSON.stringify({
            contenu: contenu,
            publication: publication,
            date: date,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    };

    //Objet
    return <form id="ajout" className="Row" onSubmit={handleSubmit}>
        <div className="row">
            <h2 className="mt-3 mb-3" style={{color: 'black'}}>Commentaires:</h2>
        </div>
        <div className="form-outline w-100">
            <textarea className="form-control" id="contenu" rows="4" value={contenu} onChange={handleContenu}></textarea>
        </div>
        <div className="mt-2 pt-1">
            <button type="submit" className="btn btn-primary btn-sm">Post comment</button>
        </div>
    </form>
}