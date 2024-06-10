import { useState } from "react";
import { Autocomplete, TextField, Box, Typography, Button, Snackbar, useMediaQuery, Theme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface SearchBarProps {
  books: Book[];
}

const SearchBar: React.FC<SearchBarProps> = ({ books }) => {
  const [value, setValue] = useState<Book | null>(null);
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

  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message}  />
         <Autocomplete
           value={value}
           onChange={(_, newValue: Book | null) => {
             setValue(newValue);
           }}
           id="search-bar"
           options={books}
           getOptionLabel={(option) => option.title + " by " + option.author}
           renderOption={(props, option) => (
             <Box component="li" {...props}>
               <Box sx={{ mx: 1}}>
                   <img src={option.coverPhotoURL} alt={option.title} style={{ borderRadius: '15px', marginRight: 8, height: isSmallScreen ? 25 : 50, width: isSmallScreen ? 25 : 50 }} />
               </Box>
               <Box sx={{ mx: 1 }}>
                 <Typography>{option.title}</Typography>
               </Box>
               <Box sx={{ mx: 2 }}>
                 <Typography variant="subtitle2" color="text.secondary">{"Written by " + option.author}</Typography>
               </Box>
               <Button variant="contained"  sx={{borderRadius: '50%', minWidth: 'auto', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: "white"}} onClick={() => handleAddToReadingList(option)}>
                <AddIcon />
               </Button>
             </Box>
           )}
           renderInput={(params) => <TextField {...params} label="Search" variant="outlined" sx={{borderRadius: '15px'}} placeholder="Search for book..." />}
         />
    </>
  );
};

export default SearchBar;
