import type { Schema, Struct } from '@strapi/strapi';

export interface PrescriptionPrescriptionOption extends Struct.ComponentSchema {
  collectionName: 'components_prescription_prescription_options';
  info: {
    displayName: 'Prescription Option';
    icon: 'bulletList';
  };
  attributes: {
    DispenseAmount: Schema.Attribute.String & Schema.Attribute.Required;
    DispenseUnits: Schema.Attribute.String & Schema.Attribute.Required;
    Dosage: Schema.Attribute.String & Schema.Attribute.Required;
    Duration: Schema.Attribute.Enumeration<
      ['One (1) Month', 'Three (3) Months']
    > &
      Schema.Attribute.Required;
    Frequency: Schema.Attribute.String & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prescription.prescription-option': PrescriptionPrescriptionOption;
    }
  }
}
