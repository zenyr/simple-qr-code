import { Radio, RadioGroup, Textarea } from '@mantine/core';
import { ChangeEvent, useCallback } from 'react';
import { Store, useStore } from '../store';

export const Input = () => {
  const store = useStore();
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      store.setInput(e.currentTarget.value),
    [store]
  );
  const handleSizeChange = useCallback(
    (size: string) => store.setSize(parseInt(size, 10) as Store['size']),
    [store]
  );
  const handleLevelChange = useCallback(
    (level: string) => store.setLevel(level as Store['level']),
    [store]
  );
  return (
    <>
      <Textarea
        label="QR Content"
        placeholder="URL/string etc."
        value={store.input}
        onChange={handleInputChange}
        autosize
        maxRows={8}
        required
      />
      <RadioGroup
        label="Image size"
        description="Decides final image's width (px)"
        value={String(store.size)}
        onChange={handleSizeChange}
        required>
        <Radio value="128" label="128" />
        <Radio value="256" label="256" />
        <Radio value="512" label="512" />
        <Radio value="1024" label="1024" />
      </RadioGroup>
      <RadioGroup
        label="Error correction level"
        description="Increases density"
        value={store.level}
        onChange={handleLevelChange}
        required>
        <Radio value="L" label="L (7%)" />
        <Radio value="M" label="M (15%)" />
        <Radio value="Q" label="Q (20%)" />
        <Radio value="H" label="H (30%)" />
      </RadioGroup>
    </>
  );
};
