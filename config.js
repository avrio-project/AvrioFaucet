/*
    This file is part of XeniumFaucet.

    XeniumFaucet is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    XeniumFaucet is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with XeniumFaucet.  If not, see <https://www.gnu.org/licenses/>.
*/

module.exports = {
	// Filenames for the databases
	databases: {
		transactions: 'transactions.db',
		addresses: 'addresses.db'
	},

	// WalletAPI configuration
	wallet: {
		// Set openWallet to true if it should open the wallet configured
		openWallet: false,

		// The wallet to open
		walletToOpen: {
			filename: 'faucet',
			password: 'faucet',
			daemon: {
				host: '127.0.0.1',
				port: 24524
			}
		},

		// The server the wallet API is running on
		host: '127.0.0.1',
		port: 24562,

		// Password for the wallet API
		password: 'faucet',

		// Coin configuration
		defaultUnlockTime: 40,
		defaultMixin: 2,
		decimalPlaces: 4,
		decimalDivisor: 10 ** 4, // 10 to the power of decimalPlaces
		defaultFee: 0.025
	},

	// Google reCaptcha v2 configuration
	recaptcha: {
		// Set to true if reCaptcha should be enabled
		enabled: false,

		// Credentials from reCaptcha's Admin Console
		siteKey: 'YOUR SITEKEY',
		secretKey: 'YOUR SECRETKEY'
	},

	// Backend configuration
	faucet: {
		// The port where the faucet should run on
		port: 8909,

		// The minimum amount of coins to be sent
		minimumCoinsToBeSent: 0.001,

		// The maximum amount of coins to be sent
		maximumCoinsToBeSent: 0.01,

		// Address validation
		walletAddressLength: 98,
		walletAddressStartsWith: 'AIO',

		// Coins are claimable every this many seconds
		claimableEvery: (24 * 60 * 60 * 1000), // 24 hours
	},

	// Frontend configuration
	frontend: {
		// Coin configuration for the frontend
		coinName: 'Avrio',
		ticker: 'AIO',

		// Coin claiming interval as a string
		claimableEvery: '24 hours',

		// The person this faucet is run by, with Discord Tag
		faucetOwner: 'Leo Cornelius',
		faucetOwnerDiscord: 'Leo Cornelius [AIO]#9160'
	}
}
