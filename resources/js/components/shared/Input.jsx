export default function Input({
    label,
    type = 'text',
    name,
    placeholder = '',
    error = '',
    className = '',
    ...props
}) {
    return (
        <div>
            {label ? (
                <label className="mb-1 block text-sm font-medium text-gray-600" htmlFor={name}>
                    {label}
                </label>
            ) : null}
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className={`w-full rounded-lg border px-4 py-2 outline-none transition focus:ring-2 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'} ${className}`}
                {...props}
            />
            {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
        </div>
    );
}
