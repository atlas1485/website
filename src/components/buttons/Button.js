import React from 'react';
import buttonStyles from './Button.module.scss'


const TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SIGNIN: 'signin',
  ADDTOCART: 'addToCart',
  CONTACT: 'contact',
  SUBMITFORM: 'submitForm'
}

const BaseButton = ({ type, label, onClick, buttonType}) => (
  <input
    type={type}
    defaultValue={label}
    onClick={onClick}
    className={`
      ${buttonStyles.myButton} 
      ${buttonStyles[ buttonType ]}
    `}
  />
);

export const Primary = props => (
  <BaseButton { ...props } buttonType={TYPES.PRIMARY} />
);

export const Secondary = props => (
  <BaseButton { ...props } buttonType={TYPES.SECONDARY} />
);

export const SignIn = props => (
  <BaseButton { ...props } buttonType={TYPES.SIGNIN} />
);

export const AddToCart = props => (
  <BaseButton { ...props } buttonType={TYPES.ADDTOCART} />
);

export const Contact = props => (
  <BaseButton { ...props } buttonType={TYPES.CONTACT} />
);

export const SubmitForm = props => (
  <BaseButton { ...props } buttonType={TYPES.SUBMITFORM} />
);