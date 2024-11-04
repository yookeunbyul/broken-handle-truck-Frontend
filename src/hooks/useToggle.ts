import { useEffect, useState } from 'react';
import { postNotification } from '../apis/notification';
import { toast } from 'react-toastify';
import { getMyStore } from '../apis/store';

export const useToggle = () => {
	const [isOn, setIsOn] = useState<boolean>(false);

	const toggleHandler = async () => {
		const data = await postNotification();

		if (data.msg === 'ok') {
			const state = data.notification.type;
			setIsOn(() => (state === 'open' ? true : false));
			toast.success(`가게를 ${state === 'open' ? '열었습니다.' : '닫았습니다.'}`);
		} else {
			toast.error(`가게를 ${isOn ? '닫' : '여'}는데 실패했습니다.`);
		}
	};

	useEffect(() => {
		getMyStore().then((res) => {
			if (res.msg === 'ok') {
				setIsOn(res.store.isOpen);
			}
		});
	}, []);

	// console.log(isOn); // 현재 영업 상태 확인용
	return { isOn, toggleHandler };
};
