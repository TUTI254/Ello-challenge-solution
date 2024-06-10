import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const apiUrl = import.meta.env.VITE_SERVER_URL;

const client = new ApolloClient({
    uri:  apiUrl,
    cache: new InMemoryCache(),
});


interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Providers;
