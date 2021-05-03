export function isDtmi(dtmi: string): boolean;
export function dtmiToPath(dtmi: string): string | null;
export function resolve(dtmi: string, expand?: boolean, repo?: string): Promise<string>;
