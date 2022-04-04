import React from "react";

export const OptionsWrapper = ({ children }: {children: any}) => (
  <div style={{ marginTop: "10px", display: "flex", columnGap: "10px" }}>
    {children}
  </div>
);

export const OptionItem = ({ children, label }: {children: any, label: any}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label>{label}</label>
    {children}
  </div>
);
