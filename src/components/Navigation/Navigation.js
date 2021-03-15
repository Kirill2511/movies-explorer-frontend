import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

function AccountLink({ openAccount, place }) {
  const location = useLocation();
  const mobileLinkSelector =
    location.pathname === '/profile' ? 'account-link_active' : '';
  return (
    <button
      className={`account-link account-link_place_${place} ${mobileLinkSelector}`}
      onClick={openAccount}
    >
      Аккаунт
    </button>
  );
}

AccountLink.propTypes = {
  openAccount: PropTypes.func,
  place: PropTypes.string,
};

export default AccountLink;
