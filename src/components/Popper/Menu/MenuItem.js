import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classNames = cx('menu-item', { separate: data.separate });
  return (
    <Button leftIcon={data.icon} to={data.to} className={classNames} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
