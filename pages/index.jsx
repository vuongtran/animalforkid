import React from "react";
import Head from "next/head";
import {
  Container,
  Card,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import FsLightbox from "fslightbox-react";

function Collections({ data }) {
  const [toggler, setToggler] = React.useState(false);
  const [sources, setSources] = React.useState([]);

  async function handleOnClick(collectionId) {
    const res = await fetch(
      `https://api.unsplash.com//collections/${collectionId}/photos?client_id=${CLIENT_ID}`
    );
    const data = await res.json();
    console.log("data", data);
    let s = [];
    data.map((i) => {
      s.push(i.urls.full);
    });
    console.log("s", s);
    setSources(s);
    setToggler(!toggler);
  }

  return (
    <>
      <div className="card-columns">
        {data &&
          data.map((collection) => {
            return (
              <Card
                className="card__noborder"
                inverse
                key={collection.id}
                onClick={() => handleOnClick(collection.id)}
              >
                <CardImg
                  width="100%"
                  src={collection.cover_photo.urls.small}
                  alt={collection.cover_photo.alt_description}
                />
                <CardImgOverlay>
                  <CardTitle>{`${collection.title} (${collection.total_photos})`}</CardTitle>
                </CardImgOverlay>
              </Card>
            );
          })}
      </div>
      {sources.length > 0 && (
        <FsLightbox
          toggler={toggler}
          sources={sources}
          onClose={() => {
            setSources([]);
          }}
        />
      )}
    </>
  );
}
export default function Home({ data }) {
  return (
    <Container className="md-container">
      <Head>
        <title>Animal For Kid</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1 className="title">{`Animal For Kid <3`}</h1>
        {/* <p>
          Get started by editing <code>pages/index.js</code>
        </p> */}
        <Collections data={data} />
      </Container>

      <footer className="cntr-footer">
        @2020 Build width Nextjs | Image by Unsplash | Host by Vercel
        {/* <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a> */}
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

  // Pass data to the page via props
  return { props: { data } };
}
