import { createContext } from "react";

export const LightspeedContext = createContext({
  enabled: true,
  toggleLightspeed: () => {}
});
