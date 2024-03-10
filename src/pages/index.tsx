import React from 'react'
import { useAppSelector } from '~/hooks/useAppSelector';

function Product() {
    const auth = useAppSelector((state) => state.auth.value);
    return (
        <div>{auth}</div>
    )
}

export default Product