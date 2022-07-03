import { Divider, Group, InputWrapper } from '@mantine/core';
import { useStore } from '../store';

export const Status = () => {
  const lastT = useStore((s) => s.lastT);
  return (
    <>
      <Divider style={{ marginBottom: 10 }} />
      <Group>
        <InputWrapper
          label="Last QR content change"
          description={
            !lastT ? 'Never' : `${~~((Date.now() - lastT) / 1000)}s ago`
          }
          children={null}
        />
        <InputWrapper
          label="Powered by"
          description="react, mantine, qrcode.react, react-measure, zustand"
          children={null}
        />
        <InputWrapper label="Created by" description="@zenyr" children={null} />
      </Group>
    </>
  );
};
