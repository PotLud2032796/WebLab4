import React from 'react';
import {useLoaderData, Form} from "react-router-dom";

function AddCommentComponent(props) {
    //Etat Input
    let publication = props.idBlog;
    //let date = "";
    let [contenu, setContenu] = React.useState("");

    //Syncro Etat
    function handleContenu(event){
        setContenu(event.target.value);
    }

    //Objet
    return <Form className="Row" method="POST" action="/SendComment">
        <input type="hidden" name="publication" value={publication}/>
        <div className="row">
            <h2 className="mt-3 mb-3" style={{color: 'black'}}>Commentaires:</h2>
        </div>
        <div className="form-outline w-100">
            <textarea className="form-control" name="contenu" rows="4" value={contenu} onChange={handleContenu}></textarea>
        </div>
        <div className="mt-2 pt-1">
            <button type="submit" className="btn btn-primary btn-sm">Post comment</button>
        </div>
    </Form>
}

export default AddCommentComponent;