import {addCharBetweenThousands} from ".."
import { mocks } from './mocks';



describe(`addCharBetweenThousands`, () => {
  mocks.forEach(m => it(m[0].description, () =>
    expect(addCharBetweenThousands(m[0].str, m[0].config))
    .toEqual(m[1])))
});

// npm run test:unit add-char-between-thousands.test.ts
