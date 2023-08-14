import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import {useFormik} from 'formik'
import { editSchema } from '../../utils/Validations';
import { useSelector , useDispatch } from 'react-redux';
import { updateUser } from '../../store/features/AuthSlice';

const AccountDetails = () => {
  const dispatch = useDispatch()
  const {user , loading} = useSelector(state =>state.auth)
  const initialValues = {
    email: user.email,
    name: user.name,
    address: user.address,
  }
  const onSubmit = async(values)=>{
    await dispatch(updateUser(values))
    setEdit(false)
  }
  const { values, handleChange, errors, touched, handleBlur, handleSubmit ,setValues } =
    useFormik({
      initialValues ,
      onSubmit , 
      validationSchema: editSchema,
    });
  const canselHandel = ()=>{
    setValues(initialValues)
    setEdit(false)
  }
  const [edit , setEdit] = useState(false)
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <h1>Your Account Details</h1>
      <div className='flex flex-col lg:w-[50%]'>
        <Input error={errors.email && touched.email ? errors.email : false} handleBlur={handleBlur} disabled={edit ? false : true} id={'email'} handler={handleChange} value={values.email} theme2={true} text={'Email'}/>
        <Input error={errors.name && touched.name ? errors.name : false} handleBlur={handleBlur} disabled={edit ? false : true} id={'name'} handler={handleChange}  theme2={true} value={values.name} text={'Full Name'}/>
        <Input error={errors.address && touched.address ? errors.address : false} handleBlur={handleBlur}  disabled={edit ? false : true} id={'address'} handler={handleChange}  theme2={true} value={values.address} text={'Address'}/>
      </div>
      <div className='ml-auto flex gap-2 items-center mt-8 w-[20%]'>
        {edit ? <span onClick={canselHandel} className='text-sm cursor-pointer text-zinc-500'>Cansel</span> : ''}
       {edit && <Button disabled={loading}  type={'submit'} dark={true} text={'Save'} w={'full'}/>}
        {!edit && <Button  dark={true} handler={()=>setEdit(prev=>!prev)} text={'Edit'} w={'full'}/>}
      </div>
    </form>
  )
}

export default AccountDetails