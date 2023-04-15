import FormBlogComponent from "./FormBlogComponent";

function PageAjouterComponent(props) {
    return <div className="container-fluid h-100">
        <div className="row justify-content-center w-100" id="header">
            <h1 className="col-8" style={{color: 'white'}}>FORMULAIRE AJOUT DE PAGE BLOG</h1>
        </div>
        <div className="container mt-5 pb-5" id="article">
            <div className="row">
                <FormBlogComponent/>
            </div>
        </div>
    </div>
}

export default PageAjouterComponent;