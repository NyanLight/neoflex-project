import styles from './Scoring.module.css';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';
import { FormFields } from './types/FormFields.type';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Loader } from '../../ui/Loader';
import {
  invalidStyle,
  validStyle,
  selectsFirstPart,
  selectsSecondPart,
  inputsFirstPart,
  inputsSecondPart,
} from './constants';
import { Input } from '../../ui/Input';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useAuthStore } from '../../store';
import { mutateRequest } from './utils';

export function Scoring() {
  const [isSent, setSend] = useState<boolean>(false);
  const { applicationId } = useParams();
  const fetchURL = `http://localhost:8080/application/registration/${applicationId}`;

  function handleSending() {
    setSend(true);
  }

  const currentStyle = (name: string) => {
    if (errors[name as keyof FormFields]) return invalidStyle;
    if (touchedFields[name as keyof object] | dirtyFields[name as keyof object])
      return validStyle;
    return undefined;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isSubmitting },
  } = useForm<FormFields>({ mode: 'onTouched' });

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    const spacelessData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string' ? value.replace(/\s+/g, '') : value,
      ]),
    );

    const request = mutateRequest(spacelessData as FormFields);

    const response = await fetch(fetchURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    if (response.ok) {
      await handleSending();
      useAuthStore.getState().setStep(3);
    }
  };

  return (
    <section className={styles.scoring}>
      {isSent ? (
        <div className={styles.sentDiv}>
          <div className={styles.sentDiv__title}>
            Wait for a decision on the application
          </div>
          <div className={styles.sentDiv__regular}>
            The answer will come to your mail within 10 minutes
          </div>
        </div>
      ) : (
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.scoring__form}
        >
          <div className={styles.scoring__info}>
            <h2 className={styles.scoring__title}>
              Continuation of the application
            </h2>
            <div className={styles.scoring__step}>Step 2 of 5</div>
          </div>
          <div className={styles.inputs}>
            {selectsFirstPart.map((select, index) => (
              <div className={styles.input} key={index}>
                <Select
                  name={select.name}
                  key={index}
                  label={select.label}
                  style={currentStyle(select.name)}
                  rules={select.rules}
                  required={select.required}
                  register={register}
                  error={errors[select.name as keyof FormFields]}
                  options={select.data}
                />
              </div>
            ))}
            {inputsFirstPart.map((input, index) => (
              <div className={styles.input} key={index}>
                <Input
                  name={input.name}
                  register={register}
                  required={input.required}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  error={errors[input.name as keyof FormFields]}
                  rules={input.rules}
                  style={currentStyle(input.name)}
                />
              </div>
            ))}
          </div>
          <h3 className={styles.employment}>Employment</h3>
          <div className={styles.inputs}>
            {selectsSecondPart.map((select, index) => (
              <div className={styles.input} key={index}>
                <Select
                  name={select.name}
                  label={select.label}
                  required={select.required}
                  style={currentStyle(select.name)}
                  register={register}
                  rules={select.rules}
                  error={errors[select.name as keyof FormFields]}
                  options={select.data}
                />
              </div>
            ))}
            {inputsSecondPart.map((input, index) => (
              <div className={styles.input} key={index}>
                <Input
                  name={input.name}
                  register={register}
                  required={input.required}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  error={errors[input.name as keyof FormFields]}
                  rules={input.rules}
                  style={currentStyle(input.name)}
                />
              </div>
            ))}
          </div>
          <div className={styles.submit}>
            {!isSubmitting ? (
              <>
                <Loader isDisplaying={false} />
                <Button
                  text="Continue"
                  borderRadius="8px"
                  verticalPadding="1rem"
                  horizontalPadding="2rem"
                  handler={() => {
                    return;
                  }}
                />
              </>
            ) : (
              <Loader isDisplaying={true} />
            )}
          </div>
        </form>
      )}
    </section>
  );
}
