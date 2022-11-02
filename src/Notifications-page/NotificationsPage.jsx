import React, { Component } from 'react';
import angelaGray from '../assets/images/avatar-angela-gray.webp';
import annaKim from '../assets/images/avatar-anna-kim.webp';
import jacobThompson from '../assets/images/avatar-jacob-thompson.webp';
import kimberly from '../assets/images/avatar-kimberly-smith.webp';
import mark from '../assets/images/avatar-mark-webber.webp';
import nathan from '../assets/images/avatar-nathan-peterson.webp';
import rizky from '../assets/images/avatar-rizky-hasanuddin.webp';
import chess from '../assets/images/image-chess.webp';
import './NotificationsPage.scss';

export default class NotificationsPage extends Component {
  render() {
    return (
      <main>
        <div className="notifications">
          <div className="notifications__header">
            <div className="notifications__header--left">
              <h1>Notifications</h1>
              <p>3</p>
            </div>
            <p className="notifications__header--right">Mark all as read</p>

          </div>
          <div className="notifications__content">

            <div className="notification notification__background--active">
              <div className="notification__avatar">
                <img src={mark} alt="Mark Webber" />
              </div>
              <div className="notification__content">
                <p className="notification__content-info"><span className='notification__content-info--name'>Mark Webber</span>reacted to your recent post<span className='notification__content-info--second notification__content-info--post'>My first tournament today!</span><span className='notification__content-info--active'></span></p>
                <p className="notification__content-time">1m ago</p>
                {/* <p className="notification__content-message"></p> */}
              </div>
            </div>

            <div className="notification  notification__background--active">
              <div className="notification__avatar">
                <img src={angelaGray} alt="Mark Webber" />
              </div>
              <div className="notification__content">
                <p className="notification__content-info"><span className='notification__content-info--name'>Angela Gray</span>followed you<span className='notification__content-info--second notification__content-info--post display-none'></span><span className='notification__content-info--active'></span></p>
                <p className="notification__content-time">5m ago</p>
                {/* <p className="notification__content-message"></p> */}
              </div>
            </div>


            <div className="notification  notification__background--active">
              <div className="notification__avatar">
                <img src={jacobThompson} alt="Jacob Thompson" />
              </div>
              <div className="notification__content">
                <p className="notification__content-info"><span className='notification__content-info--name'>Jacob Thompson</span> has joined your group <span className='notification__content-info--second notification__content-info--club'>Chess Club</span><span className='notification__content-info--active'></span></p>
                <p className="notification__content-time">1 day ago</p>
                {/* <p className="notification__content-message"></p> */}
              </div>
            </div>


            <div className="notification">
              <div className="notification__avatar">
                <img src={rizky} alt="Rizky" />
              </div>
              <div className="notification__content">
                <p className="notification__content-info"><span className='notification__content-info--name'>Rizky Hasanuddin</span>sent you a private message<span className='notification__content-info--second notification__content-info--post display-none'></span><span className='notification__content-info--active display-none'></span></p>
                <p className="notification__content-time">5 days ago</p>
                <p className="notification__content-message">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                  I'm already having lots of fun and improving my game.</p>
              </div>
            </div>

            <div className="notification-wrapper">

              <div className="notification">
                <div className="notification__avatar">
                  <img src={kimberly} alt="Kimberly" />
                </div>
                <div className="notification__content">
                  <p className="notification__content-info"><span className='notification__content-info--name'>Kimberly Smith</span>commented on your picture<span className='notification__content-info--second notification__content-info--post'></span><span className='notification__content-info--active display-none'></span></p>
                  <p className="notification__content-time">1 week ago</p>
                  {/* <p className="notification__content-message"></p> */}
                </div>
              </div>
              <img className='notification__picture' src={chess} alt="chess" />
            </div>


            <div className="notification">
              <div className="notification__avatar">
                <img src={nathan} alt="Nathan" />
              </div>
              <div className="notification__content">
                <p className="notification__content-info"><span className='notification__content-info--name'>Nathan Peterson</span> reacted to your recent post <span className='notification__content-info--second notification__content-info--post'>5 end-game strategies to increase your win rate</span><span className='notification__content-info--active display-none'></span></p>
                <p className="notification__content-time">2 weeks ago</p>
                {/* <p className="notification__content-message"></p> */}
              </div>
            </div>


            <div className="notification">
              <div className="notification__avatar">
                <img src={annaKim} alt="Anna Kim" />
              </div>
              <div className="notification__content">
                <p className="notification__content-info"><span className='notification__content-info--name'>Anna Kim</span>left the group<span className='notification__content-info--second notification__content-info--club'>Chess Club</span><span className='notification__content-info--active display-none'></span></p>
                <p className="notification__content-time">2 weeks ago</p>
                {/* <p className="notification__content-message"></p> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

}
