import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";

export default function Home({ data }) {
  console.log("data", data);

  return (
    <Container className="md-container">
      <Head>
        <title>Animal For Kid</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
        <Container>
          <Row>
            <Col sm="4">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5">Documentation</CardTitle>
                  <CardText>
                    Find in-depth information about Next.js features and API.
                  </CardText>
                  <Button color="primary" href="https://nextjs.org/docs">
                    More &rarr;
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5">Learn</CardTitle>
                  <CardText>
                    Learn about Next.js in an interactive course with quizzes!
                  </CardText>
                  <Button color="primary" href="https://nextjs.org/learn">
                    More &rarr;
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5">Documentation</CardTitle>
                  <CardText>
                    Find in-depth information about Next.js features and API.
                  </CardText>
                  <Button color="primary" href="https://nextjs.org/docs">
                    More &rarr;
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5">Learn</CardTitle>
                  <CardText>
                    Learn about Next.js in an interactive course with quizzes!
                  </CardText>
                  <Button color="primary" href="https://nextjs.org/learn">
                    More &rarr;
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </Container>
  );
}
const CLIENT_ID = "kseVlMa_9dT6X_O7y_cc5S-J_9TUaLmOKINyv63NLWY";
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.unsplash.com/users/vuongtran/collections?client_id=${CLIENT_ID}`
  );
  const data = await res.json();
  const res1 = await fetch(
    `https://api.unsplash.com//collections/11104369/photos?client_id=${CLIENT_ID}`
  );
  console.log(await res1.json());
  // Pass data to the page via props
  return { props: { data } };
}
