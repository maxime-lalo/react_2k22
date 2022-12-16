// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

// ERC20 token contract

// Import the ERC20 interface
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

// Import the SafeMath library
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

// Import the AddressUtils library
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/utils/Address.sol";

// Import the StringUtils library
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/utils/Strings.sol";

// Import the ERC20Burnable contract
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";

contract Eth10 is ERC20, ERC20Burnable {
    using SafeMath for uint256;
    using Address for address;
    using Strings for string;

    // Enum to represent the different badge types
    enum BadgeType {
        None,
        Bronze,
        Silver,
        Gold,
        Platinum,
        Diamond
    }

    // create a mapping to store user transactions history
    mapping(address => mapping(uint256 => string)) public userTransactions;

    // Mapping from user addresses to their token balances
    mapping(address => uint256) private balances;

    // Mapping from user addresses to their user progression badges
    mapping(address => BadgeType) private userBadges;

    // Token name
    string public name = "Ethereum 10.0";

    // Token symbol
    string public symbol = "ETH10";

    // Number of decimals
    uint8 public decimals = 18;

    // Total supply of tokens
    uint256 public totalSupply = 100000000 * (10**uint256(decimals));

    // Constructor function
    constructor() public {
        // Set the initial supply of tokens to the total supply
        balances[msg.sender] = totalSupply;
        userBadges[msg.sender] = BadgeType.Diamond;
        userTransactions[msg.sender][block.number] = "Initial supply";
    }

    // Returns the balance of the specified address
    function balanceOf(address user) public view returns (uint256) {
        return balances[user];
    }

    // Transfer tokens from the sender to the specified recipient and store the transaction in userTransactions
    function transfer(address recipient, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        // Check if the sender has enough tokens to transfer
        require(balances[msg.sender] >= amount, "Insufficient balance.");

        // Subtract the amount from the sender's balance
        balances[msg.sender] = balances[msg.sender].sub(amount);

        // Add the amount to the recipient's balance
        balances[recipient] = balances[recipient].add(amount);

        // Store the transaction in userTransactions
        userTransactions[msg.sender][block.number] = "Transfer to ".concat(
            recipient.toString()
        );

        // Emit the Transfer event
        emit Transfer(msg.sender, recipient, amount);

        // Return a boolean
        return true;
    }

    // Returns the badge type of the specified user
    function getUserBadge(address user) public view returns (BadgeType) {
        return userBadges[user];
    }

    // Sets the badge type of the specified user
    function setUserBadge(address user, BadgeType badge) public {
        userBadges[user] = badge;
    }

    // Return the list of user order by token balance
    function getTopUsers() public view returns (address[] memory) {
        // Create an array of addresses
        address[] memory topUsers = new address[](10);

        // Create an array of balances
        uint256[] memory topBalances = new uint256[](10);

        // Loop through the balances mapping
        for (uint256 i = 0; i < 10; i++) {
            // Set the initial top balance to the first balance
            topBalances[i] = balances[msg.sender];
        }

        // Loop through the balances mapping
        for (uint256 i = 0; i < 10; i++) {
            // Loop through the balances mapping
            for (uint256 j = 0; j < 10; j++) {
                // Check if the current balance is greater than the top balance
                if (balances[msg.sender] > topBalances[j]) {
                    // Shift the top balances down the list
                    for (uint256 k = 9; k > j; k--) {
                        topBalances[k] = topBalances[k - 1];
                        topUsers[k] = topUsers[k - 1];
                    }

                    // Set the top balance to the current balance
                    topBalances[j] = balances[msg.sender];
                    topUsers[j] = msg.sender;

                    // Break out of the loop
                    break;
                }
            }
        }

        // Return the list of top users
        return topUsers;
    }

    // Returns the user transaction at the specified block number
    function getUserTransaction(address user, uint256 blockNumber)
        public
        view
        returns (string memory)
    {
        return userTransactions[user][blockNumber];
    }

    // return the user all history transactions
    function getUserTransactions(address user)
        public
        view
        returns (string[] memory)
    {
        // Create an array of strings
        string[] memory transactions = new string[](block.number);

        // Loop through the userTransactions mapping
        for (uint256 i = 0; i < block.number; i++) {
            // Store the transaction in the transactions array
            transactions[i] = userTransactions[user][i];
        }

        // Return the list of transactions
        return transactions;
    }

    // Returns the total number of transactions for the specified user
    function getUserTransactionsCount(address user)
        public
        view
        returns (uint256)
    {
        // Create a counter for the number of transactions
        uint256 transactionCount = 0;

        // Loop through the userTransactions mapping
        for (uint256 i = 0; i < block.number; i++) {
            // Check if the transaction is not empty
            if (bytes(userTransactions[user][i]).length > 0) {
                // Increment the transaction count
                transactionCount++;
            }
        }

        // Return the transaction count
        return transactionCount;
    }

    // Returns the total number of transactions
    function getTransactionsCount() public view returns (uint256) {
        // Return the block number
        return block.number;
    }
}
