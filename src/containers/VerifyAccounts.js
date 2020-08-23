import { connect } from 'react-redux';
import VerifyAccounts from '../components/VerifyAccounts';

const mapStateToProps = state => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, null)(VerifyAccounts);
