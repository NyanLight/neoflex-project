import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { Select } from '../../ui/Select'
import { FormFields } from './types/FormFields.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Prescoring.module.css'

export function Prescoring () {

    const { register, handleSubmit } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    }

    return (
        <section className={styles.prescoring}>
            <form action='' onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.contact}>
                    <h3 className={styles.contact__title}>Contact information</h3>
                    <div className={styles.contact__inputs}>
                        <Input required={true} register={register} name='lastName' label='Your last name' placeholder='For Example Doe'  />
                        <Input required={true} register={register} name='firstName' label='Your first name' placeholder='For Example John' />
                        <Input required={false} register={register} name='middleName' label='Your patronymic' placeholder='For Example Victorovich' />
                        <Select required={true} register={register} name='term' label='Select term' options={[{label: '6 months', value: '6'}, {label: '12 months', value: '12'}, {label: '18 months', value: '18'}, {label: '24 months', value: '24'}]}/>
                        <Input  required={true} register={register} name='email' label='Your email' placeholder='test@gmail.com' />
                        <Input  required={true} register={register} name='birthdate' label='Your date of birth' placeholder='Select Date and Time' />
                        <Input  required={true} register={register} name='passportSeries' label='Your passport series' placeholder='0000' />
                        <Input  required={true} register={register} name='passportNumber' label='Your passport number' placeholder='000000'/>
                    </div>
                </div>
                <div className={styles.submit}>
                    <Button text='Continue' borderRadius='8px' verticalPadding='1rem' horizontalPadding='2rem' />
                </div>
            </form>
        </section>
    )
}