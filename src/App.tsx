// src/App.tsx
import React from "react";
import DSText from "./design-system/DSText";
import { OtherComponent } from "./design-system/OtherComponent";

const App = () => {
  return (
    <div>
      <h1>Minimalistic Page with DSText Component</h1>
      <OtherComponent />
      <br />
      <DSText size={18} color="red">
        Hello, World!
      </DSText>
    </div>
  );
};

export default App;
