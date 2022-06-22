import { Component, createContext, useState } from 'react';
import ApiCall from 'modules/ApiCall';
import { showNotifications, toBool } from 'modules/helpers/helpers';
import ApiContext from './ApiContext';
class ApiProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: false,
		};

		this.DELETE = this.DELETE.bind(this);
		this.PUT = this.PUT.bind(this);
		this.GET = this.GET.bind(this);
		this.POST = this.POST.bind(this);
		this.call = this.call.bind(this);
	}

	async DELETE(options) {
		options = options || {};
		options['url'] = options.hasOwnProperty('url') ? options['url'] : '';
		options['path'] = options.hasOwnProperty('path') ? options['path'] : '';
		options['isEncrypt'] = options.hasOwnProperty('isEncrypt') ? options['isEncrypt'] : true;
		options['data'] = options.hasOwnProperty('data') ? options['data'] : {};
		const res = await this.call({
			...options,
			method: 'DELETE',
		});
		return res;
	}

	/**
	 *
	 * @param {Object} options
	 * @param {string} options.url
	 * @param {string} options.path
	 * @param {string} options.method
	 * @param {Object} options.data
	 * @param {string} options.token
	 * @param {Number} options.contentType
	 * @param {Object} options.headers
	 * @param {Object} options.params
	 * @param {boolean} options.isEncrypt
	 */
	async PUT(options) {
		options = options || {};
		options['url'] = options.hasOwnProperty('url') ? options['url'] : '';
		options['path'] = options.hasOwnProperty('path') ? options['path'] : '';
		options['isEncrypt'] = options.hasOwnProperty('isEncrypt') ? options['isEncrypt'] : true;
		options['data'] = options.hasOwnProperty('data') ? options['data'] : {};
		const res = await this.call({
			...options,
			method: 'PUT',
		});
		return res;
	}

	/**
	 *
	 * @param {Object} options
	 * @param {string} options.url
	 * @param {string} options.path
	 * @param {string} options.method
	 * @param {Object} options.data
	 * @param {string} options.token
	 * @param {Number} options.contentType
	 * @param {Object} options.headers
	 * @param {Object} options.params
	 * @param {boolean} options.isEncrypt
	 */
	async POST(options) {
		options = options || {};
		options['url'] = options.hasOwnProperty('url') ? options['url'] : '';
		options['path'] = options.hasOwnProperty('path') ? options['path'] : '';
		options['isEncrypt'] = options.hasOwnProperty('isEncrypt') ? options['isEncrypt'] : true;
		options['data'] = options.hasOwnProperty('data') ? options['data'] : {};
		const res = await this.call({
			...options,
			method: 'POST',
		});
		return res;
	}

	/**
	 *
	 * @param {Object} options
	 * @param {string} options.url
	 * @param {string} options.path
	 * @param {string} options.method
	 * @param {Object} options.data
	 * @param {string} options.token
	 * @param {Number} options.contentType
	 * @param {Object} options.headers
	 * @param {Object} options.params
	 * @param {boolean} options.isEncrypt
	 * @param {boolean} options.showNotif
	 */

	async GET(options) {
		options = options || {};
		options['url'] = options.hasOwnProperty('url') ? options['url'] : '';
		options['path'] = options.hasOwnProperty('path') ? options['path'] : '';
		options['isEncrypt'] = options.hasOwnProperty('isEncrypt') ? options['isEncrypt'] : true;
		options['data'] = options.hasOwnProperty('data') ? options['data'] : {};
		const res = await this.call({
			...options,
			method: 'GET',
		});
		return res;
	}

	/**
	 *
	 * @param {Object} options
	 * @param {string} options.url
	 * @param {string} options.path
	 * @param {string} options.method
	 * @param {Object} options.data
	 * @param {string} options.token
	 * @param {Number} options.contentType
	 * @param {Object} options.headers
	 * @param {Object} options.params
	 * @param {boolean} options.isEncrypt
	 * @param {boolean} options.showNotif - options to show success or error messages from backend
	 */

	async call(options) {
		// setFetching(true);
		this.setState({
			isFetching: true,
		});

		options = options || {};
		options['url'] = options.hasOwnProperty('url') ? options['url'] : '';
		options['path'] = options.hasOwnProperty('path') ? options['path'] : '';
		options['method'] = options.hasOwnProperty('method') ? options['method'] : 'GET';
		options['data'] = options.hasOwnProperty('data') ? options['data'] : {};
		let token = options.hasOwnProperty('token') ? options['token'] : null;
		options['contentType'] = options.hasOwnProperty('contentType') ? options['contentType'] : null;
		options['headers'] = options.hasOwnProperty('headers') ? options['headers'] : {};
		options['params'] = options.hasOwnProperty('params') ? options['params'] : {};
		options['isEncrypt'] = options.hasOwnProperty('isEncrypt') ? options['isEncrypt'] : true;
		let showNotif = options.hasOwnProperty('showNotif') ? options['showNotif'] : true; // if (!token) {
		//     await User.fetchLoggedInUser();
		//     if (User.current) token = User.current.token;
		// }

		options['token'] = token;
		let res = await ApiCall(options);

		if (res) {
			try {
				const _msgs = res.message || [];

				const _isError = !toBool(res.status);

				// show error notification even if it's disabled
				if (_isError) {
					showNotifications(_msgs, _isError);
				} else {
					if (showNotif) showNotifications(_msgs, _isError);
				}
			} catch (error) {
				console.error('error at calling api', error);
			}
		} else {
			console.warn('[ApiCall] failed');
			res = {
				status: false,
				message: '[ApiCall] failed',
			};
		}

		// setFetching(false);
		this.setState({
			isFetching: false,
		});
		return res;
	}



	render() {
		// const router = useRouter();
		// const [isFetching, setFetching] = useState(false); // fire to UIProvider

		return (
			<ApiContext.Provider
				value={{
					call: this.call,
					POST: this.POST,
					PUT: this.PUT,
					GET: this.GET,
					DELETE: this.DELETE,
					isFetching: this.state.isFetching,
				}}
			>
				{this.props.children}
			</ApiContext.Provider>
		);
	}
}

// export default withRouter(ApiProvider);
export default ApiProvider;
