import {useLoaderData, Form} from "react-router-dom";

function FormBlogComponent(){
    return <Form method="post" action="/SendBlog">
        <div className="form-group">
            <label htmlFor="auteur">Auteur:</label>
            <input type="text" className="form-control" name="auteur" placeholder="auteur"/>
        </div>
        <div className="form-group">
            <label htmlFor="image1">Image 1:</label>
            <input type="text" className="form-control" name="image1" placeholder="lien vers image"/>
        </div>
        <div className="form-group">
          <label htmlFor="titre">Titre:</label>
          <input type="text" className="form-control" name="titre" placeholder="exemple titre"/>
        </div>
        <div className="form-group">
          <label htmlFor="paragraphe1">Paragraphe 1:</label>
          <textarea className="form-control" name="paragraphe1" rows="6"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="image2">Image 2:</label>
            <input type="text" className="form-control" name="image2" placeholder="lien vers image"/>
        </div>
        <div className="form-group">
            <label htmlFor="paragraphe2">Paragraphe 2:</label>
            <textarea className="form-control" name="paragraphe2" rows="6"></textarea>
        </div>

        <button className="btn-primary col-3 p-2 mt-2" style={{color: 'white'}} type="submit">Ajouter</button>
    </Form>
}

export default FormBlogComponent;