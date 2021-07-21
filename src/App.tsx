import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ShipmentsProvider } from './hooks/shipments';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShipmentsProvider>
        <Router>
          <Routes />
          <GlobalStyle />
        </Router>
      </ShipmentsProvider>
    </ThemeProvider>
  );
};

export default App;
