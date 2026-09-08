// Email addresses are kept out of the markup (and the JS bundle, as far as
// practical) to make automated harvesting harder. Callers pass the local part
// and, when it differs, the domain; the full address is only ever assembled
// at the moment the user clicks.

export const DEFAULT_EMAIL_DOMAIN = 'al.elsa.org';

/** Assemble a full address from its parts. Use only where text must be shown. */
export const composeEmail = (
  user: string,
  domain: string = DEFAULT_EMAIL_DOMAIN,
): string => `${user}@${domain}`;

/** Open the user's mail client for the given address, built at call time. */
export const openMail = (
  user: string,
  domain: string = DEFAULT_EMAIL_DOMAIN,
): void => {
  window.location.href = `mailto:${user}@${domain}`;
};
