import { InterceptorInterface, Action, Interceptor } from 'routing-controllers'

@Interceptor()
export class AutoAssignJSONInterceptor implements InterceptorInterface {
  intercept(action: Action, content: object): any {
    // if (typeof content === 'object') return JSON.stringify(Object.assign({ message: 'ok' }, content))
    // return JSON.stringify({ message: content })
    return JSON.stringify(content)
  }
}