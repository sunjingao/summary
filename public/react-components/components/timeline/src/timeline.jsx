import React from 'react';
import Component from '../../Base/index';

class Timeline extends Component {

  render() {

    let children = React.Children.map(
      this.props.children,
      (item, index) => {

        if (!React.isValidElement(item) || item.type.elementName !== 'TimelineItem') {
          return;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              key: index,
              isLast: index === this.props.children.length - 1
            }
          }
        )
      }
    );

    return (
      <div className={this.className('v-timeline')} style={this.style()}>
        {children}
      </div>
    );
  }
}


export default Timeline;