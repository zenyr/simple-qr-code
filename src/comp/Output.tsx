import { Button, Group, Input, Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { ClassNames } from '@emotion/react';
import download from 'js-file-download';
import { QRCodeCanvas } from 'qrcode.react';
import { MouseEvent, useCallback, useState } from 'react';
import { Download, ZoomInArea } from 'tabler-icons-react';
import { useStore } from '../store/index.js';

export const Output = () => {
  const store = useStore();
  const { ref, width } = useElementSize();

  const [busy, setBusy] = useState(false);

  const getCanvas = useCallback(
    () => document.querySelector('canvas.result') as HTMLCanvasElement | null,
    []
  );
  const handlePopup = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      const canvas = getCanvas();
      if (!canvas) return;
      const pop = window.open();
      const dataUrl = canvas.toDataURL();
      const dpr = window.devicePixelRatio || 1;
      const width = store.size / dpr;
      const sizeTxt = `Image size: ${store.size}px${
        dpr !== 1
          ? ` / Current size: ${width}px (with devicePixelRatio: ${dpr})`
          : ''
      }`;
      pop?.document.write(
        `<img src="${dataUrl}" style="max-width: 100%;height:auto;" width="${width}" /><br/><span style="font: 10pt monospace">${sizeTxt}</span>`
      );
    },
    [getCanvas, store.size]
  );

  const handleDownload = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (busy) return;
      setBusy(true);
      const canvas = getCanvas();
      if (!canvas) return;
      canvas.toBlob((blob) => {
        setBusy(false);
        if (!blob) return;
        const filename = prompt('Enter a filename.', 'qrcode.png');
        if (!filename) return;
        download(blob, filename, 'image/png');
      });
    },
    [getCanvas, busy]
  );

  return (
    <Stack spacing="xs">
      <Input.Wrapper
        ref={ref}
        label="QR Result"
        description={
          width < store.size
            ? `Seems ${width}px but the image is still ${store.size}px`
            : void 0
        }
        style={{ position: 'relative' }}
      >
        <ClassNames>
          {({ css, cx }) => (
            <QRCodeCanvas
              className={cx(
                'result',
                css`
                  display: block;
                  margin-top: 5px;
                  max-width: 100%;
                  height: auto !important;
                `
              )}
              value={store.input}
              size={store.size}
              level={store.level}
              imageSettings={{
                src: store.overlaySrc,
                excavate: true,
                width: store.overlaySize[0] || 0,
                height: store.overlaySize[1] || 0,
              }}
              includeMargin
            />
          )}
        </ClassNames>
      </Input.Wrapper>
      <Group spacing="xs">
        <Button
          compact
          variant="subtle"
          onClick={handlePopup}
          leftIcon={<ZoomInArea size={16} />}
        >
          Popup
        </Button>
        <Button
          compact
          variant="subtle"
          onClick={handleDownload}
          disabled={busy}
          leftIcon={<Download size={16} />}
        >
          Download
        </Button>
      </Group>
    </Stack>
  );
};
