import { ActionIcon, Textarea } from '@mantine/core';
import { ChangeEvent, useCallback } from 'react';
import { X } from 'tabler-icons-react';
import { useStore } from '../../store/index.js';

export const InputContent = () => {
  const input = useStore((s) => s.input);
  const setInput = useStore((s) => s.setInput);
  const handleClear = useCallback(() => setInput(''), [setInput]);
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.currentTarget.value),
    [setInput]
  );

  return (
    <Textarea
      label="QR Content"
      placeholder="URL/string etc."
      value={input}
      onChange={handleInputChange}
      autosize
      maxRows={8}
      rightSection={
        input ? (
          <ActionIcon onClick={handleClear}>
            <X />
          </ActionIcon>
        ) : null
      }
      required
    />
  );
};
