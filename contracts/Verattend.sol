// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";

contract Verattend is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    event Attest(address indexed to, uint256 indexed tokenId);
    event Revoke(address indexed to, uint256 indexed tokenId);

    // Event struct to store details about each event
    struct Event {
        string name;
        uint256 id;
        uint256 spots;
        address owner;
        string description;
        string nftIpfsLink;
        uint256[] tokens;
    }

    // Counters for generating unique token and event IDs
    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _eventIdCounter;
    Event[] public event_list;
    // Mapping from event ID to Event struct
    mapping(uint256 => Event) public events;

    // Mapping from event manager to event struct
    mapping(address => Event) public event_managers;

    // Mapping from token ID to event ID
    mapping(uint256 => uint256) public tokenToEvent;

    // Mapping to store URI for each token
    mapping(uint256 => string) private _tokenURIs;

    // Mapping to store attendance status for each token
    mapping(uint256 => bool) public attendanceStatus;

    // Mapping from eventId to mapping of addresses to booleans
    // Allows anyone to get the reg status of all event members
    mapping(uint256 => mapping(address => bool)) public reg_status;

    bool attended = true;

    constructor() ERC721("Verattend Events", "VAT") {}

    function addEvent(
        string memory _eventName,
        string memory _eventDescription,
        string memory _nftIpfsLink,
        uint256 num_spots
    ) public returns (uint256) {
        uint256 eventId = _eventIdCounter.current();
        _eventIdCounter.increment();

        events[eventId] = Event({
            name: _eventName,
            id: eventId,
            spots: num_spots,
            owner: msg.sender,
            description: _eventDescription,
            nftIpfsLink: _nftIpfsLink,
            tokens: new uint256[](0)
        });
        event_managers[msg.sender] = events[eventId];
        event_list.push(events[eventId]);
        return eventId;
    }

    function safeMint(uint256 eventId) public {
        address to = msg.sender;
        require(
            keccak256(abi.encodePacked(events[eventId].name)) !=
                keccak256(abi.encodePacked("")),
            "Event does not exist"
        );
        require(
            events[eventId].spots > 0,
            "Sorry, sign up has reached capacity!"
        );

        events[eventId].spots -= 1; // Decrement the number of spots
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, events[eventId].nftIpfsLink);

        events[eventId].tokens.push(tokenId);
        tokenToEvent[tokenId] = eventId;
        attendanceStatus[tokenId] = false;
        reg_status[eventId][to] = false;
    }

    function _setTokenURI(
        uint256 tokenId,
        string memory _tokenURI
    ) internal virtual override {
        require(_exists(tokenId), "URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(
        uint256 tokenId
    )
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        require(_exists(tokenId), "URI query for nonexistent token");

        uint256 eventId = tokenToEvent[tokenId];
        return events[eventId].nftIpfsLink;
    }

    function getEvent(
        uint256 eventId
    )
        external
        view
        returns (
            string memory name,
            string memory description,
            string memory ipfsLink,
            uint256[] memory tokens
        )
    {
        Event memory eventDetails = events[eventId];
        return (
            eventDetails.name,
            eventDetails.description,
            eventDetails.nftIpfsLink,
            eventDetails.tokens
        );
    }

    function getEventByToken(uint256 tokenId) external view returns (uint256) {
        return tokenToEvent[tokenId];
    }

    function markAttendance(uint256 eventId, address attendee) external {
        address event_owner = events[eventId].owner;
        require(msg.sender == event_owner, "You are not an event manager");
        reg_status[eventId][attendee] = attended;
    }

    function checkAttendance(uint256 tokenId) external view returns (bool) {
        // TODO: Make sure they're actually in this

        return attendanceStatus[tokenId];
    }

    function checkAttendance(
        uint256 eventId,
        address user
    ) external view returns (bool) {
        // TODO: Make sure they're actually in this
        return reg_status[eventId][user];
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        delete _tokenURIs[tokenId];
        delete attendanceStatus[tokenId];
    }

    function burn(uint256 tokenId) external {
        require(
            ownerOf(tokenId) == msg.sender,
            "You are not the owner of the tokenId"
        );
        _burn(tokenId);
    }

    function revoke(uint256 tokenId) external onlyOwner {
        _burn(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 /* tokenId */
    ) internal virtual override {
        require(
            from == address(0) || to == address(0),
            "You cannot transfer this token"
        );
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        if (from == address(0)) {
            emit Attest(to, tokenId);
        } else if (to == address(0)) {
            emit Revoke(from, tokenId);
        }
    }
}
