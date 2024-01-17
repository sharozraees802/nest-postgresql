import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
  public Key: string = 'BOADGDASFSAFDWEF#$@$@#$@';
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (request.header('Key') == undefined) return false;
    return request.header('Key') === this.Key;
  }
}
