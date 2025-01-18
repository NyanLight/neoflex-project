import { useState } from 'react';
import { Button } from '../../ui/Button';
import { Table } from '../../ui/Table';
import styles from './Document.module.css';
import { data, headers } from './constants';
import { useNavigate } from 'react-router';

export function Document() {
  const [denySent, setSent] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const denyApplication = () => {
    setSent(true);
  };

  const goHome = () => {
    navigate('/');
  }

  return (
    <section className={styles.document}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2 className={styles.document__title}>Payment Schedule</h2>
          <div className={styles.document__step}>Step 3 of 5</div>
        </div>
        <div className={styles.document__table}>
          <Table data={data} headers={headers} />
        </div>
        <div className={styles.buttons}>
          <div className={styles.denyPart}>
            <Button
              handler={toggleModal}
              isRed={true}
              horizontalPadding="1.75rem"
              verticalPadding="0.75rem"
              text="Deny"
              borderRadius="8px"
            />
          </div>
          <div className={styles.acceptPart}></div>
        </div>
      </div>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.modal__overlay} onClick={toggleModal}></div>
          <div className={styles.modal__content}>
            <div className={styles.modal__title}>Deny application</div>
            <div className={styles.modal__regular}>
              {denySent
                ? 'Your application has been deny!'
                : 'You exactly sure, you want to cancel this application?'}
            </div>
          {denySent ? <div className={styles.modal__button}>
            <Button text='Go home' verticalPadding='0.75rem' horizontalPadding='1.75rem' borderRadius='8px' handler={goHome} />
          </div>
          :
          <div className={styles.modal__buttons}>
            <Button
              borderRadius="8px"
              text="Deny"
              isRed={true}
              horizontalPadding="1.75rem"
              verticalPadding="0.75rem"
              handler={denyApplication}
            />
            <Button
              borderRadius="8px"
              text="Cancel"
              horizontalPadding="1.75rem"
              verticalPadding="0.75rem"
              handler={toggleModal}
            />
          </div>}
            <div className={styles.modal__close} onClick={toggleModal}>
              <img src="/src/assets/modal_cross.png" alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
