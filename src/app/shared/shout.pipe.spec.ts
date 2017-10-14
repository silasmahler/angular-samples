import { ShoutPipe } from './shout.pipe';

describe('ShoutPipe', () => {
  it('create an instance', () => {
    const pipe = new ShoutPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return: blabla', () => {
    const pipe = new ShoutPipe();
    // expect(pipe.transform(1000, 'Anzahl')).toBe('Anzahl: 1000');
  });
});
