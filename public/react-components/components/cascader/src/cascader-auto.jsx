import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class CascaderAuto extends Component {

  onClick(item, index) {

    if (item.isDisabled) {
      return;
    }

    if (!item.children || item.children.length === 0) {
      this.props.cascaderSelected && this.props.cascaderSelected(item, this.props.index, index);
    }
    else {
      this.props.cascaderOver && this.props.cascaderOver(item, this.props.index, index);
    }
  }

  onMouseEnter(item, index) {

    if (item.isDisabled || !this.props.isHoverTrigger || !item.children || item.children.length === 0) {
      return;
    }

    if (!item.children || item.children.length === 0) {
      this.props.cascaderSelected && this.props.cascaderSelected(item, this.props.index, index);
    }
    else {
      this.props.cascaderOver && this.props.cascaderOver(item, this.props.index, index);
    }
  }

  render() {

    let children = this.props.item.map(
      (val, index) =>
        <li
          key={index}
          className={`
            ${val.over && 'v-over' || ''}
            ${val.isSelected && 'v-selected' || ''}
            ${val.isDisabled && 'v-disabled' || ''}
          `}
          style={{
            height: `${this.props.itemHeight}px`,
            lineHeight: `${this.props.itemHeight}px`
          }}
          title={val.label}
          onClick={_ => this.onClick(val, index)}
          onMouseEnter={_ => this.onMouseEnter(val, index)}
        >
          {
            this.props.componentName ?
              React.cloneElement(this.props.componentName, {item: val}) : val.label
          }
          {val.isSelected && <i className="iconfont icon-caozuochenggong v-directionLeft"/>}
          {val.children && val.children.length > 0 && <i className="iconfont icon-right v-directionRight"/>}
        </li>
    );

    return (
      <div
        className={this.className('v-cascader-auto', 'v-hover-show-scrollbar')}
        style={{
          ...this.style(),
          width: `${this.props.itemWidth}px`,
          maxHeight: `${this.props.popperMaxHeight}px`,
        }}
      >
        <ul className="v-cascader-ul">{children}</ul>
      </div>
    );
  }
}

CascaderAuto.defaultProps = {
  item: [],
  popperMaxHeight: NaN,
};

CascaderAuto.propTypes = {
  item: PropTypes.array,
  index: PropTypes.number,
  itemWidth: PropTypes.number,
  popperMaxHeight: PropTypes.number,
  itemHeight: PropTypes.number,
  isHoverTrigger: PropTypes.bool,
  cascaderSelected: PropTypes.func,
  cascaderOver: PropTypes.func,
  componentName: PropTypes.node,
};

export default CascaderAuto;
