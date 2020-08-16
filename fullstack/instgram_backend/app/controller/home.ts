import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // node http协议 基于应答式
    // ctx = req+res
    // ctx.respond 
    // ctx.body = 'hello'
    ctx.body = await ctx.service.test.sayHi('egg');
    
  }
}
