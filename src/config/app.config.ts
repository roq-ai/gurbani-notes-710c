interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Registered User', 'Guest User'],
  tenantName: 'Company',
  applicationName: 'Gurbani Notes',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage scriptures',
    'Manage notes',
    'Manage comments',
    'Manage markups',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7cc374b8-c8e2-4f6c-8eed-98c3ba2d0f7b',
};
