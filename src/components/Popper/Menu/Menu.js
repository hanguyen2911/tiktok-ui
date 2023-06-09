import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ items = [], children, hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  const handleResetToFirstPage = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Tippy
      visible={true}
      delay={[0, 700]}
      offset={[12, 8]}
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header title={current.title} className={cx('menu-header')} onBack={() => handleResetToFirstPage} />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => handleReset}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
