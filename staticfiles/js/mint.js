// ==== اسلایدر تصاویر ====
const parrotInformation = [
    { src: "/static/img/1.png" },
    { src: "/static/img/2.png" },
    { src: "/static/img/3.png" },
    { src: "/static/img/4.png" },
    { src: "/static/img/5.png" },
    { src: "/static/img/6.png" },
    { src: "/static/img/7.png" },
    { src: "/static/img/8.png" },
    { src: "/static/img/9.png" },
    { src: "/static/img/10.png" },
    { src: "/static/img/11.png" },
    { src: "/static/img/12.png" },
    { src: "/static/img/13.png" },
    { src: "/static/img/14.png" },
    { src: "/static/img/15.png" },
    { src: "/static/img/16.png" },
    { src: "/static/img/17.png" },
    { src: "/static/img/18.png" },
    { src: "/static/img/19.png" },
    { src: "/static/img/20.png" },
    { src: "/static/img/21.png" },
    { src: "/static/img/22.png" },
    { src: "/static/img/23.png" },
    { src: "/static/img/24.png" },
    { src: "/static/img/25.png" },
    { src: "/static/img/26.png" },
    { src: "/static/img/27.png" },
    { src: "/static/img/28.png" },
    { src: "/static/img/29.png" },
    { src: "/static/img/30.png" },
];

const slider1 = document.getElementById("imageSlider1");
parrotInformation.slice(1, 30).forEach(e => {
    const img = document.createElement("img");
    img.src = e.src;
    img.className = "pe-1";
    slider1.appendChild(img);
});

const slider2 = document.getElementById("imageSlider2");
parrotInformation.slice(7, 30).reverse().forEach(e => {
    const img = document.createElement("img");
    img.src = e.src;
    img.className = "pe-1";
    slider2.appendChild(img);
});

function autoScrollSlider(slider, speed = 1, reverse = false) {
    let scrollAmount = reverse ? slider.scrollWidth - slider.clientWidth : 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    function scrollStep() {
        if (reverse) {
            scrollAmount -= speed;
            if (scrollAmount <= 0) {
                scrollAmount = maxScroll;
            }
        } else {
            scrollAmount += speed;
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            }
        }
        slider.scrollLeft = scrollAmount;
        requestAnimationFrame(scrollStep);
    }

    requestAnimationFrame(scrollStep);
}

autoScrollSlider(slider1, 1, false);  // حرکت معمولی
autoScrollSlider(slider2, 1, true);   // حرکت معکوس


const contractAddress = "0x34c32779661661166fc1cC30B0Fb6ADf53dE33C7";
const ContractAbi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_royaltyFeesInBips",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseExtension",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_salePrice",
                type: "uint256",
            },
        ],
        name: "calculateRoyalty",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxMintAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_mintAmount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_salePrice",
                type: "uint256",
            },
        ],
        name: "royaltyInfo",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_newBaseExtension",
                type: "string",
            },
        ],
        name: "setBaseExtension",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_newBaseURI",
                type: "string",
            },
        ],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_royaltyFeesInBips",
                type: "uint256",
            },
        ],
        name: "setRoyaltyInfo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_newmaxMintAmount",
                type: "uint256",
            },
        ],
        name: "setmaxMintAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "walletOfOwner",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];

const desiredChainId = "0x89";


// === کلید Infura ===
const INFURA_API_KEY = "3a5e5426c0f04c0eb6d4bffd68aa3d99";
const rpcUrl = `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`;

// ==== متغیرهای سراسری ====
let web3;
let accounts;
let contract;
let isConnecting = false;

// ==== چک و سوییچ شبکه ====
async function ensureCorrectNetwork() {
    if (!window.ethereum) {
        alert("Please install MetaMask!");
        throw new Error("MetaMask not found");
    }

    const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (currentChainId !== desiredChainId) {
        try {
            // تلاش برای سوییچ شبکه
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: desiredChainId }],
            });
        } catch (switchError) {
            // اگر شبکه شناخته نشده بود، اضافه‌اش کن
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: desiredChainId,
                            chainName: 'Polygon Mainnet',
                            nativeCurrency: {
                                name: 'MATIC',
                                symbol: 'MATIC',
                                decimals: 18
                            },
                            rpcUrls: ['https://polygon-rpc.com/'],
                            blockExplorerUrls: ['https://polygonscan.com/']
                        }],
                    });
                } catch (addError) {
                    console.error("Failed to add Polygon network:", addError);
                    throw addError;
                }
            } else {
                console.error("Failed to switch network:", switchError);
                throw switchError;
            }
        }
    }
}

// ==== اتصال به ولت ====
async function connectWallet() {
    if (isConnecting) return;
    isConnecting = true;
    try {
        await ensureCorrectNetwork();

        // 1. وصل شدن به Infura برای خواندن داده
        const provider = new Web3.providers.HttpProvider(rpcUrl);
        web3 = new Web3(provider);

        // 2. گرفتن حساب کاربر از MetaMask (برای ارسال تراکنش)
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // 3. ساخت کانترکت
        contract = new web3.eth.Contract(ContractAbi, contractAddress);

        // 4. گرفتن تعداد Mint
        loadMintCount();
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed");
    }
    isConnecting = false;
}

// ==== گرفتن تعداد Mint ====
async function loadMintCount() {
    const mintCountEl = document.getElementById("mintCount");
    if (!contract) {
        mintCountEl.innerText = "Connect wallet first";
        return;
    }
    try {
        let count = await contract.methods.totalSupply().call();
        mintCountEl.innerText = `Minted: ${count}`;
    } catch (error) {
        console.error("Error loading mint count:", error);
        mintCountEl.innerText = "Error loading mint count";
    }
}

// ==== عملیات Mint ====
async function mintNFT() {
    if (!accounts) {
        alert("Connect Wallet First!");
        return;
    }
    try {
        const metamaskWeb3 = new Web3(window.ethereum);
        const metamaskContract = new metamaskWeb3.eth.Contract(ContractAbi, contractAddress);

        await metamaskContract.methods.mint(accounts[0], 1).send({ from: accounts[0] });
        alert("Mint successful!");
        loadMintCount();
    } catch (err) {
        console.error("Mint failed:", err);
        alert("Mint failed: " + err.message);
    }
}

// ==== وصل کردن دکمه‌ها ====
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("mintButton").addEventListener("click", mintNFT);