import { Group, Radio } from '@mantine/core';
import { useCallback } from 'react';
import { Store, useStore } from '../../store/index.js';

export const InputConfig = () => {
  const size = useStore((s) => s.size);
  const level = useStore((s) => s.level);
  const setSize = useStore((s) => s.setSize);
  const setLevel = useStore((s) => s.setLevel);

  const handleSizeChange = useCallback(
    (size: string) => setSize(parseInt(size, 10) as Store['size']),
    [setSize]
  );
  const handleLevelChange = useCallback(
    (level: string) => setLevel(level as Store['level']),
    [setLevel]
  );
  return (
    <Group spacing="xs">
      <Radio.Group
        label="Image size"
        description="Decides final image's width (px)"
        value={String(size)}
        onChange={handleSizeChange}
        required
      >
        <Group mt="xs">
          <Radio value="128" label="128" />
          <Radio value="256" label="256" />
          <Radio value="512" label="512" />
          <Radio value="1024" label="1024" />
        </Group>
      </Radio.Group>
      <Radio.Group
        label="Error correction level"
        description="Increases density"
        value={level}
        onChange={handleLevelChange}
        required
      >
        <Group mt="xs">
          <Radio value="L" label="L (7%)" />
          <Radio value="M" label="M (15%)" />
          <Radio value="Q" label="Q (20%)" />
          <Radio value="H" label="H (30%)" />
        </Group>
      </Radio.Group>
    </Group>
  );
};
