import moment from 'moment';

export const getYear = (date) => {
  return moment(date).year();
};

export const apiCall = (url, ...params) => {
  let data;
  fetch(url, {
    method: params.method,
    body: JSON.stringify(params.body)
  })
    .then((res) => res.json())
    .then((json) => {
      data = json;
    });
    return data;
};
