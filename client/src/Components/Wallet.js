import React, { useState } from 'react'

const Wallet = () => {
    const [balance,setBalance] = useState(0);
  return (
    <div>
        <div>
            <div><h1>Wallet</h1></div>
            </div>
        <div>
            <div><h3>Total Balance:{balance}</h3></div>
        </div>
        <div>
        <div>
            < button onClick={() => setBalance(0)}>0</button>
            < button onClick={() => setBalance(balance + 300)}>300</button>
            < button onClick={() => setBalance(balance + 500)}>500</button>
            < button onClick={() => setBalance(balance + 1000)}>1000</button>
        </div>
        </div>
        
    </div>
  )
}

export default Wallet