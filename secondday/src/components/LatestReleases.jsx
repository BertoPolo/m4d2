import books from "../history.json"
import { Card, Button, Col } from "react-bootstrap"

const LatestReleases = (query) =>
  books.filter(query).books.map((book) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="success">Buy It!</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  })

export default LatestReleases
