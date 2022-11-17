export const toCommaNumber = (str: string) => {
  return parseInt(str).toLocaleString();
};

export const getAssetsColor = (assets: string, payments: string) => {
  const assetsNum = parseInt(assets);
  const paymentsNum = parseInt(payments);
  if (assetsNum > paymentsNum) {
    return 'text-red-700';
  } else if (assetsNum === paymentsNum) {
    return 'text-black-100';
  } else {
    return 'text-blue-700';
  }
};

export const hideAccountNumber = (accountNum: string) => {
  return accountNum
    .split('')
    .map((x, i) => {
      if (i > 1 && i < accountNum.length - 2) {
        return '*';
      }
      return x;
    })
    .join('');
};
