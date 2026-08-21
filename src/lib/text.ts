export type Segment = { text: string; mark: boolean };

/**
 * Splits a string on **double-asterisk** spans so callers can render the
 * marked parts as accented metrics. Keeps content as text nodes; nothing
 * from the config is ever injected as raw HTML.
 */
export function marked(input: string): Segment[] {
  return input
    .split(/\*\*(.+?)\*\*/g)
    .map((text, i) => ({ text, mark: i % 2 === 1 }))
    .filter((segment) => segment.text.length > 0);
}
