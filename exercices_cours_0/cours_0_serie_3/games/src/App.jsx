import './App.css';
import Home from './pages/Home';
import {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorMessage from './pages/ErrorMessage';
import Details from './pages/Details';
import BookmarksContext  from "./BookmarksContext.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
function App() {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorMessage />
    },
    {
      path: "details/:slug",
      element: <Details />
    },
    // On ajoute cette route
    {
      path: "/bookmarks",
      element: <Bookmarks />
    }
  ], { basename: "/" })
  return (
      <>
        <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
          <RouterProvider router={ router }></RouterProvider>
        </BookmarksContext.Provider>
      </>
  );
}
export default App;