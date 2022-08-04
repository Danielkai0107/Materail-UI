import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: '1rem',
  },
  buttons: {
    marginTop: '2rem',
  },
  cardGrid: {
    padding: '1rem 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    aspectRatio: '16/9',
  },
  cardContent: {
    flexGrow: '1',
  },
}));

export default useStyles;
