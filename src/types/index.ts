export type Nullable<T> = T | null;

export type ApiResult<T> = {
  data: T;
  error?: string;
};
