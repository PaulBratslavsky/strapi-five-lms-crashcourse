import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTopNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navigations';
  info: {
    displayName: 'Top Navigation';
  };
  attributes: {
    logoTitle: Schema.Attribute.Component<'elements.link', false>;
    navItems: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['LINK', 'PRIMARY', 'SECONDARY']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.top-navigation': LayoutTopNavigation;
      'elements.link': ElementsLink;
    }
  }
}
