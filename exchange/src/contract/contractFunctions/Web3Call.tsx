
 



export const contractFunctions = [
    {
        name: 'buyToken',
        inputs: [
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [],
    },
    {
        name: 'sellToken',
        inputs: [
            {
                name: 'amount',
                type: 'uint256',
            },
        ],
        outputs: [],
    },
    {
        name: 'transferToken',

        inputs: [
            {
                name: 'amount',
                type: 'uint256',
            },
            {
                name: 'address',
                type: 'address',
            },
        ],      
        outputs: [],
    },
    {
        name: 'balanceOf',
        inputs: [
            {

                name: 'address',
                type: 'address',
            },  
        ],
        outputs: [
            {
                name: 'balance',
                type: 'uint256',
            },
        ],
    },
    {
        name: 'transaction',
        inputs: [
            {
                name: 'address',
                type: 'address',
            },
        ],
        outputs: [
            {

                name: 'transaction',
                type: 'uint256',
            },
        ],
    },
    {
        name: 'historique',
        inputs: [
            {
                name: 'address',
                type: 'address',
            },
        ],
        outputs: [
            {
                name: 'historique',
                type: 'uint256',
            },
        ],
    },
    
];