function RecommendedBooks() {
    const books = [
      {
        id: 1,
        cover: 'psychology-of-money.jpg',
        title: 'The Psychology of Money',
        author: 'Morgan Housel'
      },
      {
        id: 2,
        cover: 'how-innovation-works.jpg',
        title: 'How Innovation Works',
        author: 'Matt Ridley'
      },
      {
        id: 3,
        cover: 'company-of-one.jpg',
        title: 'Company of One',
        author: 'Paul Jarvis'
      },
      {
        id: 4,
        cover: 'stupore-e-tremori.jpg',
        title: 'Stupore E Tremori',
        author: 'Amelie Nothomb'
      }
    ];
  
    return (
      <section className="recommended-section">
        <div className="section-header">
          <h2>Recommended</h2>
          <a href="#" className="see-all">
            See All
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </a>
        </div>
        
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <div className="cover-placeholder" style={{backgroundColor: book.id === 1 ? '#425b4e' : book.id === 2 ? '#f8d231' : book.id === 3 ? '#f5f5f5' : '#c19a6b'}}>
                  {book.id === 1 && (
                    <div className="placeholder-content green-cover">
                      <div className="book-title">The Psychology of Money</div>
                      <div className="book-illustration"></div>
                    </div>
                  )}
                  {book.id === 2 && (
                    <div className="placeholder-content yellow-cover">
                      <div className="book-title">MATT RIDLEY</div>
                      <div className="book-subtitle">HOW INNOVATION WORKS</div>
                      <div className="paper-plane"></div>
                    </div>
                  )}
                  {book.id === 3 && (
                    <div className="placeholder-content white-cover">
                      <div className="book-title">Company of One</div>
                      <div className="author">Paul Jarvis</div>
                    </div>
                  )}
                  {book.id === 4 && (
                    <div className="placeholder-content brown-cover">
                      <div className="book-glasses"></div>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default RecommendedBooks;