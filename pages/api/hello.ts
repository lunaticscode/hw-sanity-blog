// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import helmet from "helmet";
import { label, Middleware, use } from "next-api-middleware";
// import { convert } from "next-api-compose";
import { IncomingMessage, Server, ServerResponse } from "http";
import { compose } from "next-api-compose";
// import { convert } from "next-api-compose";
/**
 * 
 * 
const withHelmet = convert(helmet())

export default compose([withBar, withFoo, withHelmet], (request, response) => {
  const { foo, bar } = request
  response.status(200).json({ foo, bar })
})
 */
const _helmet = helmet();
// export declare function convert<
//   RequestType,
//   ResponseType = NextApiResponse,
//   DataType = any
// >(
//   middleware: ConnectExpressMiddleware
// ): (
//   handler: ExtendedNextApiHandler<RequestType, ResponseType, DataType>
// ) => (
//   request: ExtendableNextApiRequest<RequestType>,
//   response: ExtendableNextApiResponse<ResponseType, DataType>
// ) => Promise<void>;

// const convert = function (r) {
//   return function (e) {
//     return function (n, t) {
//         return Promise.resolve(
//           r(n, t, function () {
//             return e(n, t);
//           })
//         ).then(function () {});
//     };
//   };
// };
// const withHelmet = convert(helmet());

const convert = (
  f: (
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage>,
    next: (err?: unknown) => void
  ) => void | Promise<void>
) => {
  // return function (e: any) {
  //   return function (n: any, t: any) {
  //     return Promise.resolve(
  //       f(n, t, function () {
  //         return e(n, t);
  //       })
  //     );
  //   };
  // };
  return function () {};
};

// convert(helmet());
// compose([convert(helmet())], (req, res) => {
//   return res.json({})
// });
// console.log(withHelmet);

const printLog: Middleware = async (req, res, next) => {
  console.log("printLog");
  // const decodedUrl = decodeURI(req.url || "");
  // const sqlInspectorRegex =
  //   /(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/;
  // const result1 = sqlInspectorRegex.test(req.url || "");
  // const result2 = sqlInspectorRegex.test(decodedUrl);
  // let result3;
  // if (req.body && Object.keys(req.body).length) {
  //   result3 = Object.values(req.body).every((data) => {
  //     console.log(data);
  //     const testResult = sqlInspectorRegex.test((data as string) || "");
  //     console.log(testResult);
  //     return testResult;
  //   });
  // }
  // console.log(result3);
  // if (!result1 || !result2 || !result3) {
  //   return Promise.reject();
  // }
  return await next();
};

const withMiddlware = use([printLog]);

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default withMiddlware(handler);
