import React from 'react';

import routerName from './routerName';
import pages from '../components';

export default class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {};
  }

  componentDidMount() {

    this.setPage();

    window.addEventListener("hashchange", () => {
      this.setPage();
    }, false);
  }

  getLocale(key) {

    const map = routerName || {};

    return key.split('.').reduce((a, b) => {
      const parent = map[a];

      if (b) {
        return (parent || {})[b];
      }

      return parent;
    });
  }

  setLocale(locale) {

    window.location.hash = `/${locale}/${this.state.page}`;
  }

  getPage() {

    const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);

    if (routes) {
      return routes[2];
    }

    return 'button';
  }

  setPage(fn) {
    this.setState({page: this.getPage()}, fn);
  }

  getComponent(page) {

    this.components = this.components || Object.assign(Object.values(pages.components).reduce((a, b) => {
      return Object.assign(a, b);
    }, {}), pages.documents);

    const result = this.components[page];
    if (result) {
      return React.createElement(result.default, {
        locale: {
          show: this.getLocale('markdown.show'),
          hide: this.getLocale('markdown.hide')
        }
      });
    }
  }

  render() {
    return (
      <div className="app">
        <nav className="v-hover-show-scrollbar side-nav">
          <ul className="nav-ul">
            <li className="nav-item">
              <a>{this.getLocale('misc.components')}</a>
              {
                Object.keys(pages.components).map(group => {
                  return (
                    <div className="nav-group" key={group}>
                      <div className="nav-group__title">{group}</div>
                      <ul className="pure-menu-list">
                        {
                          Object.keys(pages.components[group]).map(page => {
                            return (
                              <li key={page} className="nav-item">
                                <a href={`#/${page}`}
                                   className={page === this.state.page ? 'active' : ''}>{this.getLocale(`page.${page}`)}</a>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
            </li>
          </ul>
        </nav>
        <div className="v-scrollbar content">
          {this.getComponent(this.state.page)}
        </div>
      </div>
    )
  }
}
