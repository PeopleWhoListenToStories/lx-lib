declare const data = "this is core";
declare type DemoData = {
    user: string;
    error: null | Error;
};
declare const normalTask: () => Promise<DemoData>;
export { data, normalTask };
declare const _default: {
    data: string;
    normalTask: () => Promise<DemoData>;
};
export default _default;
