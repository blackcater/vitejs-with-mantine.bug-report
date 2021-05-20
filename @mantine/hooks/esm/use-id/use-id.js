import { useRef } from 'react';

function randomId() {
  return `mantine-${Math.random().toString(36).substr(2, 9)}`;
}
function useId(id, generateId = randomId) {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}

export { randomId, useId };
//# sourceMappingURL=use-id.js.map
