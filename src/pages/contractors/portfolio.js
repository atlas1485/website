import React from 'react'

import Layout from "../../components/layout"
import portfolioPageStyles from './portfolio.module.scss'
import Image from "../../components/Image/Image"

const ContractorsPortfolioPage = ({props, data}) => {
  return (
    <Layout>
      <div className={portfolioPageStyles.column}>
        {data.images.edges.map((edge,index, array)=>{
          return  (2*index+1<=array.length) ?
            <div
              className={portfolioPageStyles.row}
              style={{
                gridTemplateColumns: 
                  `${Math.floor(array[2*index].node.images[array[2*index].node.images.length-1].fluid.aspectRatio* 100) / 100}fr 
                    ${array[2*index+1] !== undefined
                      ? Math.floor(array[2*index+1].node.images[array[2*index+1].node.images.length-1].fluid.aspectRatio*100)/100
                      : Math.floor(array[2*index].node.images[array[2*index].node.images.length-1].fluid.aspectRatio* 100) / 100}fr`,
              }}
            >
              <Image
                images={array[2*index].node.images}
                num={1}
                galleryIcon={array[2*index].node.images.length>1?true:false}
              />
              {array[2*index+1] &&
              <Image
                images={array[2*index+1].node.images}
                num={2}
                galleryIcon={array[2*index+1].node.images.length>1?true:false}
              />
              }
            </div>
          : 
            null
          })}
      </div>
    </Layout>
  )
}

export default ContractorsPortfolioPage

export const query = graphql`
  query{
    images: allContentfulContractorsPortfolio(
        sort: {
          fields: projectTitle
          order: DESC
        }
      ){
      edges{
        node{
          projectTitle
          images{
            title
            fluid(maxHeight: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`