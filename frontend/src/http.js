
import axios from 'axios';
var csrf_token = '<?php echo csrf_token(); ?>';
export default axios.create({
	baseURL: 'http://127.0.0.1:8000/api',
	
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		
		
	},
});