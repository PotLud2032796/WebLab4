import React from 'react';
import BlogCardComponent from './BlogCardComponent';

function BlogListComponent(props) {
    let [blogFeed,setBlogFeed] = React.useState([]);
    let containerBlog = <p>oops</p>;

    React.useEffect(() => {
        //RECUPERATION DES DONNES
        fetch(`http://localhost:3000/blogs`)
        .then(reponse => reponse.json())
        .then(json =>{
            const cards = json.map((element) => (
                <BlogCardComponent
                  key={element.id}
                  id={element.id}
                  titre={element.titre}
                  description={element.description}
                />
            ));
            setBlogFeed(cards);
        });
    },[]);

    //CONTAINER
    containerBlog = <div className="row row-cols-1 row-cols-md-3 g-4" id="feed">{blogFeed}</div>

    //RETURN LE TABLEAU
    return containerBlog;
}

export default BlogListComponent;