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
      query SearchIndexQuery {
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


// import React from "react"
// import Layout from "../components/Layout"
// import Search from "../components/search"
// import SEO from "../components/seo";
// import {faHome} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {StaticQuery, graphql} from "gatsby"

// export default function search() {
//     return (<>
//     <Layout>
//     <SEO
//         title={"Search"}
//         description={"Search recipes or tech articles"}
//       />
//       {/* <div className="row margin-0-t is-black pad-2-l" style={{fontSize: '1.5em'}}>
//             <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
//             <span className="is-black"> &nbsp;  {"<<"} Search </span>
//       </div> */}
//         <Search />
//         </Layout>
//     </>);
// }