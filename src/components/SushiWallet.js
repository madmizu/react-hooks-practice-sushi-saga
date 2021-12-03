import React from'react';


function SushiWallet ({ increaseBudget }) {

    return(
        <div>
            <p> Add Funds to Your Wallet </p>
            <form onSubmit={(e)=>{
                e.preventDefault();
                increaseBudget(e.target.addedMoney.value);
                e.target.reset();
                } }
            >
                <input id="addedMoney" type="text" placeholder="Enter money..." /><br/>
                <button className="wallet" type="submit"> Add </button>
            </form>
        </div>
    )
}

export default SushiWallet;