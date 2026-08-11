type SocialIconProps = {
  className?: string;
  strokeWidth?: number;
};

export function InstagramIcon({ className, strokeWidth = 1.25 }: SocialIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className, strokeWidth = 1.25 }: SocialIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9v12M6 5.5v.01M10 21v-7a4 4 0 0 1 8 0v7M18 21v-7a4 4 0 0 0-8 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="6" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className, strokeWidth = 1.25 }: SocialIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14 21v-8h3l.75-3H14V8.5c0-.9.5-1.5 1.6-1.5H18V4h-2.6C12.4 4 11 5.8 11 8.4V10H8v3h3v8h3Z" fill="currentColor" />
    </svg>
  );
}
