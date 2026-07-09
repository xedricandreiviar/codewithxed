"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface GateContextType {
  gateOpen: boolean;
  setGateOpen: (open: boolean) => void;
}

const GateContext = createContext<GateContextType>({
  gateOpen: false,
  setGateOpen: () => {},
});

export function GateProvider({ children }: { children: ReactNode }) {
  const [gateOpen, setGateOpen] = useState(false);
  return (
    <GateContext.Provider value={{ gateOpen, setGateOpen }}>
      {children}
    </GateContext.Provider>
  );
}

export function useGate() {
  return useContext(GateContext);
}
