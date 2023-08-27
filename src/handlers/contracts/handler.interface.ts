export interface IUpdateHandler {
  match(data: any): boolean;
  handle(data: any): void;
}
