// 参考: https://www.okb-shelf.work/entry/able_await_in_interval
const WaitAccess = async (ms: number, callback: () => void, continueCond: () => boolean) => {
    const _interval = async () => {
        await new Promise(resolve => {
            setTimeout(resolve, ms);
        });

        if (continueCond()) {
            callback();
            await _interval();
        }
    };
    await _interval();
}

export default WaitAccess;
       