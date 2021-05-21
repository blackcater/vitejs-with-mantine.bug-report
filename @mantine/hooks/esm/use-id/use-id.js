import { useRef } from 'react';
import { randomId } from '@mantine/utils';

function useId(id, generateId = randomId) {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}

export { useId };
//# sourceMappingURL=use-id.js.map
