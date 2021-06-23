import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby'
import Nav from "../componenets/Nav";
import { StaticImage } from 'gatsby-plugin-image'



const News = () => {
  // graphQL api call
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost {
          edges {
            node {
              id
              title
              html
              published_at
              tags {
                id
                name
                slug
              }
              authors {
                id
                name
                profile_image
              }
            }
          }
        }
      }
    `
  );

  // console.log(data.allGhostPost.edges);

  return (
    <>
       <Nav />
       {data
        ? data.allGhostPost.edges.map(({ node }) => {
          return (

            <div className="card" style="width: 18rem; key={node.id}">

            {/* <StaticImage
              alt="Logo mindChase"
              src="./img/logo.png"
            /> */}

              <div className="card-body">
                <h5 className="card-title">{node.title}</h5>
                <article className="card-text" dangerouslySetInnerHTML={{ __html: node.html }} /> 
                <Link to="/" className="btn btn-primary">Go to article</Link>
              </div>
            </div>
          )

        })

        : null}

    </>
  );
}

export default News;
