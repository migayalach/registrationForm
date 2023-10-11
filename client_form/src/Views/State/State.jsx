import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllState } from '../../Redux/actions';
import FormState from '../Forms/FormState/FormState';
import Filter from '../../Components/Filter/Filter';
import Lists from '../../Components/Lists';
import Modal from './modal'; // Importa el componente Modal
import styles from './state.module.css';

const State = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state.stateForm);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllState());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Filter />
      <hr />
      <h3>Crear Formulario:</h3>
      <div className={styles.buttonContainer}>
      <button onClick={openModal} className={styles.buttonCrear}>Crear</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <hr />
      <h2>ESTADOS</h2>
      <Lists items={selectorState} text={"Estados"} />
    </div>
  );
};

export default State;