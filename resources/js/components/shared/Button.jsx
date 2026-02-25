export default function Button({
    children,
    type = 'button',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`w-full rounded-lg bg-blue-600 cursor-pointer py-2.5 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
