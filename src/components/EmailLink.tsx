import type { ReactNode } from 'react';
import { DEFAULT_EMAIL_DOMAIN, composeEmail, openMail } from '../lib/email';

interface EmailLinkProps {
  /** Local part of the address, e.g. "president". */
  user: string;
  /** Domain, when it is not the default al.elsa.org. */
  domain?: string;
  /** Classes for the clickable element. */
  className?: string;
  title?: string;
  ariaLabel?: string;
  /**
   * When set, the address is rendered as a text node next to the button
   * (assembled from its parts at render time, never a literal in source).
   */
  showText?: boolean;
  /** Classes for the address text node when `showText` is set. */
  textClassName?: string;
  /** Content of the button — typically an icon. Falls back to the address. */
  children?: ReactNode;
}

/**
 * Renders a mail link as a <button> that assembles the `mailto:` target only
 * on click, so neither the address nor a `mailto:` URI appears in the markup.
 */
export default function EmailLink({
  user,
  domain = DEFAULT_EMAIL_DOMAIN,
  className,
  title,
  ariaLabel,
  showText = false,
  textClassName,
  children,
}: EmailLinkProps) {
  const button = (
    <button
      type="button"
      onClick={() => openMail(user, domain)}
      className={className}
      title={title}
      aria-label={ariaLabel ?? title ?? 'Send an email'}
    >
      {children ?? composeEmail(user, domain)}
    </button>
  );

  if (!showText) return button;

  return (
    <>
      <span className={textClassName}>{composeEmail(user, domain)}</span>
      {button}
    </>
  );
}
