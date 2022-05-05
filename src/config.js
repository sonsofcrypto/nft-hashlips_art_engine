const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "web3wallet NFT";
const description = "For true sons of crypto who has been with us from day " +
                    "one! We take care of our OGs😍";
const baseUri = "ipfs://QmU6xKR5nm1hMzGbjrKgaB5fhFSF7i6CZZETocveyEZShL";

const solanaMetadata = {
  symbol: "W3WNFT",
  seller_fee_basis_points: 100, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.sonsofcrypto.com",
  creators: [
    {
      address: "0x9aA80dCeD760224d59BEFe358c7C66C45e3BEA1C",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1079,
    layersOrder: [
      { name: "Background" },
      { name: "Ticket" },
      { name: "Meme" },
    ],
  },
  {
    growEditionSizeTo: 1097, // Bronze
    layersOrder: [
      { name: "Background Bronze" },
      { name: "Ticket Bronze" },
      { name: "Meme Rare" },
    ],
  },
  {
    growEditionSizeTo: 1115, // Silver
    layersOrder: [
      { name: "Background Rare" },
      { name: "Ticket Silver" },
      { name: "Meme Rare" },
    ],
  },
  {
    growEditionSizeTo: 1133, // Gold
    layersOrder: [
      { name: "Background Super Rare" },
      { name: "Ticket Gold" },
      { name: "Meme Rare" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = true;

const format = {
  width: 1262,
  height: 1262,
  smoothing: false,
  imageType: "jpeg", // png or jpeg
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
