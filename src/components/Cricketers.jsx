import TableComponent from "./TableComponent";
import { useContext } from "react";
import { PlayerContext } from "../context";

const Cricketers = () => {
    const playerList = useContext(PlayerContext);

    return <>
        <h1 style={{ color: "#1677ff", marginTop: '2%', marginBottom: '2%' }}>CRICKETERS APP</h1>
        <TableComponent players={playerList} />
    </>

}

export default Cricketers;
