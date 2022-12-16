import "./Web3.css";

const history = [
    {
        id: 1,
        from: "0x123456789",
        to: "0x123456789",
        value: "100",
    },
    {
        id: 2,
        from: "0x123456789",
        to: "0x123456789",
        value: "10",
    },
    {
        id: 3,
        from: "0x123456789",
        to: "0x123456789",
        value: "45",
    }
]


function Home() {
  return (
    <div className="Web3">
      <div className="Web3__container">
        <h1>Buy Token</h1>
        <div className="Web3__container__input">
          <input type="text" placeholder="Amount" />
          <button>Buy</button>
        </div>
      </div>
      <div className="Web3__container">
        <h1>Sell Token</h1>
        <div className="Web3__container__input">
          <input type="text" placeholder="Amount" />
          <button>Sell</button>
        </div>
      </div>

      <div className="Web3__container">
        <h1>Transfer Token</h1>
        <div className="Web3__container__input">
          <input type="text" placeholder="Amount" />
          <input type="text" placeholder="Address" />
          <button>Transfer</button>
        </div>
      </div>
      <div className="Web3__container">
        <h1>Balance</h1>
        <div className="Web3__container__input">
          <input type="text" placeholder="Address" />
          <button>Get Balance</button>
        </div>
      </div>
      <div className="Web3__container">
        <h1>Transaction</h1>
        <div className="Web3__container__input">
            <input type="text" placeholder="Address" />
            <button>Get Transaction</button>
        </div>
        </div>

      <div className="Web3__container">
        <h1>Historique de vos Transaction</h1>
        <div className="Web3__container__list">
          <div className="Web3__container__list__item">
           {  history.map((item) => (
                <div className="Web3__container__list__item__transaction">
                    <p>{item.from} : {item.to} : {item.value}</p>
                </div>
            ))


        }
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
