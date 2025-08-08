export type AppStore = {
  loading: boolean;
  user: { [key in string]: any };
  onRefresh: boolean;
  data: { [key: string]: any };
};
