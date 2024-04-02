import type { Schema, Attribute } from '@strapi/strapi';

export interface FiguresSection1Section1 extends Schema.Component {
  collectionName: 'components_figures_section1_section1s';
  info: {
    displayName: 'Section1';
    description: '';
  };
  attributes: {
    Section1: Attribute.RichText;
    Section2: Attribute.RichText;
    Section3: Attribute.RichText;
    Section4: Attribute.RichText;
    Section5: Attribute.RichText;
    Section6: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'figures-section1.section1': FiguresSection1Section1;
    }
  }
}
