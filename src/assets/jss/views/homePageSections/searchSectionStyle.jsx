import { container, primaryColor } from "assets/jss/minso-kit.jsx";

const searchSectionStyle = {
  container: {
    ...container,
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchItem: {
    margin: '12px 12px 12px 0',
  },
  searchAction: {
    margin: '36px auto 0 0'
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: '24px',
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
};
export default searchSectionStyle;
