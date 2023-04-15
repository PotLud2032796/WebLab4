import React from 'react'

function BlogCardComponent(props) {
    const route = `/Blog/${props.id}`;
    
    //OBJET RETOURNE
    return <div className="col">
        <a href={route} style={{textDecoration:'none'}}>
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

export default BlogCardComponent;