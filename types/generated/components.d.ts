import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['LINK', 'PRIMARY', 'SECONDARY']>;
  };
}

export interface LayoutTopNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navigations';
  info: {
    displayName: 'Top Navigation';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logoTitle: Schema.Attribute.Component<'elements.link', false>;
    navItems: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.link': ElementsLink;
      'layout.top-navigation': LayoutTopNavigation;
    }
  }
}
