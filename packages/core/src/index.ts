const data = `this is core`;

type DemoData = {
  user: string;
  error: null | Error;
};

const normalTask = () => {
  return new Promise<DemoData>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ user: 'lx', error: null });
      } else {
        reject({ user: 'lx-error', error: new Error('出错了') });
      }
    }, 1000);
  });
};

export { data, normalTask };
export default { data, normalTask };
