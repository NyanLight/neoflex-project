import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { FormFields } from './types/FormFields.type';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Prescoring.module.css';
import { Divider } from '../../ui/Divider';
import { SetStateAction, useState } from 'react';
import { selectOptions } from './constants';

export function Prescoring() {
  const [amount, setAmount] = useState<number>(0);
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();

  const handleChange = (e: { target: { value: SetStateAction<number> } }) => {
    setAmount(e.target.value);
    addSpace(amount);
  };

  function addSpace(number: number) {
    const string = number.toString();
    return string.slice(0, -3) + ' ' + string.slice(-3);
  }

  function validateAge(date: Date) {
    const currentDate = new Date();
    const birthdate = new Date(date);
    const difference = currentDate.valueOf() - birthdate.valueOf();
    const years = difference / 31556952000;
    return years >= 18 ? null : 'You must be at least 18 years old.';
  }

  const displayingAmount: string = addSpace(amount);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.prescoring} id="prescoring">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                  register={register}
                  name="lastName"
                  label="Your last name"
                  placeholder="For Example Doe"
                  rules={{ required: 'Enter your last name' }}
                />
                {errors.lastName && <div className={styles.input__error}>{errors.lastName.message}</div>}
            </div>
            <div className={styles.input}>
                <Input
                  type="text"
                  required={true}
                  register={register}
                  name="firstName"
                  label="Your first name"
                  placeholder="For Example John"
                  rules={{ required: 'Enter your first name' }}
                />
                {errors.firstName && <div className={styles.input__error}>{errors.firstName.message}</div>}
            </div>
            <Input
              type="text"
              required={false}
              register={register}
              name="middleName"
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
                  name="email"
                  label="Your email"
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
                {errors.email && <div className={styles.input__error}>{errors.email.message}</div>}
            </div>
            <div className={styles.input}>
                <Input
                  type="date"
                  required={true}
                  register={register}
                  name="birthdate"
                  label="Your date of birth"
                  placeholder="Select Date and Time"
                  rules={{
                    required: 'Enter your date of birth',
                    validate: (value: Date) => validateAge(value),
                  }}
                />
                {errors.birthdate && <div className={styles.input__error}>{errors.birthdate.message}</div>}
            </div>
            <div className={styles.input}>
                <Input
                  type="number"
                  required={true}
                  register={register}
                  name="passportSeries"
                  label="Your passport series"
                  placeholder="0000"
                  rules={{ required: 'Enter your passport number',
                    pattern: {
                        value:  /^[0-9]{4}$/,
                        message: 'The series must be 4 digits',
                    }
                   }}
                />
                {errors.passportSeries && <div className={styles.input__error}>{errors.passportSeries.message}</div>}
            </div>
            <div className={styles.input}>
                <Input
                  type="number"
                  required={true}
                  register={register}
                  name="passportNumber"
                  label="Your passport number"
                  placeholder="000000"
                  rules={{ required: 'Enter your passport number',
                    pattern: {
                        value: /^[0-9]{6}$/,
                        message: 'The series must be 6 digits',
                    }
                  }}
                />
                {errors.passportNumber && <div className={styles.input__error}>{errors.passportNumber.message}</div>}
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <Button
            text="Continue"
            borderRadius="8px"
            verticalPadding="1rem"
            horizontalPadding="2rem"
            handler={() => {
              return;
            }}
          />
        </div>
      </form>
    </section>
  );
}
