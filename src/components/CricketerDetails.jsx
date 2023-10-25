import { Button } from 'antd';
import moment from 'moment';
import SimilarPlayers from './SimilarPlayers';
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const CricketerDetails = () => {
    const { state } = useLocation();
    {/*Extract player details from state object */ }
    const { name, description, type, points, rank, age } = state;
    return <>
        <Card className='customCard' border="primary" style={{ width: '50%', margin: 'auto', marginTop: '2%', marginBottom: '2%' }}>
            <Card.Body>
                <Card.Title><h1 style={{ color: '#1677ff' }}>{name.toUpperCase()}</h1></Card.Title>
                <Card.Text>
                    <b>{type?.toUpperCase()}</b>
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    <b>Points:</b> {points}
                </Card.Text>
                <Card.Text>
                    <b> Rank:</b> {rank}
                </Card.Text>
                <Card.Text>
                    <b>Date of Birth:</b> {moment(state.dob).format('DD/MM/YYYY')}
                </Card.Text>
                <Card.Text>
                    <b>Age:</b> {age}
                </Card.Text>
                <Button type="primary" href='/'>Back to Cricketers</Button>
            </Card.Body>
        </Card>
        <SimilarPlayers state={state}></SimilarPlayers>
    </>
}

export default CricketerDetails;