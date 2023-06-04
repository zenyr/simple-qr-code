import { Divider, Group, Input, Stack } from '@mantine/core';
import { useStore } from '../store/index.js';

export const Status = () => {
  const lastT = useStore((s) => s.lastT);
  return (
    <Stack>
      <Divider/>
      <Group spacing="xs">
        <Input.Wrapper
          label="Last QR content change"
          description={
            !lastT ? 'Never' : `${~~((Date.now() - lastT) / 1000)}s ago`
          }
          children={null}
        />
        <Input.Wrapper
          label="Powered by"
          description="react, mantine, qrcode.react, zustand, vite"
          children={null}
        />
        <Input.Wrapper
          label="Created by"
          description="@zenyr"
          children={null}
        />
        <Input.Wrapper label="version" description="2.0.1" children={null} />
      </Group>
    </Stack>
  );
};
