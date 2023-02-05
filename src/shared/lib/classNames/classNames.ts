export function classNames(
    className: string,
    mods: Record<string, string | boolean> = {},
    additional: string[] = [],
): string {
    return [
        className,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key]) => key),
        ...additional.filter(Boolean),
    ]
        .join(' ');
}
