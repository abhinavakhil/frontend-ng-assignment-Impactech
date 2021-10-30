import { FormlyFieldConfig } from '@ngx-formly/core';

export const commonForm: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        type: 'input',
        key: 'email',
        templateOptions: {
          label: 'Enter Email',
          required: true,
        },
      },
    ],
  },
  // {
  //   fieldGroupClassName: 'display-flex',
  //   fieldGroup: [
  //     {
  //       type: 'input',
  //       key: 'username',
  //       templateOptions: {
  //         label: 'Enter Username',
  //         required: true,
  //       },
  //     },
  //   ],
  // },
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          label: 'Enter Password',
          required: true,
        },
      },
    ],
  },
];

export const profileForm: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        type: 'input',
        key: 'email',
        templateOptions: {
          label: 'Enter Email',
          required: true,
          disabled: true,
        },
      },
    ],
  },
  // {
  //   fieldGroupClassName: 'display-flex',
  //   fieldGroup: [
  //     {
  //       type: 'input',
  //       key: 'username',
  //       templateOptions: {
  //         label: 'Enter Username',
  //         required: true,
  //       },
  //     },
  //   ],
  // },
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          label: 'Enter Password',
          required: true,
        },
      },
    ],
  },
];
