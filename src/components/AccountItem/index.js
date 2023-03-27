import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/14bf958fdcfbecbd8ed97e44984f9f81~c5_300x300.webp?x-expires=1680073200&x-signature=IzZYMNd6XGr94RekRGH2zDmbxgM%3D"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <h4>Nguyen Van A</h4>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
