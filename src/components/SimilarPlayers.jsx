import { PlayerContext } from "../context";
import { useContext } from "react";
import { Table } from "antd";

const SimilarPlayers = (props) => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'id'
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'id'
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'id'
    }
  ];

  const player = useContext(PlayerContext);
  const filterArr = player?.filter((player) => player?.type === props.state?.type && player.name !== props.state?.name);
  return <>
    {filterArr.length > 0 ? <div><h1 style={{ color: 'grey' }}>OTHER {props.state?.type.toUpperCase()}S</h1>
      <Table dataSource={filterArr} columns={columns} bordered rowKey={(record) => record.name} style={{ width: '50%', margin: 'auto', marginTop: '2%', marginBottom: '2%' }}></Table></div> : <p>No similar players found.</p>
    }
  </>
}

export default SimilarPlayers;