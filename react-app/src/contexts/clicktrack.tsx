import React, { createContext, useContext, useRef } from "react";
import { ClickTrack } from "../util/clicktrack";

/** Singleton ClickTrack */
const clickTrack = new ClickTrack();

const ClickTrackContext = createContext<ClickTrack>(clickTrack);

export const useClickTrackRef = (): React.MutableRefObject<ClickTrack> => {
  const context = useContext(ClickTrackContext);
  return useRef(context);
};

export const ClickTrackProvider: React.FC = ({ children }) => {
  return <ClickTrackContext.Provider value={clickTrack}>{children}</ClickTrackContext.Provider>;
};
