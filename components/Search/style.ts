export const sx = {
  paper: {
    borderRadius: 3,
    display: 'flex',
    padding: 1,
  },
  icon: { fill: '#000 !important', fontSize: 35, marginRight: 6 },
  field: {
    backgroundColor: '#bdbdbd',
    borderRadius: 2,
    marginRight: 1,

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'unset !important',
    },
    '& .MuiInputBase-input': {
      fontWeight: 'bold',
      fontSize: 15,
    },
  },
  formBtn: {
    width: 40,
    borderRadius: 2,
  },
};
