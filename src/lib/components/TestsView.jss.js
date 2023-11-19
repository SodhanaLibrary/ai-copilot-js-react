import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    testName: {
        padding: 8,
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',
        '&:hover': {
           backgroundColor: 'rgb(240, 240, 240)',
        },
    },
    successStep: {
        backgroundColor: '#6fbf73',
    }
}));

export default useStyles;
