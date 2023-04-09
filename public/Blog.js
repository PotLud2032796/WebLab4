const root = ReactDOM.createRoot(document.getElementById('root'));

//RECUPERATION ID
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idBlog = urlParams.get('id')

//RENDER PAGE
root.render(<div>
    <HeaderComponent/>
    <div className="container mt-5 pb-5" id="article">
        <BlogDetailsComponent idBlog={idBlog}/>
        <AddCommentComponent idBlog={idBlog}/>
        <CommentListComponent idBlog={idBlog}/>
    </div>
    <FooterComponent/>
</div>);