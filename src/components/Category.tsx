import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';

export default function Category() {
    //지금은 안에 state로 되어있지만 props로 받아서 열고닫기해줘야합니다..
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>Open sheet</button>

            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[-50, 0.5, 100, 0]} initialSnap={1}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}
