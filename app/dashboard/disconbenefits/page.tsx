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
                <img src="/安全管理者.png"  width={300} height={200} />
                <h2>専任要件</h2>
                <img src="/安全管理者_専任.png"  width={300} height={200} />
            </div>
        </div>

    );
  }
  