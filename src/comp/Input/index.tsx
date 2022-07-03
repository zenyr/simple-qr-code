import { InputConfig } from "./Config";
import { InputContent } from "./Content";
import { InputOverlay } from "./Overlay";

export const Input = () => {
  return (
    <>
      <InputContent />
      <InputOverlay />
      <InputConfig />
    </>
  );
};
