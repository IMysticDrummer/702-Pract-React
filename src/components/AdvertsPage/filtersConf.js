export const enterFilterConfObject = {
  labelText: 'Name filter',
  name: 'name',
  type: 'input',
};

export const selectFilterConfObject = {
  label: 'Tags filter',
  name: 'tags',
  multiple: true,
};

const radioEnterValues = [
  { id: 'all', value: '', label: 'All' },
  { id: 'sell', value: 'sell', label: 'Sell' },
  { id: 'buy', value: 'buy', label: 'Buy' },
];

export const radioFilterConfObject = {
  label: 'Sell/Buy Filter',
  name: 'sellFilter',
  values: radioEnterValues,
};

export const sliderFilterConfObject = {
  name: 'slider',
  allowCross: false,
  step: null,
};

export const filterNameFunction = (ad, filters) => {
  if (filters.name?.length > 0) {
    const name = filters.name;
    if (name) {
      if (ad.name.toLowerCase().includes(name.toLowerCase())) return true;
    }
    return false;
  }
  return true;
};

export const filterTagsFunction = (ad, filters) => {
  if (filters.tags?.length > 0) {
    for (let index = 0; index < filters.tags.length; index++) {
      if (!ad.tags.includes(filters.tags[index].toLowerCase())) return false;
    }
  }
  return true;
};

export const filterSellFunction = (ad, filters) => {
  if (filters.sellFilter !== '') {
    if (filters.sellFilter === 'sell') {
      return ad.sale;
    }
    return !ad.sale;
  }

  return true;
};

export const calculateSliderRange = (adsList) => {
  const MAXSTEPS = 4;
  let marks = {};
  const minStep = Math.min(...adsList.map((a) => a.price));
  const maxStep = Math.max(...adsList.map((b) => b.price));

  let sliderStep = (maxStep - minStep) / 4;
  if (maxStep === minStep) sliderStep = 1;

  for (let index = 0; index <= MAXSTEPS; index++) {
    const mark =
      index === MAXSTEPS ? maxStep : Math.trunc(minStep + sliderStep * index);
    marks = {
      ...marks,
      [mark]: {
        style: { color: 'var(--main-color)' },
        label: `${mark}`,
      },
    };
  }
  return { range: [minStep, maxStep], marks };
};

export const filterPriceFunction = (ad, filters) => {
  if (filters.price) {
    if (ad.price >= filters.price[0] && ad.price <= filters.price[1])
      return true;
    return false;
  }
  return true;
};
