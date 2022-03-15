import books from "../history.json"
import { Card, Button } from "react-bootstrap"

const LatestReleases = () => (
  <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={books[5].img} />
      <Card.Body>
        <Card.Title>{books[5].title}</Card.Title>
        <Card.Text>{books[5].price}</Card.Text>
        <Card.Text>{books[5].category}</Card.Text>
        <Button variant="success">Buy It!</Button>
      </Card.Body>
    </Card>
  </>
)

export default LatestReleases
