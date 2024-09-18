export type StaticApiResponse = {
  limit: number;
  skip: number;
  total: number;
};

export type ApiResponse<T, K extends string> = StaticApiResponse & {
  [key in K]: T[];
};
