const VALIDATE = {
  NOTHING: 'Chưa có dữ liệu',
  REQUIRE: 'Dữ liệu không được để trống',
  SELECT_REQUIRE: 'Chưa chọn',
  EMAIL: {
    REGEX:
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    MESSAGE: 'Email không hợp lệ',
  },
  PHONE: {
    REGEX: /((09|03|04|07|08|05)+([0-9]{8,13})\b)/,
    MESSAGE: 'Số điện thoại không hợp lệ',
  },
  ONLY_NUMBER: {
    REGEX: /^\d+$/,
    MESSAGE: 'Sai định dạng.',
  },
};

export default VALIDATE;
