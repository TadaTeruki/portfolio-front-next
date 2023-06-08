import { RemoveToken } from '../../../packages/token/token';
import { useRouter } from 'next/router';
import Base from '../../../components/layout/base/base';
import ButtonContainer from '../../../components/layout/container/buttoncontainer/buttoncontainer';

const LoginInfo = () => {
    const router = useRouter();
    return (
        <>
            <Base>
                <p>あなたはログイン中です。</p>
                <ButtonContainer size="large" color="default">
                    <button
                        onClick={() => {
                            RemoveToken();
                            router.push('/login');
                        }}
                    >
                        Logout
                    </button>
                </ButtonContainer>
            </Base>
        </>
    );
};

export default LoginInfo;
