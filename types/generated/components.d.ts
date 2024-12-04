import type { Schema, Struct } from '@strapi/strapi';

export interface PrescriptionPrescriptionOption extends Struct.ComponentSchema {
  collectionName: 'components_prescription_prescription_options';
  info: {
    description: '';
    displayName: 'Prescription Option';
    icon: 'bulletList';
  };
  attributes: {
    DispenseAmount: Schema.Attribute.String & Schema.Attribute.Required;
    DispenseUnits: Schema.Attribute.Enumeration<['ml(s)']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ml(s)'>;
    Dosage: Schema.Attribute.Enumeration<['Solution Pen-injector']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Solution Pen-injector'>;
    drug: Schema.Attribute.Relation<'oneToOne', 'api::drug.drug'>;
    DurationDays: Schema.Attribute.Enumeration<
      ['days_28', 'days_42', 'days_70', 'days_84']
    > &
      Schema.Attribute.Required;
    Frequency: Schema.Attribute.Enumeration<['weekly']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'weekly'>;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    Sig: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prescription.prescription-option': PrescriptionPrescriptionOption;
    }
  }
}
