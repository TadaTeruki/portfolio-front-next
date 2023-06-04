import { RemoveToken } from '../../../packages/token/token';
import { useRouter } from 'next/router';
import Base from '../../../components/all/base/base';

const LoginInfo = () => {
    const router = useRouter();
    return (
        <>
            <Base>
                <p>あなたはログイン中です。</p>
                <button
                    onClick={() => {
                        RemoveToken();
                        router.push('/login');
                    }}
                >
                    Logout
                </button>
            </Base>
        </>
    );
};

export default LoginInfo;
