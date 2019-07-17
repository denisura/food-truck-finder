import axios from 'axios';

export default config => {
  return axios.create(config);
};

export const fetchData = function({ filter, order, pagination }) {
  const params = [];
  params.push('$select=applicant,location,start24,end24');
  params.push('$limit=' + (pagination.limit + 1));
  params.push('$offset=' + pagination.offset);
  params.push('$order=' + order.join(','));
  params.push(
    '$where=dayorder = ' +
      filter.dayorder +
      ' AND ((start24 <= "' +
      filter.time +
      '" AND end24 >= "' +
      filter.time +
      '" AND end24 >= start24) OR (start24 >= "' +
      filter.time +
      '" AND end24 <= "' +
      filter.time +
      '" AND end24 <= start24))'
  );
  return this.get('?' + params.join('&')).then(response => {
    return response.data;
  });
};
