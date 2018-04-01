module.exports = function() {

	var config = {};

	config.NODEJS_HOST = process.env.NODEJS_HOST || 'localhost';
	config.NODEJS_PORT = process.env.NODEJS_PORT || '8000';

	config.ROS_MASTER_URI = process.env.ROS_MASTER_URI || 'http://localhost:11311';
	config.ROS_IP = process.env.ROS_IP || null;

	config.ROS_FIX_TOPIC = process.env.ROS_FIX_TOPIC || '/fix';
	config.ROS_WEBSOCKET_TOPIC

	return config;

};