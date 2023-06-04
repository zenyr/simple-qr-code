import { Stack } from "@mantine/core";
import { InputConfig } from "./Config.js";
import { InputContent } from "./Content.js";
import { InputOverlay } from "./Overlay/index.js";

export const Input = () => {
  return (
    <Stack spacing="xs">
      <InputContent />
      <InputOverlay />
      <InputConfig />
    </Stack>
  );
};
