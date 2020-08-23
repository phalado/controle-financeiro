import { connect } from 'react-redux';
import AccountCreate from '../components/AccountCreate';
import { addAccount } from '../actions';

// const mapStateToProps = state => ({
//   rules: state.rules,
// });

const mapDispatchToProps = dispatch => ({
  addAccount: data => dispatch(addAccount(data)),
});

export default connect(null, mapDispatchToProps)(AccountCreate);
