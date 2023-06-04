import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('No root element!');
const root = createRoot(rootElement);

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
