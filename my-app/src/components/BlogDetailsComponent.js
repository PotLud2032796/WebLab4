import React from 'react';

function BlogDetailsComponent(props) {
    //OBJET FINAL
    let [blogDetail,setBlogDetail] = React.useState("");

    //OBTENIR LES PARAMATRES DE l'URL
    const Blog = props.Blog;

    //CREATION OBJET REVENVOYE
    React.useEffect(() => {
        const details = <div className="row" id="contenuBlog" key={Blog.id}>
        <div className="row d-flex">
            <img src={Blog.image1}/>
        </div>
        <div className="row text-center">
            <h1 className="mt-3 mb-3">{Blog.titre}</h1>
        </div>
        <div className="row text-left">
            <p>
                {Blog.paragraphe1}
            </p>
        </div>
        <div className="row justify-content-center">
            <div className="card mb-3 col-sm-3 align-items-center border-light">
                <img src={Blog.image2} className="card-img-top pb-2"/>
                <div className="card-body pt-0 pb-2">
                    <h5 className="card-title">Image</h5>
                </div>
            </div>
        </div>
        <div className="row text-left mb-5">
            <p>
                {Blog.pargraphe2}
            </p>
        </div>
        </div>

        setBlogDetail(details);
    },[]);

    //RETURN LE TABLEAU
    return blogDetail;
}

export default BlogDetailsComponent;