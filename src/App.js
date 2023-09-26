import './App.css';

function App() {
  return (
    <main className='wraper'>
      <div className='container'>
        <div className='card card_one'>
          <h2>Join our community</h2>
          <p className='card_one-p-green'>30-day, hassle-free money back guarantee</p>
          <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>

        <div className='card-wrap'>
        <div className='card card_two'>
          <h3>Monthly Subscription</h3>
          <p> <span>$29</span> per month</p>
          <p>Full access for less than $1 a day</p>
          <button className='btn'>Sign Up</button>
        </div>

        <div className='card card_three'>
          <h3>Why Us</h3>
          <p>Tutorials by industry experts Peer &amp; expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
        </div>
        </div>
      </div>
    </main>
  );
}

export default App;
