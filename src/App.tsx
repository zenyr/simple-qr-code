import {
  AppShell,
  Grid,
  Header,
  MantineProvider,
  Text,
  TypographyStylesProvider,
} from '@mantine/core';
import { Input } from './comp/Input';
import { Output } from './comp/Output';
import { Status } from './comp/Status';
import './styles.css';
import { Qrcode } from 'tabler-icons-react';

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <TypographyStylesProvider>
        <AppShell
          padding="md"
          fixed
          header={
            <Header height={50} p="xs">
              <Text size="xl">
                <Qrcode
                  style={{ display: 'inline-block', verticalAlign: 'sub',marginRight: 5 }}
                />
                QR Code Generator Simplified
              </Text>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Grid>
            <Grid.Col sm={12} md={6}>
              <Input />
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <Output />
            </Grid.Col>
            <Grid.Col sm={12}>
              <Status />
            </Grid.Col>
          </Grid>
        </AppShell>
      </TypographyStylesProvider>
    </MantineProvider>
  );
}
