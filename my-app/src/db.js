//DEXIE DB
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(2).stores({
    blogs: '++id, titre, auteur, date, description, image1, paragraphe1, image2, paragraphe2', //PRIMARY KEY AND PROPS
    commentaires: '++id, publication, date, contenu',
});