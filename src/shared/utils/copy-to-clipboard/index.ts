/** 
 * Copy text to clipboard
 */
export const copyToClipboard = (text: string) => text && navigator.clipboard.writeText(text);
