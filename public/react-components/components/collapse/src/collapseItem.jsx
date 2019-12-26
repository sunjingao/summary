import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';

class CollapseItem extends Component {

  static elementName = 'CollapseItem';

  constructor(props) {

    super(props);

    this.ref = {
      words: React.createRef(),
    };
  }

  componentDidMount() {
    // 正确获得高度，使其有动画效果
    this.setState({});
  }

  // 获得展示的高度
  getActualHeight() {

    if (!this.props.parent.isShow) {
      return 0;
    }

    return this.ref.words.current && this.ref.words.current.getBoundingClientRect().height + 'px' || 'auto';
  }

  // 隐藏及展示切换
  onToggle() {

    if (this.props.isDisabled) {
      return;
    }

    this.props.parent.change(this.props.name);
  }

  render() {

    return (
      <div className={this.className('v-collapse-item')} style={this.style()}>
        <div className={`v-title ${this.props.isDisabled && 'v-disabled' || ''}`} onClick={this.onToggle.bind(this)}>

          {
            this.props.titleComponent ?
              <div className="v-title-content">
                {this.props.titleComponent}
              </div> :
              <div className="v-title-content">{this.props.titleText}</div>
          }

          {
            this.props.isShowDirection &&
            <i className={`iconfont icon-down v-arrow ${this.props.parent.isShow && 'v-up' || ''}`}/>
          }
        </div>
        <div className="v-content" style={{height: this.getActualHeight()}}>
          <div ref={this.ref.words} className="v-words">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

CollapseItem.defaultProps = {
  isShowDirection: true,
};

CollapseItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 唯一标识
  isDisabled: PropTypes.bool,                                      // 是否禁止操作
  isShowDirection: PropTypes.bool,                                 // 是否展示方向箭头
  titleText: PropTypes.string,                                     // 标题内容
  titleComponent: PropTypes.node,                                  // 标题插槽

  parent: PropTypes.shape({                                        // 外层元素传入的值
    isShow: PropTypes.bool,
    change: PropTypes.func,
  }),
};

export default CollapseItem;

