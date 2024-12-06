import type { Schema, Struct } from '@strapi/strapi';

export interface PrescriptionPrescriptionOption extends Struct.ComponentSchema {
  collectionName: 'components_prescription_prescription_options';
  info: {
    description: '';
    displayName: 'Prescription Option';
    icon: 'bulletList';
  };
  attributes: {
    dispenseAmount: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    dispenseUnits: Schema.Attribute.Enumeration<['ml(s)']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ml(s)'>;
    dosage: Schema.Attribute.Enumeration<['Solution Pen-injector']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Solution Pen-injector'>;
    drug: Schema.Attribute.Relation<'oneToOne', 'api::drug.drug'>;
    durationDays: Schema.Attribute.Integer & Schema.Attribute.Required;
    frequency: Schema.Attribute.Enumeration<['weekly', 'qw']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'weekly'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sig: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prescription.prescription-option': PrescriptionPrescriptionOption;
    }
  }
}
