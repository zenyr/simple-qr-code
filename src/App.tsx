import { AppShell, Grid, Header, Text } from '@mantine/core';
import { Qrcode } from 'tabler-icons-react';
import { Input } from './comp/Input/index.js';
import { Output } from './comp/Output.js';
import { Status } from './comp/Status.js';

export const App = () => {
  return (
    <AppShell
      padding="md"
      fixed
      header={
        <Header height={50} p="xs">
          <Text size="xl">
            <Qrcode
              style={{
                display: 'inline-block',
                verticalAlign: 'sub',
                marginRight: 5,
              }}
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
  );
};
