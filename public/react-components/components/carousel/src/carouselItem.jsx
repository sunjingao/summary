import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class CarouselItem extends Component {

  static elementName = 'CarouselItem';

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      left: '0',
    };
    this.props.parent.setChildrenContent(this.props.parent.index, this);
  }

  show() {
    this.setState({
      isShow: true
    });
  }

  hide() {
    this.setState({
      isShow: false
    });
  }

  setLeftSize(size) {
    this.setState({
      left: size
    });
  }

  render() {
    return (
      this.state.isShow &&
      <div
        className={this.className('v-carousel-item')}
        style={{
          transform: `translateX(${this.state.left}px)`,
          transition: `transform ${this.props.parent.transition / 1000}s`,
          ...this.style()
        }}
      >
        {this.props.children}
      </div> || ''
    );
  }
}

CarouselItem.propTypes = {
  parent: PropTypes.shape({           // 外层元素传入的值
    index: PropTypes.number,
    transition: PropTypes.number,
    setChildrenContent: PropTypes.func
  }),
};

export default CarouselItem;
