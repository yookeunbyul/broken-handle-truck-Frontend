import Icon from '../assets/images/defaultMenu.svg?react';

interface MenuProps {
    title: string;
    ImgComponent?: React.FC<{ width?: number; height?: number }>;
}

export default function Menu({ title, ImgComponent = Icon }: MenuProps) {
    return (
        <div className="inline-block">
            <div className="flex justify-center bg-secondary rounded-full p-3">
                <ImgComponent width={50} height={50} />
            </div>
            <div className="flex justify-center text-base tracking-tighter mt-2 text-white">{title}</div>
        </div>
    );
}
