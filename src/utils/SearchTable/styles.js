import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    checkbox:{
      '&$checked': {
        color: '#3D70B2',
      },
    }
}));

export default useStyles;