import { Box, Container, Typography } from "@mui/material"
import ReadListCard from "../components/ReadListCard"

const ReadingListPage = () => {
  return (
    <Container>
      <Box sx={{my: 4 , display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h3" sx={{color: "primary.main"}}>Pick up where you left off with your reading list</Typography>
      </Box>
     <ReadListCard />
     <Box sx={{ my: 4 }}>
        <img src="/assets/wrapper.png" alt="sample" />
      </Box>
    </Container>
  )
}

export default ReadingListPage