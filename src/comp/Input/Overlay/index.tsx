import { ActionIcon, Textarea } from '@mantine/core';
import { ChangeEvent, useCallback, useEffect } from 'react';
import { X } from 'tabler-icons-react';
import { useStore } from '../../../store';
import { InputOverlaySrcRenderer } from './OveraySrcRenderer';

const REG_URL = /^https?:/;

export const InputOverlay = () => {
  const overlay = useStore((s) => s.overlay);
  const setOverlay = useStore((s) => s.setOverlay);
  const setOverlaySrc = useStore((s) => s.setOverlaySrc);
  const setOverlaySize = useStore((s) => s.setOverlaySize);
  const size = useStore((s) => s.size);
  const overlaySize = useStore((s) => s.overlaySize);
  const loss = (overlaySize[0] * overlaySize[1]) / (size * size);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setOverlay(e.currentTarget.value),
    [setOverlay]
  );
  const handleClear = useCallback(() => setOverlay(''), [setOverlay]);
  const isOverlayImg = REG_URL.test(overlay);
  useEffect(() => {
    if (isOverlayImg || !overlay) {
      setOverlaySrc(overlay);
      setOverlaySize([0, 0]);
    }
  }, [isOverlayImg, overlay, setOverlaySrc, setOverlaySize]);

  return (
    <>
      <Textarea
        label="QR overlay"
        description={`Allows image url / text. Do not overuse. ${
          loss > 0 ? `Expected loss: at least ${(loss * 100).toFixed(1)}%` : ''
        }`}
        placeholder="URL/string etc."
        value={overlay}
        onChange={handleInputChange}
        autosize
        rightSection={
          overlay ? (
            <ActionIcon onClick={handleClear}>
              <X />
            </ActionIcon>
          ) : null
        }
        maxRows={8}
      />
      {overlay && !isOverlayImg && <InputOverlaySrcRenderer />}
    </>
  );
};
