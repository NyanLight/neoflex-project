import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { Select } from '../../ui/Select'
import { FormFields } from './types/FormFields.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Prescoring.module.css'
import { Divider } from '../../ui/Divider'
import { SetStateAction, useState } from 'react'

export function Prescoring () {

    const [ amount, setAmount] = useState<number>(0);
    const { register, handleSubmit } = useForm<FormFields>();

    const handleChange = (e: { target: { value: SetStateAction<number> } }) => {
        setAmount(e.target.value);
        addSpace(amount);
    }

    function addSpace(number: number) {
        const string = number.toString();
        return string.slice(0, -3) + " " + string.slice(-3);
    }

    const displayingAmount: string = addSpace(amount);

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    }

    return (
        <section className={styles.prescoring} id='prescoring'>
            <form action='' onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.top}>
                    <div className={styles.top__leftSide}>
                        <div className={styles.leftSide__infoField}>
                            <h2 className={styles.leftSide__title}>Customize your card</h2>
                            <div className={styles.leftSide__steps}>Step 1 of 5</div>
                        </div>
                        <div className={styles.leftSide__inputField}>
                           <h3 className={styles.inputField__title}>Select amount</h3>
                           <div className={styles.inputField__selectedAmount}>{displayingAmount}</div>
                           <input name='amount' className={styles.range} type="range" min={15000} max={600000} step={1000} onChange={handleChange}/> 
                           <div className={styles.inputField__minmax}>
                            <div className={styles.inputField__min}>15 000</div>
                            <div className={styles.inputField__max}>600 000</div>
                           </div>
                        </div>
                    </div>
                    <Divider direction='vertical' borderWidth='2px' borderStyle='dashed' borderColor='rgba(128, 128, 128, 0.4)' />
                    <div className={styles.top__rightSide}>
                        <h3 className={styles.rightSide__title}>You have chosen the amount</h3>
                        <div className={styles.rightSide__amount}>{displayingAmount} ₽</div>
                        <div className={styles.rightSide__divider}>
                            <Divider direction='horizontal' borderColor='rgba(128, 128, 128, 0.2)' borderWidth='1px' borderStyle='solid' />
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <h3 className={styles.contact__title}>Contact information</h3>
                    <div className={styles.contact__inputs}>
                        <Input type='text' required={true} register={register} name='lastName' label='Your last name' placeholder='For Example Doe'  />
                        <Input type='text' required={true} register={register} name='firstName' label='Your first name' placeholder='For Example John' />
                        <Input type='text' required={false} register={register} name='middleName' label='Your patronymic' placeholder='For Example Victorovich' />
                        <Select required={true} register={register} name='term' label='Select term' options={[{label: '6 months', value: '6'}, {label: '12 months', value: '12'}, {label: '18 months', value: '18'}, {label: '24 months', value: '24'}]}/>
                        <Input type='email'  required={true} register={register} name='email' label='Your email' placeholder='test@gmail.com' />
                        <Input type='text'  required={true} register={register} name='birthdate' label='Your date of birth' placeholder='Select Date and Time' />
                        <Input type='number'  required={true} register={register} name='passportSeries' label='Your passport series' placeholder='0000' />
                        <Input type='number'  required={true} register={register} name='passportNumber' label='Your passport number' placeholder='000000'/>
                    </div>
                </div>
                <div className={styles.submit}>
                    <Button text='Continue' borderRadius='8px' verticalPadding='1rem' horizontalPadding='2rem' handler={() => {return}}/>
                </div>
            </form>
        </section>
    )
}