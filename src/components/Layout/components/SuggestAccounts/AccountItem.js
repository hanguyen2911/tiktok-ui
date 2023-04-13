import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';

import Image from '~/components/Images/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={() => renderPreview()}>
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={images.noImage} alt="Nguyen Van A" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>Nguyen Van A</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyen Van A</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {};
export default AccountItem;
