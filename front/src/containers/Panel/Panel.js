import { connect } from 'react-redux';
import * as configActions from '../../actions/configActions';
import Panel from '../../components/Panel/Panel';

function mapStateToProps(state) {
    return {
        mappedConfigState: state.configState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getConfig: () => dispatch(configActions.getConfig()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);