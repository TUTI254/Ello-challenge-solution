import { Box, Container, Typography, Pagination, CircularProgress } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  if (loading) return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 12 }}>
      <CircularProgress />
    </Box>
  )
  if (error)  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 12 }}>
      <Typography variant="body1"color="text.secondary">There Seems to be a problem!  {error.message}</Typography>;
    </Box>
  );

  const books = data.books;
  const booksOnCurrentPage = books.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  return (
    <Container>
      <Box sx={{my: 4 , display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h3" sx={{color: "primary.main"}}>Recommended by experts, loved by parents</Typography>
      </Box>
      <Box sx={{ my: 4 , display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src="/assets/sample.svg" alt="sample" />
      </Box>
      <Box sx={{ my: 4 }}>
         <SearchBar books={books} />
      </Box>
      <Box sx={{ my: 4 }}>
         <BookCard books={booksOnCurrentPage} />
      </Box>
      <Box sx={{ my: 2 }}>
        <Pagination color="primary"  count={Math.ceil(books.length / itemsPerPage)} page={page} onChange={(_event, value) => setPage(value)} size='large' style={{ color: 'white' }} />
      </Box>
      <Box sx={{my: 4 , display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src="/assets/wrapper.png" alt="sample" width="auto" height="auto" />
      </Box>
    </Container>
  )
}

export default HomePage;
