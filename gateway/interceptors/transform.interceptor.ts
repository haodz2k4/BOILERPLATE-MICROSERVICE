import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { Response } from "common/interfaces/response.interface";
import { Reflector } from "@nestjs/core";
import { RESPONSE_MESSAGE } from "constants/app.constant";

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {

    constructor(private reflector: Reflector) {}
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>>  {
        
        const res = context.switchToHttp().getResponse();
        const message = this.reflector.get<string>(RESPONSE_MESSAGE, context.getHandler()) || 'success';
        return next.handle().pipe(map(data => ({ 
            data,
            statusCode: res.statusCode,
            message
        })));
    }
    
}