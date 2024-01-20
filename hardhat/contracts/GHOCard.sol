// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GHOCard is ERC721 {
	uint256 private _tokenId;
	string private constant _approvedCardURI =
		"ipfs://QmNRBSn8HG8Q6p2P1Xz3H7vPM51Pc7DN54xX8yUjpoggKp/";
	string private constant _expiredCardURI = "";

	// Map tokenId to mint time
	mapping(uint256 => uint256) private _nftMintingTimestamp;

	event MintedWithTimestamp(
		address indexed owner,
		uint256 indexed tokenId,
		uint256 timestamp
	);

	constructor() ERC721("GHO Card", "GC") {
		_tokenId = 0;
	}

	function mintNft() public {
		_safeMint(msg.sender, _tokenId);
		_tokenId++;
		uint256 timestamp = block.timestamp;
		_nftMintingTimestamp[_tokenId] = timestamp;

		emit MintedWithTimestamp(msg.sender, _tokenId, timestamp);
	}

	function getNftMintTime(uint256 tokenId) external view returns (uint256) {
		return _nftMintingTimestamp[tokenId];
	}

	function tokenURIStatus(
		uint256 tokenId
	) public view returns (string memory) {
		if (_nftMintingTimestamp[tokenId] > 30 days) {
			return _expiredCardURI;
		} else {
			return _approvedCardURI;
		}
	}
}
