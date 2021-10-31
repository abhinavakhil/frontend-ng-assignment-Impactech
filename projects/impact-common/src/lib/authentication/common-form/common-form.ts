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
          pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,25}$',
        },
      },
    ],
  },
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
          minLength: 6,
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
          minLength: 6,
        },
      },
    ],
  },
];
