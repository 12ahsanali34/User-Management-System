import { connect } from 'react-redux';
import { setUser } from './action';
import SignIn from './signin';

const mapStateToProps = ({ User }) => ({ User });

const mapDispatchToProps = dispatch => ({
	SetUser: data => dispatch(setUser(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignIn);