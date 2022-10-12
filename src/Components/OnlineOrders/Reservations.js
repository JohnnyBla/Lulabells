import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../redux/modalReducer';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBModalBody,
  MDBModalHeader,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservedModal = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState('');
  const [bottomModal, setBottomModal] = useState(false);

  const toggleShow = () => setBottomModal(!bottomModal);
  const [reservation, setReservation] = useState({
    date: new Date(),
    guest: 1,
    email: '',
    phoneNum: '',
    name: '',
    time: new Date().toLocaleTimeString('en-US'),
  });

  // function to open modal
  const showModal = () => {
    toggleShow();
    dispatch(openModal());
  };

  // function to close modal
  const noModal = () => {
    dispatch(closeModal());
  };

  //function to save reservation.
  const Reserve = (e) => {
    e.preventDefault();
    setReservation({
      ...reservation,
      time: reservation.date.toLocaleTimeString('en-US'),
    });
    if (reservation.name === '') {
      setAlert('A name is required');
    } else if (reservation.phoneNum === '') {
      setAlert('A number is required');
    } else {
      setAlert('');
      noModal();
      console.log(reservation);
    }
  };

  return (
    <MDBModal staticBackdrop show={() => showModal} tabIndex='-1'>
      <MDBModalDialog size='lg' centered>
        <MDBModalContent className='modalBackground'>
          <MDBModalHeader>
            <MDBModalTitle className='container ModalLabel p-1 text-center'>
              Make Your Reservations Today
            </MDBModalTitle>
            <MDBBtn
              className='btn-close'
              color='white'
              onClick={noModal}
              type='button'
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <div className='container'>
              <div className='col-12 text-center ModalAlert text-uppercase'>
                <h5>{alert}</h5>
              </div>
              <form>
                <div className='row text-center justify-content-between mb-3'>
                  <div className='col-md-6 col-12 mb-2'>
                    <label className='ModalTitle form-text'>Name</label>{' '}
                    <MDBIcon
                      far
                      icon='user'
                      color='info'
                      size='md'
                      className='me-2'
                    />
                    <MDBInput
                      label='Enter Name'
                      type='text'
                      size='md'
                      labelStyle={{ color: '#f8d57b' }}
                      defaultValue={reservation.name}
                      contrast
                      onChange={(e) =>
                        setReservation({ ...reservation, name: e.target.value })
                      }
                    />
                  </div>

                  <div className='col-md-6 col-12'>
                    <label className='ModalTitle form-text'>Phone Number</label>
                    <MDBIcon
                      fas
                      icon='phone'
                      color='info'
                      size='md'
                      className='mx-2'
                    />
                    <MDBInput
                      label='Enter Number'
                      type='tel'
                      size='md'
                      required
                      labelStyle={{ color: '#f8d57b' }}
                      defaultValue={reservation.phoneNum}
                      contrast
                      onChange={(e) =>
                        setReservation({
                          ...reservation,
                          phoneNum: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className='row text-center mb-3 justify-content-center'>
                  <div className='col-6'>
                    <label className='ModalTitle me-2'>Email (optional)</label>
                    <MDBIcon
                      fas
                      icon='at'
                      size='md'
                      color='info'
                      className='me-3'
                    />
                    <MDBInput
                      label='Email'
                      type='email'
                      size='sm'
                      defaultValue={reservation.email}
                      labelStyle={{ color: '#f8d57b' }}
                      contrast
                      onChange={(e) =>
                        setReservation({
                          ...reservation,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className='row text-center justify-content-between mb-2'>
                  <div className='col-md-6 col-12 mb-4'>
                    <label className='ModalTitle'>Date</label>{' '}
                    <MDBIcon
                      far
                      icon='calendar'
                      color='info'
                      size='md'
                      className='me-2'
                    />
                    <label className='ModalTitle'> &</label>{' '}
                    <label className='ModalTitle'>Time</label>{' '}
                    <MDBIcon
                      far
                      icon='clock'
                      color='info'
                      size='md'
                      className='me-2'
                    />
                    <DatePicker
                      selected={reservation.date}
                      onChange={(date) =>
                        setReservation({
                          ...reservation,
                          date: date,
                          time: date.toLocaleTimeString('en-US'),
                        })
                      }
                      onSelect={(date) =>
                        setReservation({
                          ...reservation,
                          date: date,
                          time: date.toLocaleTimeString('en-US'),
                        })
                      }
                      showTimeSelect
                      dateFormat='Pp'
                    />
                  </div>

                  <div className='col-md-6 col-12 align-self-center mb-md-0 mb-sm-3'>
                    <label className='ModalTitle'>Number of Guest</label>
                    <MDBIcon
                      fas
                      icon='users'
                      color='info'
                      size='md'
                      className='mx-2'
                    />
                    <select
                      className='form-select-sm'
                      defaultValue={reservation.guest}
                      onChange={(e) =>
                        setReservation({
                          ...reservation,
                          guest: parseInt(e.target.value),
                        })
                      }
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className='col-12 mt-2'>
                    <MDBBtn outline rounded color='warning' onClick={Reserve}>
                      Make Reservation
                    </MDBBtn>
                  </div>
                </div>
              </form>
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ReservedModal;
