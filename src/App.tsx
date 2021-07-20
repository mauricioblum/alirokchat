import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
};

export default App;
