export const sx = {
  paper: {
    marginTop: 2,
    minWidth: { md: 900, sm: '100%' },
    maxWidth: '90 vw',
    padding: 1,
    borderRadius: 3,
    maxHeight: '75vh',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      width: 8,
    },

    '&:::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: 3,
    },
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '72vh',
  },
};
