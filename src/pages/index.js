import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allContentfulGalleryItem.nodes.map(node => (
        <li style={{ listStyle: "none" }}>
          <h2>{node.title} </h2>
          <img src={node.image.file.url} alt={node.title} />
          <div>
            <h5>By {node.creator.fullName}</h5>
            <img
              width={60}
              src={node.creator.avatar.file.url}
              alt={node.creator.fullName}
            />
          </div>
          <p>{node.caption.caption}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    allContentfulGalleryItem {
      nodes {
        title
        creator {
          fullName
          avatar {
            file {
              url
            }
          }
        }
        image {
          file {
            url
          }
        }
        caption {
          caption
        }
      }
    }
  }
`
