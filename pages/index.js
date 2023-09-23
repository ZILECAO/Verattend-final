import { ethers } from "ethers";
import { useState } from "react";
import { ContractABI } from '../components/contractABI.js';


// create provider variable
let provider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // we are in the browser and metamask is running
    provider = new ethers.providers.Web3Provider(window.ethereum);

} else {
    // we are on the server *OR* the user is not running metamask
    // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
    provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/<insert alchemy key or use infura http link>");
    // provider = new ethers.providers.Web3Provider(provider);
}


// create smart contract variable wiht inputs: contract address, abi, and signer
const Donate = new ethers.Contract(
    '0x2D53197C8Dfb493b64111BcA29286f613912a7BB',
    ContractABI,
    provider.getSigner()
);


export default function Home() {
    // getting contract balance
    const [contractBalance, setContractBalance] = useState();

    const getContractBalance = async () => {
        try {
            const weiContractBalance = await Donate.getContractBalance.call();
            const contractBalance = ethers.utils.formatEther(weiContractBalance, { commify: true });
            setContractBalance(contractBalance);
        } catch (error) {
            var popup = alert("You must first connect your MetaMask wallet, switch to the Goerli Testnet, and then refresh and try again!");
        }
    };

    // handle donate button
    const [donateAmount, setDonateAmount] = useState('');
    const [updated, setUpdated] = useState(donateAmount);

    const handleChange = (event) => {
        setDonateAmount(event.target.value);
    };

    const handleClick = async () => {
        try {
            await Donate.connect(provider.getSigner()).donate({ value: ethers.utils.parseUnits(donateAmount, "ether") });
            setUpdated(donateAmount);
        } catch (error) {
            var popup = alert("Error: caused by either invalid input, insufficient balance, or wrong network!");
        }
    };


    // handle the updating of the withdraw address variable
    const [withdrawAddress, setWithdrawAddress] = useState('');

    const handleChangeWithdrawAddress = (event) => {
        setWithdrawAddress(event.target.value);
    };

    // handle updating withdraw amount variable
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [updatedWithdraw, setUpdatedWithdraw] = useState(withdrawAmount);

    const handleChangeWithdraw = (event) => {
        setWithdrawAmount(event.target.value);
    };

    // handle withdraw button
    const handleClickWithdraw = async () => {
        try {
            await Donate.connect(provider.getSigner()).withdrawBalance(withdrawAddress, ethers.utils.parseUnits(withdrawAmount, "ether"));
            setUpdatedWithdraw(withdrawAmount);
        } catch (error) {
            var popup = alert("Error: invalid input or insufficient rights (only the owner of this contract may call the withdraw function)!");
        }
    };


    // rendering the page
    return (
        <section className="text-white ">
            <div className="pb-40 mx-auto max-w-screen-xl">

                <div className="max-w-lg mx-auto text-center">
                    <h2 className="pb-10 text-4xl font-extrabold text-white">
                        Crowdfunding dApp Demo {"\n"}
                    </h2>
                </div>

                <div className="m-6">

                    <h2 className="flex mb-4 text-sm font-medium text-yellow-500">
                        For below buttons to work, switch to Goerli Testnet on Metamask
                    </h2>

                    <h2 className="flex mb-4 text-sm font-medium text-white">
                        Contract: <a className="ml-2 text-blue-600 underline hover:text-blue-700" href="https://goerli.etherscan.io/address/0x2D53197C8Dfb493b64111BcA29286f613912a7BB#code">0x2D53197C8Dfb493b64111BcA29286f613912a7BB</a>
                    </h2>



                    {/* contract balanace button */}
                    <a className="mr-4 p-2 text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 rounded-md shadow">
                        <button onClick={() => getContractBalance()}>Balance</button>

                    </a>
                    <a className="text-m text-white font-bold mr-4">
                        {contractBalance}
                    </a>


                    {/* donate input */}
                    <a className="mr-4 p-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-md shadow">
                        <button onClick={handleClick}>Donate</button>

                    </a>


                    <input className="mr-4"
                        type="number" min="0"
                        id="donate-input"
                        name="donate-input"
                        onChange={handleChange}
                        value={donateAmount}
                        placeholder=" amount in ETH"
                    />


                    {/* withdraw input */}
                    <a className="mr-4 p-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md shadow">
                        <button onClick={handleClickWithdraw}>Withdraw</button>

                    </a>

                    <input className='mr-4'
                        type="text"
                        id="withdraw-address-input"
                        name="withdraw-address-input"
                        onChange={handleChangeWithdrawAddress}
                        value={withdrawAddress}
                        placeholder=" address to withdraw to"
                    />

                    <input
                        type="number" min="0"
                        id="withdraw-button"
                        name="withdraw-button"
                        onChange={handleChangeWithdraw}
                        value={withdrawAmount}
                        placeholder=" amount in ETH"
                    />

                </div>
            </div>

        </section>


    )
}
