import {Adapter} from './adapter';
import {mockFlight} from '../../common/mock/mock-flight';

describe('Adapter to client', () => {
  const flight = mockFlight;
  it('should change previewImg link', () => {
    expect(Adapter.adaptToClient(flight)).toEqual('img/content/guitar-8.jpg');
  });
});
