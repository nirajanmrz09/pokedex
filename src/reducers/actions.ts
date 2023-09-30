/* eslint-disable @typescript-eslint/no-explicit-any */
export function pokemon(type: string, payload?: any) {
    return { type: type, payload: payload };
  }