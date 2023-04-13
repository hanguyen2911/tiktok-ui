import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import Image from '~/components/Images/Images';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Image className={cx('avatar')} src={images.noImage} alt="Nguyen Van A" />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Nguyen Van A</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyen Van A</p>
        <p className={cx('analytics')}>
          <strong className={cx('analytics')}>8.2M </strong>
          <span className={cx('value')}>Follower</span>
          <strong className={cx('analytics')}>8.2M </strong>
          <span className={cx('value')}>Follower</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
