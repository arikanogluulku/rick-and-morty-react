import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { refreshLocationResidents, setLocationResidenst } from '../../store/actions/locationActions';
import LockUnknown from '../../assets/loc2.png';

Modal.setAppElement('#root');

function DetailModal({ info }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const locationResidents = useSelector((state) => state.locations.residents);

  const modalHandleClick = () => {
    setModalIsOpen(true);
    dispatch(refreshLocationResidents());

    info.residents.forEach(async (url) => {
      await axios.get(url).then((res) => res.data)
        .then((data) => dispatch(setLocationResidenst(data)))
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <button type="button" onClick={() => modalHandleClick()} className="fa fa-info-circle"> </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
        {
          content: {
            top: '80px',
            left: '60px',
            right: '60px',
            bottom: '80px',
          },
        }
      }
      >
        <div className="modal__container">
          <p className="modal__title">{info.name}</p>
          <p className="modal__title-second">Characters</p>
          {
            locationResidents.length > 0
              ? (
                <div className="modal__characters">
                  {
                   locationResidents.map((char) => (
                     <Link to={`/character/${char.id}`} style={{ textDecoration: 'none' }}>
                       <img key={char.id} src={char.image} alt={char.name} className="modal__characters-image" />
                     </Link>
                   ))
                  }
                </div>
              )

              : (
                <>
                  <img className="modal__unknown" src={LockUnknown} alt="unknown" />
                  <p className="modal__unknown-text">
                    This locations residents information is unknown.
                  </p>
                </>
              )
          }
          <button
            type="button"
            onClick={() => setModalIsOpen(false)}
            className="modal__close"
          >
            X
          </button>
        </div>
      </Modal>
    </>
  );
}
DetailModal.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default DetailModal;
