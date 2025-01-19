import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { Table } from '../../ui/Table';
import styles from './Document.module.css';
import { headers } from './constants';
import { useNavigate } from 'react-router';
import { Checkbox } from '../../ui/Checkbox';
import { useParams } from 'react-router';

export function Document() {
  const params = useParams();
  const fetchURL = `http://localhost:8080/admin/application/${params.applicationId}`;
  
  useEffect(() => {
    const fetchTable = async () => {
      const request = await fetch(fetchURL);
      const requestObj = await request.json();
      const paymentSchedule = await requestObj.credit.paymentSchedule;
      await setData(paymentSchedule);
    };
    fetchTable();
  }, []);

  const [denySent, setDenySent] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [documentSent, setDocumentSent] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const sendApply = async () => {
    const responce = await fetch(`http://localhost:8080/document/${params.applicationId}`, {
      method: 'POST',
      body: `${params.applicationId}`, 
    });
    const obj =  await responce.json();
    await console.log(obj);
  }

  const handleSend = () => {
      sendApply();
      setDocumentSent(true);
  }

  const denyApplication = () => {
    setDenySent(true);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <section className={styles.document}>
      {documentSent ? (
        <div className={styles.sentDiv}>
          <div className={styles.sentDiv__title}>Documents are formed</div>
          <div className={styles.sentDiv__regular}>
            Documents for signing will be sent to your email
          </div>
        </div>
      ) : (
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
            <div className={styles.acceptPart}>
              <Checkbox
                label={'I agree with the payment schedule'}
                text={'Send'}
                borderRadius={'8px'}
                horizontalPadding="1.75rem"
                gap={'1rem'}
                verticalPadding="0.75rem"
                handler={handleSend}
              />
            </div>
          </div>
        </div>
      )}
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
            {denySent ? (
              <div className={styles.modal__button}>
                <Button
                  text="Go home"
                  verticalPadding="0.75rem"
                  horizontalPadding="1.75rem"
                  borderRadius="8px"
                  handler={goHome}
                />
              </div>
            ) : (
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
              </div>
            )}
            <div className={styles.modal__close} onClick={toggleModal}>
              <img src="/src/assets/modal_cross.png" alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
