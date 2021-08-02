export const findEvenIndex = (arr: number[]): number => {
  const sums = arr.reduce((acc: number[], cur, idx) => {
    acc[idx] = idx > 0 ? acc[idx - 1] + cur : cur;
    return acc;
  }, []);

  return sums.findIndex(
    (sum, idx) => sum * 2 - arr[idx] === sums[sums.length - 1]
  );
};

export const encode = (str: string): string => {
  const charArr = Array.from(str.toLowerCase());
  const counts = charArr.reduce((acc: Record<string, number>, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  return charArr.map((item) => (counts[item] === 1 ? '(' : ')')).join('');
};

export const validateIP = (address: string): boolean => {
  return /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/.test(
    address
  );
};

export const add = (a: string, b: string): string => {
  let result = '';

  for (
    let i = a.length - 1, j = b.length - 1, c = 0;
    i >= 0 || j >= 0 || c === 1;
    i--, j--, c = Math.floor(c / 2)
  ) {
    c += a[i] === '1' ? 1 : 0;
    c += b[j] === '1' ? 1 : 0;

    result = `${String(c % 2)}${result}`;
  }

  return result;
};
