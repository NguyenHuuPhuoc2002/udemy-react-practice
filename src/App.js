import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <div className="app-container">
            {/* <Container>
                <Row> */}
            <Header />
            <Container>
                <div className="my-3">List Users: </div>
                <TableUsers />
            </Container>
            {/* </Row>
            </Container> */}
        </div>
    );
}

export default App;
