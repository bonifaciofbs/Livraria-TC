import React, { useState } from 'react';
import Alert from './Components/Alert';

export default function Table() {
  const [selectAll, setSelectAll] = useState(false);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Introdução à Matemática',
      author: 'Jane Doe',
      publisher: 'Editora Educação Global',
      discipline: 'Matemática',
    },
    // ... other book objects
  ]);

  const handleSelectAll = () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = !selectAll;
    });
    setSelectAll(!selectAll);
  };

  return (
    <div className="overflow-x-auto tablePage">
      {/* ... Breadcrumbs ... */}
      <button
        className="btn btn-primary btn-sm mt-4"
        onClick={() => {
          const newTitle = prompt('Digite o Titulo do seu livro:');
          const newAutor = prompt('Digite o Nome do Autor:');
          const newPublicadora = prompt('Digite o nome da publicadora:');
          const newDisciplina = prompt('Digite o nome da disciplina:');
          if (newTitle !== null) {
            const newBook = {
              id: books.length + 1,
              title: newTitle,
              author: newAutor,
              publisher: newPublicadora,
              discipline: newDisciplina,
            };
            setBooks([...books, newBook]);
          }
        }}
      >
<svg height='30px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"></path> </g></svg>  
Adicionar    </button>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* ... Table Header ... */}
          
          <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox"    
                  checked={selectAll}
                  onChange={handleSelectAll} />
          </label>
        </th>
        <th>Título do Livro Didático</th>
        <th>Autor</th>
        <th>Disciplina</th>
        <th></th>
      </tr>
    </thead>
          <tbody>
  {books.map((book) => (
    <tr key={book.id} className="hover:bg-primary-content">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg"
                alt="Capa do Livro Didático"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{book.title}</div>
            <div className="text-sm opacity-50">{book.author}</div>
          </div>
        </div>
      </td>
      <td>
        {book.publisher}
        <br />
        <span className="badge badge-ghost badge-sm">{book.discipline}</span>
      </td>
      <td>{book.discipline}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            const newTitle = prompt('Edit book title:', book.title);
            if (newTitle !== null) {
              const updatedBooks = books.map((b) =>
                b.id === book.id ? { ...b, title: newTitle } : b
              );
              setBooks(updatedBooks);
            }
          }}
        >
          Editar
        </button>
      </th>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            const shouldDelete = window.confirm(
              'Are you sure you want to delete this book?'
            );
            if (shouldDelete) {
              const updatedBooks = books.filter((b) => b.id !== book.id);
              setBooks(updatedBooks);
            }
          }}
        >
          Excluir
        </button>
      </th>
    </tr>
  ))}
</tbody>

        </table>
      </div>



      <Alert text={'Você está entrando como ' + localStorage.getItem('userEmail')} />
    </div>
  );
}




