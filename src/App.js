import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Loading from './components/Loading'
import { navigation, fetchUrlData } from './utils';

const url = process.env.REACT_APP_URL
const characterUrl = process.env.REACT_APP_USERS_URL

function App() {
  const [loading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState([])
  const [users, setUsers] = useState([])
  const [index, setIndex] = useState(0)

  const onStart = () => setLoading(true);
  const onQuotesSuccess = (data) => { setLoading(false); setQuotes(data) };
  const onUsersSuccess = (data) => { setLoading(false); setUsers(data) };
  const onError = (msg) => { setLoading(false); console.log(msg) };

  useEffect(() => {
    fetchUrlData(url, onStart, onQuotesSuccess, onError)
  }, [])

  useEffect(() => {
    fetchUrlData(characterUrl, onStart, onUsersSuccess, onError)
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  const character = quotes[index]?.character;
  const quote = quotes[index]?.sentence;

  const imageUrl = users.find((item) => (item.fullName === character?.name))?.imageUrl;
  const onNext = () => setIndex(navigation.getNextIndex(quotes.length, index))
  const onPrevious = () => setIndex(navigation.getPreviousIndex(quotes.length, index))
  const onRandom = () => setIndex(navigation.getRandomIndex(quotes.length))

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Game of Quotes </h2>
          <div className='underline'></div>
        </div>
        <Card character={{ ...character, imageUrl }} quote={quote} onNext={onNext} onPrevious={onPrevious} onRandom={onRandom}/>
      </section>
    </main>
  );
}

export default App;
