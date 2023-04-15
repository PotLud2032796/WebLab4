import HeaderComponent from "./HeaderComponent";
import BlogDetailsComponent from "./BlogDetailsComponent";
import AddCommentComponent from "./AddCommentComponent";
import CommentListComponent from "./CommentListComponent";
import FooterComponent from "./FooterComponent";
import { useLoaderData } from "react-router-dom";

function PageBlogComponent(props) {
    //OBTENIR LES PARAMATRES DE l'URL
    const loaderConst = useLoaderData();

    var blog = <div>
        <HeaderComponent/>
        <div className="container mt-5 pb-5" id="article">
            <BlogDetailsComponent Blog={loaderConst}/>
            <AddCommentComponent idBlog={loaderConst.id}/>
            <CommentListComponent idBlog={loaderConst.id}/>
        </div>
        <FooterComponent/>
    </div>

    //RETURN LE TABLEAU
    return blog;
}

export default PageBlogComponent;