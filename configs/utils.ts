import { validateOrReject } from 'class-validator'
/**
 * 到处对象的值到数组
 * @param dict 目标对象
 */
export const dictToArray = (dict: object): Array<any> => 
  Object.keys(dict).map(name => dict[name])

/**
 * 控制台打印
 */
export const print = {
  log: (text: string) => console.log('\x1b[37m\%s \x1b[2m%s\x1b[0m', '>', text),
  danger: (text: string) => console.log('\x1b[31m\%s \x1b[31m%s\x1b[0m', '>', text),
  tip: (text: string) => console.log('\x1b[36m\%s \x1b[36m%s\x1b[0m', '>', text)
}

export async function validateOrRejectExample(input) {
  try {
      await validateOrReject(input);
  } catch (errors) {
      console.log("Caught promise rejection (validation failed). Errors: ", errors)
  }
}