import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    testName: {
        width: '100%',
        padding: 8,
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',
        '&:hover': {
           backgroundColor: 'rgb(240, 240, 240)',
        },
    },
    successStep: {
        backgroundColor: '#6fbf73',
    },
    failedStep: {
        backgroundColor: '#ff2222',
    }
}));

export default useStyles;
