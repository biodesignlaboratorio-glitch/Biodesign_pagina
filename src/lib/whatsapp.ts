/** Build a wa.me link, URL-encoding the optional pre-filled message. */
export function waLink(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
