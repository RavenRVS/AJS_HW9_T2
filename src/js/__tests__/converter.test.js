import getBuffer from '../app';
import ArrayBufferConverter from '../converter';

describe('ArrayBufferConverter', () => {
  it('should convert ArrayBuffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toEqual({ id: 1, name: 'Hitman', level: 10 });
  });
});
