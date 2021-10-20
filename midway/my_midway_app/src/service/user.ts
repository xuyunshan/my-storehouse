import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { INumOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedNamsse',
      phone: '12345678901',
      email: 'yunsxu.xxx@adsfsss.com',
    };
  }
  async getNum(options: INumOptions) {
    return {
      num:options.num,
      username: 'mockedNamsse',
      phone: '12345678901',
      email: 'yunsxu.xxx@adsfsss.com',
    }
  }
}
