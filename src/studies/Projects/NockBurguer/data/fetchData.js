import axios from 'axios';
import PropTypes from 'prop-types';
import data_nockburguer from './data_nockburguer.json'

export const fetchData = async (url = data_nockburguer.url_api, method = "GET", body = null) => {
  try {
    const response = await axios({
      url,
      method: method.toLowerCase(),
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    });

    return response.data;
  } catch (error) {
    console.error("Request failed:", error);
    return data_nockburguer.mock_data;
  }
};

fetchData.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null])
  ])
};
