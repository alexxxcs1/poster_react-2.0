import qs from 'qs';
const getActListPost = (ajaxinstance) => {
    const customer = {}
    customer.getActList = () => {
        return ajaxinstance.post('getActivity',qs.stringify({
            all:1
        }));
      }
    return customer
  }
  
  export default getActListPost