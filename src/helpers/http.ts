import { TResponse } from "./types/http";

export const badRequest = (error: Error): TResponse => ({
  statusCode: 400,
  body: error,
});

export const ok = (body: any): TResponse => ({
  statusCode: 200,
  body: body,
});

export const unauthorization = (error: any): TResponse => ({
  statusCode: 401,
  body: error,
});
