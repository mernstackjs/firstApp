import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="Add-Book" element={<AddBook />} />
        <Route path="Book-List" element={<BookList />} />
        <Route path="book/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
}

export default App;
