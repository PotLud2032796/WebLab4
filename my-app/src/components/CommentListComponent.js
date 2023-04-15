import React from 'react';
import CommentComponent from './CommentComponent';

function CommentListComponent(props) {
    //OBJET FINAL
    let [commentDetail,setCommentDetail] = React.useState("");

    //OBTENIR LES PARAMATRES DE l'URL
    const idComment = props.idBlog;
    const adresseComment = `http://localhost:3000/commentaires?publication=`+idComment;

    //CREATION OBJET REVENVOYE
    React.useEffect(() => {
        //RECUPERATION DES DONNES
        fetch(adresseComment)
        .then(reponse => reponse.json())
        .then(json =>{
            const details = json.map((element) => (
                <CommentComponent key={element.idComment} contenu={element.contenu}></CommentComponent>
        ));
        setCommentDetail(<div className="row d-flex justify-content-center">
        <div className="card border-light">
            <div className="card-body pt-4">
            <div className="row">
                <div className="col" id="comments">
                    {details}
                </div>
            </div>
            </div>
            </div>
        </div>);
        });
    },[]);

    //RETURN LE TABLEAU
    return commentDetail;
}

export default CommentListComponent;