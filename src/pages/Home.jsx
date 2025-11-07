import { useMemo, useState } from 'react'
import BookCard from '../components/BookCard';
import SortDropDown from '../components/SortDropDown';
import { books } from '../data/books';
import ResetButton from '../components/ResetButton';

export default function Home() {
  const [filters, setfilters] = useState({genere: [], author:[], publisher:[]});
  const [sortByOrder, setSortByOrder] = useState("");

  const uniqueOptions = {
    genre: [...new Set(books.map(b => b.genre))],
    author: [...new Set(books.map(b => b.author))],
    publisher: [...new Set(books.map(b => b.publisher))]
  }

  const filterSetBooks = useMemo(() => {
    let result = books;

    Object.keys(filters).forEach(key => {
      if(filters[key].length > 0){
        result = result.filter(book => filters[key]);
      }
    })
    if(sortByOrder === "lowToHigh"){
      result.sort((a, b) => a.price - b.price)
    }
    if(sortByOrder ==="highToLow") {
      result.sort((a, b) => b.price - a.price)
    }
    return result;
  },[filters, sortByOrder])


  const resultFilters = () => {
    setfilters({genre: [], author: [], publisher: []})
    setSortByOrder("")
  };

  return (
    <div>
      <h1>Book-Bazar</h1>
      <SortDropDown sortByOrder={sortByOrder} setSortByOrder={setSortByOrder}/>
      <ResetButton resetFilters={resultFilters}/>
      <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap:"7px"}}>
        {filterSetBooks.map((book, index) => <BookCard key={index} book={book}/>)}
      </div>
    </div>
  );
}

