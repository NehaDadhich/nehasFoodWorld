import React from "react"
import Layout from "../components/Layout"
import Search from "../components/search"
import SEO from "../components/seo";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {StaticQuery, graphql, Link} from "gatsby"

const SearchPage = () => (
  <StaticQuery
    query={graphql`
      query SearchPageQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <Layout>
      <SEO
          title={"Search"}
          description={"Search recipes or tech articles"}
        />
         <div className="row pad-2-b pad-8-l margin-0-b" style={{fontSize: '1.5em'}}>
            <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
            <span className="is-black"> &nbsp;  {"<<"} Search site</span></div>
        <Search searchIndex={data.siteSearchIndex.index} />
      </Layout>
    )}
  />
)

export default SearchPage