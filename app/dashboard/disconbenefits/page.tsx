import AddCalculate from './add_calculate';

export default function Page() {
    return (
        <div>
            <AddCalculate /> {/* AddCalculateコンポーネントを表示 */}
            <div style={{ marginTop: '40px' }}>
                <h1>総括安全衛生管理者</h1>
                <img src="/総括安全衛生管理者.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>安全管理者(専属must)</h1>
                <ul>
                    <li>厚生労働大臣の定める研修 + 実務</li>
                    <li>大卒+2年 or 高卒+4年</li>
                    <li>巡視：頻度なし</li>
                </ul>
                <img src="/安全管理者.png"  width={300} height={200} />
                <h2>専任要件</h2>
                <img src="/安全管理者_専任.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>衛生管理者(専属must)</h1>
                <ul>
                    <li>都道府県労働局長の免許(1種・2種)</li>
                    <li>保健師、薬剤師</li>
                    <li>衛生工学衛生管理者</li>
                    <li>巡視：週１回</li>
                </ul>
                <img src="/衛生管理者.png"  width={300} height={200} />
            </div>
        </div>

    );
  }
  