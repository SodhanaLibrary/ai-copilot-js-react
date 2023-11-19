import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    ftBtn: {
        marginLeft: 8,
    },
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
    },
    popover: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1001,
    },
    content: {
        background: '#fff',
        padding: 20,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
        zIndex: 2000,
    },
    automationBox: {
        width: 800,
    },
    autoBtn: {
        marginRight: 8,
    }
}));

export default useStyles;
