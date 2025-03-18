function BookDetails() {
    return (
      <div className="book-details">
        <div className="book-details-cover">
          <img src="company-of-one-large.jpg" alt="Company of One" className="cover-placeholder white-cover-large" />
        </div>
        
        <h1 className="details-title">Company of One</h1>
        <p className="details-author">Paul Jarvis</p>
        
        <div className="rating">
          <div className="stars">
            <svg className="star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg className="star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg className="star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg className="star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg className="star half-filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <span className="rating-value">4.8</span>
        </div>
        
        <div className="book-stats">
          <div className="stat">
            <span className="stat-value">320</span>
            <span className="stat-label">Pages</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat-value">643</span>
            <span className="stat-label">ratings</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat-value">110</span>
            <span className="stat-label">Reviews</span>
          </div>
        </div>
        
        <p className="book-description">
          Company of One offers a refreshingly original business strategy that's focused on a commitment to being better instead of bigger. Why? Because staying small provides one with the freedom to pursue more meaningful pleasures in life—and avoid the headaches that result from dealing with employees, long meetings, or worrying about expansion. Company of One will help readers establish profitable ventures that have been deliberately developed to work for them, instead of them for it.
        </p>
        
        <button className="read-now-btn">
          Read Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          </svg>
        </button>
      </div>
    );
  }
  
  export default BookDetails;