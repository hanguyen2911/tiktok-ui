import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Header() {
  const currentUser = false;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
          {
            type: 'language',
            code: 'vn',
            title: 'Tiếng Viêt',
          },
        ],
      },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
  ];
  const handleMenuChange = (menuItem) => {
    console.log('menuItem', menuItem);
    switch (menuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoa' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/setting' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              {' '}
              {/* target="_blank" */}
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={(e) => handleMenuChange(e)} hideOnClick={true}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a46e528a924980fd0fa37fc872333e27~c5_100x100.jpeg?x-expires=1680876000&x-signature=fLl1xoVEUBWhqefCIwCd8qtEeR8%3D"
                alt="name"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
