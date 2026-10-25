/** Tiny class-name joiner (avoids a dependency for one function). */
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}
