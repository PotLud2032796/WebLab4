import HeaderComponent from "./HeaderComponent";
import SearchBlogComponent from "./SearchBlogComponent";
import BlogListComponent from "./BlogListComponent";
import FooterComponent from "./FooterComponent";

function PagePrincipalComponent(props) {
    var principal = <>
        <HeaderComponent/>
        <SearchBlogComponent/>
        <BlogListComponent/>
        <FooterComponent/>
    </>

    //RETURN LE TABLEAU
    return principal;
}

export default PagePrincipalComponent;