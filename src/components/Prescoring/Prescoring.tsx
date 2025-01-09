import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { FormFields } from './types/FormFields.type';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Prescoring.module.css';
import { Divider } from '../../ui/Divider';
import { useState } from 'react';
import {  invalidStyle, selectOptions, validStyle } from './constants';
import { addSpace, validateAge } from './utils';
import { Loader } from '../../ui/Loader';

export function Prescoring() {
  const [amount, setAmount] = useState<string>('0');
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isSubmitting },
  } = useForm<FormFields>({mode: 'onTouched'});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = addSpace(e.target.value);
    setAmount(newAmount);
  };

  const displayingAmount: string = addSpace(amount);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    if (!data.middleName) data.middleName = null;
    await fetch('http://localhost:8080/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <section className={styles.prescoring} id="prescoring">
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.top}>
          <div className={styles.top__leftSide}>
            <div className={styles.leftSide__infoField}>
              <h2 className={styles.leftSide__title}>Customize your card</h2>
              <div className={styles.leftSide__steps}>Step 1 of 5</div>
            </div>
            <div className={styles.leftSide__inputField}>
              <h3 className={styles.inputField__title}>Select amount</h3>
              <div className={styles.inputField__selectedAmount}>
                {displayingAmount}
              </div>
              <input
                {...register('amount')}
                name="amount"
                className={styles.range}
                type="range"
                min={15000}
                max={600000}
                step={1000}
                onChange={handleChange}
              />
              <div className={styles.inputField__minmax}>
                <div className={styles.inputField__min}>15 000</div>
                <div className={styles.inputField__max}>600 000</div>
              </div>
            </div>
          </div>
          <Divider
            direction="vertical"
            borderWidth="2px"
            borderStyle="dashed"
            borderColor="rgba(128, 128, 128, 0.4)"
          />
          <div className={styles.top__rightSide}>
            <h3 className={styles.rightSide__title}>
              You have chosen the amount
            </h3>
            <div className={styles.rightSide__amount}>{displayingAmount} ₽</div>
            <div className={styles.rightSide__divider}>
              <Divider
                direction="horizontal"
                borderColor="rgba(128, 128, 128, 0.2)"
                borderWidth="1px"
                borderStyle="solid"
              />
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contact__title}>Contact information</h3>
          <div className={styles.contact__inputs}>
            <div className={styles.input}>
              <Input
                type="text"
                required={true}
                style={
                  touchedFields.lastName || dirtyFields.lastName
                    ? !errors.lastName
                      ? validStyle
                      : invalidStyle
                    : undefined
                }
                register={register}
                error={errors.lastName}
                name="lastName"
                label="Your last name"
                placeholder="For Example Doe"
                rules={{ required: 'Enter your last name' }}
              />
            </div>
            <div className={styles.input}>
              <Input
                type="text"
                required={true}
                register={register}
                style={
                  touchedFields.firstName || dirtyFields.firstName
                    ? !errors.firstName
                      ? validStyle
                      : invalidStyle
                    : undefined
                }
                error={errors.firstName}
                name="firstName"
                label="Your first name"
                placeholder="For Example John"
                rules={{ required: 'Enter your first name' }}
              />
            </div>
            <Input
              type="text"
              required={false}
              register={register}
              name="middleName"
              style={
                touchedFields.middleName || dirtyFields.middleName
                  ? !errors.middleName
                    ? validStyle
                    : invalidStyle
                  : undefined
              }
              label="Your patronymic"
              placeholder="For Example Victorovich"
            />
            <Select
              required={true}
              register={register}
              name="term"
              label="Select term"
              options={selectOptions}
              rules={{ required: true }}
            />
            <div className={styles.input}>
              <Input
                type="email"
                required={true}
                register={register}
                style={
                  touchedFields.email || dirtyFields.email
                    ? !errors.email
                      ? validStyle
                      : invalidStyle
                    : undefined
                }
                name="email"
                label="Your email"
                error={errors.email}
                placeholder="test@gmail.com"
                rules={{
                  required: 'Field is required',
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Incorrect email address',
                  },
                }}
              />
            </div>
            <div className={styles.input}>
              <Input
                type="date"
                required={true}
                register={register}
                style={
                  touchedFields.birthdate || dirtyFields.birthdate
                    ? !errors.birthdate
                      ? undefined
                      : { border: '2px solid #FF5631' }
                    : undefined
                }
                name="birthdate"
                label="Your date of birth"
                error={errors.birthdate}
                placeholder="Select Date and Time"
                rules={{
                  required: 'Enter your date of birth',
                  validate: (value: Date) => validateAge(value),
                }}
              />
            </div>
            <div className={styles.input}>
              <Input
                type="number"
                required={true}
                register={register}
                style={
                  touchedFields.passportSeries || dirtyFields.passportSeries
                    ? !errors.passportSeries
                      ? validStyle
                      : invalidStyle
                    : undefined
                }
                error={errors.passportSeries}
                name="passportSeries"
                label="Your passport series"
                placeholder="0000"
                rules={{
                  required: 'Enter your passport number',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: 'The series must be 4 digits',
                  },
                }}
              />
            </div>
            <div className={styles.input}>
              <Input
                type="number"
                required={true}
                register={register}
                style={
                  touchedFields.passportNumber || dirtyFields.passportNumber
                    ? !errors.passportNumber
                      ? validStyle
                      : invalidStyle
                    : undefined
                }
                error={errors.passportNumber}
                name="passportNumber"
                label="Your passport number"
                placeholder="000000"
                rules={{
                  required: 'Enter your passport number',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: 'The series must be 6 digits',
                  },
                }}
              />
            </div>
          </div>
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
            </>)
             : (
            <Loader isDisplaying={true} />
          )}
        </div>
      </form>
    </section>
  );
}
