import { Group, InputWrapper } from '@mantine/core';
import { useStore } from '../store';

export const Status = () => {
  const lastT = useStore((s) => s.lastT);
  return (
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
        description="react, mantine, qrcode.react, react-measure"
        children={null}
      />
      <InputWrapper label="Created by" description="@zenyr" children={null} />
    </Group>
  );
};
