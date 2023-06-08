import Base from '../../components/layout/base/base';
import { useState, useEffect } from 'react';
import RequestLogin from '../../packages/requests/auth/Login';
import ErrorNotify from '../../components/elements/general/error_notify/error_notify';
import { SetToken, QueryToken } from '../../packages/token/token';
import { useRouter } from 'next/router';
import ButtonContainer from '../../components/layout/container/buttoncontainer/buttoncontainer';

const LoginEntry = () => {
    const [stateErr, setErr] = useState<string>('');

    const [stateName, setName] = useState<string>('');
    const updateName = (event: any) => setName(event.target.value);

    const [statePasswd, setPasswd] = useState<string>('');
    const updatePasswd = (event: any) => setPasswd(event.target.value);
    const router = useRouter();

    useEffect(() => {
        if (QueryToken() != '') {
            router.push('/login/info');
        }
    }, [router]);

    const login = async () => {
        setErr('');
        await RequestLogin(stateName, statePasswd)
            .then((response) => {
                setErr('');
                SetToken(response.token);
                router.push('/login/info');
            })
            .catch((err) => {
                setErr(err);
            });
    };

    return (
        <>
            <Base>
                <h1>管理者としてログイン</h1>
                <h3>ID・パスワードを入力してください</h3>
                <div style={{ display: 'flex' }}>
                    <div>
                        管理者ID:&emsp;
                        <br />
                        パスワード:&emsp;
                        <br />
                        <ButtonContainer size="large" color="default">
                            <button onClick={login}>Login</button>
                        </ButtonContainer>
                        <br />
                    </div>
                    <div>
                        <input type="text" value={stateName} onChange={updateName} />
                        <br />
                        <input type="password" value={statePasswd} onChange={updatePasswd} />
                    </div>
                </div>
                <ErrorNotify>{stateErr}</ErrorNotify>
            </Base>
        </>
    );
};

export default LoginEntry;
