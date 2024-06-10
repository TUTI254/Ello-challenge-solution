import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface BookCardProps {
  books: Book[];
}

const BookCard: React.FC<BookCardProps> = ({ books }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddToReadingList = (book: Book) => {
    const readingList = sessionStorage.getItem('readingList');
    const list = readingList ? JSON.parse(readingList) : [];
    if (list.some((b: Book) => b.title === book.title)) {
      setMessage('This book is already in your reading list');
      setOpen(true);
    } else {
      list.push(book);
      sessionStorage.setItem('readingList', JSON.stringify(list));
      setMessage('Book added to your reading list');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message}  />
      <Grid container spacing={2} >
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.title} spacing={2}>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '14px', width: '250px' }}>
              <Box  height="150px" width="150px" marginBottom="10px" sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100%', height: '100%' , borderRadius: '15px'}} />
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
              <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: '15px',color: "white"}} onClick={() => handleAddToReadingList(book)}>
                Reading List
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default BookCard
