import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = ({ User }) => ({ User });

const mapDispatchToProps = dispatch => ({
	// SetUser: data => dispatch(setUser(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Dashboard);