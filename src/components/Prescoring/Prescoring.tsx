import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { FormFields } from './types/FormFields.type';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Prescoring.module.css';
import { Divider } from '../../ui/Divider';
import { useState } from 'react';
import {
  inputsFirstPart,
  inputsSecondPart,
  invalidStyle,
  selectOptions,
  validStyle,
} from './constants';
import { addSpace, } from './utils';
import { Loader } from '../../ui/Loader';

export function Prescoring() {
  const currentStyle = (name: string) => {
    if (errors[name as keyof object]) return invalidStyle;
    if (touchedFields[name as keyof object] | dirtyFields[name as keyof object ]) return validStyle;
    return undefined;
  };
  const [amount, setAmount] = useState<string>('0');
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isSubmitting },
  } = useForm<FormFields>({ mode: 'onTouched' });

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
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
            {inputsFirstPart.map((input, index) => (
              <div className={styles.input} key={index}>
                <Input
                  name={input.name}
                  register={register}
                  type={input.type}
                  required={input.required}
                  label={input.label}
                  placeholder={input.placeholder}
                  rules={input.rules}
                  error={errors[input.name as keyof object]}
                  style={currentStyle(input.name)}
                />
              </div>
            ))}
            <Select
              required={true}
              register={register}
              name="term"
              label="Select term"
              options={selectOptions}
              rules={{ required: true }}
            />
             {inputsSecondPart.map((input, index) => (
              <div className={styles.input} key={index}>
                <Input
                  name={input.name}
                  register={register}
                  type={input.type}
                  required={input.required}
                  label={input.label}
                  placeholder={input.placeholder}
                  rules={input.rules}
                  error={errors[input.name as keyof object]}
                  style={currentStyle(input.name)}
                />
              </div>
            ))}
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
            </>
          ) : (
            <Loader isDisplaying={true} />
          )}
        </div>
      </form>
    </section>
  );
}
