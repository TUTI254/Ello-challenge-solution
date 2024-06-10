import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, CircularProgress } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Snackbar from '@mui/material/Snackbar';

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

const ReadListCard: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state
    const timer = setTimeout(() => {
      const readingList = sessionStorage.getItem('readingList');
      const list = readingList ? JSON.parse(readingList) : [];
      setBooks(list);
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleRemoveFromReadingList = (book: Book) => {
    const readingList = sessionStorage.getItem('readingList');
    let list = readingList ? JSON.parse(readingList) : [];
    list = list.filter((b: Book) => b.title !== book.title);
    sessionStorage.setItem('readingList', JSON.stringify(list));
    setBooks(list);
    setMessage('Book removed from your reading list');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
      <CircularProgress />
    </Box>
    ); 
  }

  if (books.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
        <Typography variant="body1"color="text.secondary">There are no books in the reading list.</Typography>
      </Box>
    )
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message} />
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.title}>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '14px', width: '250px' }}>
              <Box height="150px" width="150px" marginBottom="10px" sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100%', height: '100%', borderRadius: '15px'}} />
              </Box>
              <Typography variant="h6" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="body1" gutterBottom color="text.secondary">
                {"Written By: " + book.author}
              </Typography>
              <Typography variant="body2" gutterBottom color="text.secondary">
                {"Reading Level: " + book.readingLevel}
              </Typography>
              <Button variant="contained" startIcon={<RemoveIcon />} sx={{borderRadius: '15px', color: "text.main"}} onClick={() => handleRemoveFromReadingList(book)}>
                remove from List
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ReadListCard;
