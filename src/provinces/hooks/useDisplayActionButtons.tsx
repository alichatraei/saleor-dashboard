import { useState } from "react";

const useDisplayActionButtons = () => {
  const [displayActionButtons, setDisplayActionButtons] = useState<number>(-1);

  return [displayActionButtons, setDisplayActionButtons];
};

export default useDisplayActionButtons;
