import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate, redirect } from 'react-router-dom';
import './index.css';

//Component
import PageBlogComponent from './components/PageBlogComponent';
import PagePrincipalComponent from './components/PagePrincipalComponent';
import PageAjouterComponent from './components/PageAjouterComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PagePrincipalComponent/>
  },
  {
    path: "/Blog/:id",
    loader: async({params}) =>{
      return fetch(`http://localhost:3000/Blogs/${params.id}`);
    },
    element: <PageBlogComponent/>
  },
  {
    path: "/Ajouter",
    element: <PageAjouterComponent/>
  },
  {
    path: "/SendBlog",
    action: async ({request}) =>{
      let formData = await request.formData();

      const blog = new Object;

      blog.auteur = formData.get("auteur");
      blog.image1 = formData.get("image1");
      blog.titre = formData.get("titre");
      blog.paragraphe1 = formData.get("paragraphe1");
      blog.image2= formData.get("image2");
      blog.paragraphe2 = formData.get("paragraphe2");

      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
      };

      fetch(`http://localhost:3000/blogs`, option)
      .then(response => response.json())
      .catch(error => console.error(error));
      
      return redirect("/");
    }
  },
  {
    path: "/SendComment",
    action: async ({request}) =>{
      let formData = await request.formData();

      const comment = new Object;

      comment.publication = formData.get("publication");
      comment.contenu = formData.get("contenu");

      var d = new Date();
      var date = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;

      comment.date = date;

      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      };

      fetch(`http://localhost:3000/commentaires`, option)
      .then(response => response.json())
      .catch(error => console.error(error));
      
      return redirect(`/Blog/${comment.publication}`);
    }
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
