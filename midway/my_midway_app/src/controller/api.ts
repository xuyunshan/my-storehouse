import { Inject, Controller, Post, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse, IGetNumResponse } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query() uid: string): Promise<IGetUserResponse> {
    console.log('uuid',uid) 
    const user = await this.userService.getUser({ uid });
    console.log('uid',uid)
    return { success: true, message: 'OK', data: user };
  }
  @Post('/get_num')
  async getUser1(@Query() num: number): Promise<IGetNumResponse> {
    console.log('num',num) 
    const data = await this.userService.getNum({ num });
    console.log('num',num)
    return { success: true, message: 'OK', data: data };
  }
}
