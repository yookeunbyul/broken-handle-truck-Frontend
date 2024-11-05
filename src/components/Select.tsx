import { categories } from '../constants/categories.ts';

interface SetData {
    setValue: (value: string) => void;
    defaultValue?: string;
}

export default function Select({ setValue, defaultValue = '' }: SetData) {
    return (
        <div className="flex flex-col gap-1">
            <p className="mb-2 text-xs text-white/50 mix-blend-difference tracking-tight">카테고리</p>
            <select
                name="menu"
                required
                onChange={(e) => setValue(e.target.value)}
                value={defaultValue}
                className="text-base w-full border-r-8 border-transparent rounded-lg bg-form p-3 outline-none"
            >
                <option value="" disabled hidden>
                    카테고리
                </option>
                {categories.map((category, idx) => (
                    <option key={`option_${idx}`} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
