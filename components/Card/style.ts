export const sx = (fullView = false) => ({
  paper: {
    borderRadius: 3,
    width: fullView ? { sm: 'unset', md: 500 } : 300,
  },
  detailsBox: {
    marginTop: 2,
  },
  card: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 3,
    padding: 1,
  },
  cardImage: {
    width: '100%',
    height: 300,
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      borderRadius: 2,
    },
  },
  cardDetails: {
    padding: 0.7,
    borderRadius: 2,
    height: 130,
    marginTop: 0.7,
  },
  cardBtn: {
    borderRadius: 2,
    fontSize: 14,
    '& svg': {
      marginLeft: 0.5,
    },
  },
});
