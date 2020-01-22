declare module "MyModels" {
  export type Topic = {
    id: string;
    title: string;
    icon: {
      color: string;
      library: string;
      name: string;
    };
  };
}
