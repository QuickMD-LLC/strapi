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
    dispenseUnits: Schema.Attribute.Enumeration<['ml(s)', 'tablet(s)']> &
      Schema.Attribute.Required;
    displayDuration: Schema.Attribute.String & Schema.Attribute.Required;
    dosage: Schema.Attribute.String & Schema.Attribute.Required;
    dosageQuantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    drug: Schema.Attribute.Relation<'oneToOne', 'api::drug.drug'>;
    durationDays: Schema.Attribute.Integer & Schema.Attribute.Required;
    frequency: Schema.Attribute.Enumeration<['qw', 'qd']> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    shortName: Schema.Attribute.String & Schema.Attribute.Required;
    sig: Schema.Attribute.Text & Schema.Attribute.Required;
    sortOrder: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prescription.prescription-option': PrescriptionPrescriptionOption;
    }
  }
}
