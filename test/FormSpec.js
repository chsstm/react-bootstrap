import React from 'react';
import { mount } from 'enzyme';

import Form from '../src/Form';
import FormGroup from '../src/FormGroup';

describe('<Form>', () => {
  it('should support inline', () => {
    mount(
      <Form inline className="my-form">
        <FormGroup />
      </Form>,
    )
      .assertSingle('form.form-inline.my-form')
      .assertSingle('FormGroup');
  });

  it('should support custom componentClass', () => {
    mount(
      <Form componentClass="fieldset" className="my-form">
        <FormGroup />
      </Form>,
    )
      .assertSingle('fieldset.my-form')
      .assertSingle('FormGroup');
  });
});
