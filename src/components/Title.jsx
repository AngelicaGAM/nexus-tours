import Col from 'react-bootstrap/Col';

const Title = ({txt}) => {
    return(
        <Col xs={12} md={12} className="title-card-feed">
            <h1 className="title-feed">{txt}</h1>
        </Col>
    )
}
export default Title;
