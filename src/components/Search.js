import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link, graphql, StaticQuery } from "gatsby"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    console.log(this.state.results)
    return (

  <div className="pad-2-b pad-8-l margin-0-b">
            <input id="search" type="text" value={this.state.query} onChange={this.search} className="search-box is-white-bg is-black" placeholder="Search for recipes or tech articles.."/>
            <ul className="plain-ul"> 
                { 
                    this.state.results.map(function(page) {
                            return ( <li>
                                <Link to={page.path} className="margin-15-b search-link" id="path">
                                    <div className="grow row">
                                    <div className="pad-2-t">
                                        <h2 className="margin-3-b margin-0-t">{page.title}</h2>
                                    </div>
                                    </div>
                                </Link>
                            </li>);
                    }
                    )  
                }
                
            </ul>
        </div>
    );
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
